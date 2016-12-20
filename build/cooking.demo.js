var cooking = require('cooking');
var config = require('../config');
var md = require('markdown-it')();
var striptags = require('./strip-tags');
var slugify = require('transliteration').slugify;
var isProd = process.env.NODE_ENV === 'production';
var isPlay = !!process.env.PLAY_ENV;

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

cooking.set({
  entry: {
    app: './src/main.js'
  },
  dist: config.build.assetsRoot,
  clear: true, // 每次打包都清理掉 dist 目录
  hash: true,
  sourceMap: true,
  template: './index.html',
  publicPath: process.env.CI_ENV || '',
  devServer: {
    host:'localhost',
    port: 8081,
    log: false,
    publicPath: '/'
  },
  minimize: true,
  chunk: false,
  extractCSS: true,
  alias: config.alias,
  extends: ['vue2', 'lint'],
  postcss: config.postcss
});

// fix publicPath
if (!process.env.CI_ENV) {
  cooking.add('output.publicPath', '');
}

cooking.add('loader.md', {
  test: /\.md$/,
  loader: 'vue-markdown-loader'
});

cooking.add('vueMarkdown', {
  use: [
    [require('markdown-it-anchor'), {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    }],
    [require('markdown-it-container'), 'demo', {
      validate: function(params) {
        return params.trim().match(/^demo\s*(.*)$/);
      },

      render: function(tokens, idx) {
        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
          var description = (m && m.length > 1) ? m[1] : '';
          var content = tokens[idx + 1].content;
          var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
          var script = striptags.fetch(content, 'script');
          var style = striptags.fetch(content, 'style');
          var descriptionHTML = description
            ? md.render(description)
            : '';
          return `<demo-block class="demo-box">
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }]
  ],
  preprocess: function(MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function() {
      return '<table class="table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
  }
});

var wrap = function(render) {
  return function() {
    return render.apply(this, arguments)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">');
  };
};

if (isProd) {
  cooking.add('externals.vue', 'Vue');
  cooking.add('externals.vue-router', 'VueRouter');
}

cooking.add('vue.preserveWhitespace', false);
module.exports = cooking.resolve();

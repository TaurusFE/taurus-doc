// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var saladConfig = require('./salad.config.json');
module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  alias: {
    'vue$': 'vue/dist/vue.common.js',
    'src': path.resolve(__dirname, '../src'),
    'assets': path.resolve(__dirname, '../src/assets'),
    'components': path.resolve(__dirname, '../src/components'),
    'github': path.resolve(__dirname, '../node_modules/highlight.js/styles/github.css'),
    'markdown': path.resolve(__dirname, '../node_modules/github-markdown-css/github-markdown-css.css'),
  },

  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  },
  postcss: function (webapck) {
    saladConfig.features.partialImport = {
      addDependencyTo: webapck
    };
    return [
      require('postcss-salad')(saladConfig)
    ];
  }
}

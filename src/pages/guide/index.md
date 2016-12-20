<article class='markdown-body'>

# Taurus业务开发快速上手指南

## 一. 下载业务脚手架工程

在项目起始时需要从SVN上下载一个业务脚手架工程作为项目工程初始内容。

SVN下载地址为：

```
http://10.19.18.98:8080/svn/VERIS-CRM-TELENOR/trunk/R3/CRM/CRMCoreSaaS/TN_OMNI/veris-fe-scaffold
```

## 二. 工程目录说明

工程目录结构如下：

```text
veris-fe-scaffold  <业务模块脚手架工程目录>
  ├── .babelrc  <Babel配置文件>
  ├── .editorconfig  <WebStorm配置文件>
  ├── .eslintignore  <ESLint忽略列表配置文件>
  ├── .eslintrc.js  <ESLint配置文件>
  ├── .gitignore  <Git忽略列表配置文件>
  ├── build  <工程构建脚本目录>
  ├── config  <工程构建配置目录>
  ├── dist  <工程发布目录，里面放置工程编译后的内容，此目录由编译脚本自动创建>
  ├── package.json  <npm包配置文件>
  ├── README.md  <工程描述文件>
  └── src  <源码目录>
      ├── assets  <静态资源目录>
      │   ├── img  <图片目录>
      │   ├── css  <样式目录>
      │   └── fonts  <字体目录>
      ├── common  <跨业务模块的公共模块目录>
      ├── i18n  <国际化资源文件目录>
      │   ├── agent-view  <agent-view业务模块语言资源文件目录>
      │   ├── eshop  <eshop业务模块语言资源文件目录>
      │   ├── self-care  <self-care业务模块语言资源文件目录>
      │   ├── customer-mgmt  <客户管理业务模块语言资源文件目录>
      │   ├── resource-mgmt  <资源业务模块语言资源文件目录>
      │   ├── example  <业务侧演示例子使用的语言资源文件目录>
      │   └── <其他业务模块语言资源文件目录... ...>
      ├── agent-view  <agent-view业务模块源码目录>
      │   ├── assets  <静态资源目录>
      │   └── common  <公共模块目录>
      ├── eshop  <eshop业务模块源码目录>
      │   ├── assets  <静态资源目录>
      │   └── common  <公共模块目录>
      ├── self-care  <self-care业务模块源码目录>
      │   ├── assets  <静态资源目录>
      │   └── common  <公共模块目录>
      ├── customer-mgmt  <客户管理业务模块源码目录>
      │   ├── assets  <静态资源目录>
      │   └── common  <公共模块目录>
      ├── resource-mgmt  <资源管理业务模块源码目录>
      │   ├── assets  <静态资源目录>
      │   └── common  <公共模块目录>
      └── <其他业务模块目录... ...>
```

> 注意：脚手架工程目录除`i18n`目录及其子目录以外(保证i18n目录及其内容在发布后放置到web服务器的webroot根目录下)都是可以由业务侧进行目录结构调整的，但是，在目录调整的同时，业务侧也需要对受影响的编译脚本进行调整。同时，配置文件和编译脚本业务侧都可以根据实际情况予以修改。

## 三. 工程环境搭建

### 安装 NodeJS

到[官网][nodejs]下载安装最新版本NodeJS。

> 注意：
> 1. 请安装LTS版本的NodeJS，Current版本是尝鲜版本，不稳定，所以不要装这个版本！
> 2. NodeJS版本必须是`v4.6.1`及以上版本！由于前端相关生态环境更新比较快，因此，NodeJS后续可能会升级。

### 安装编译所需的依赖包

在业务工程根目录中执行以下命令安装编译前端代码所需的依赖包：

```bash
npm install
```

> 注意：因为之后的编译动作都将依赖这些NPM包，所以请保证这个安装过程是正常完成的，否则编译很可能不能正常进行。

### 构建工程

工程构建分为开发和产品两种模式。

#### 开发模式构建

```bash
npm run dev
```

默认情况下，执行以上命令成功后，默认在`8082`端口将启动一个web server（你可以浏览到工程自带的页面，如：`http://localhost:8082/examples/busi-component-demo/index.html`），此时，工程源码是支持热加载的（即：当修改了源码后浏览器将立即自动刷新页面展现结果）！

#### 产品模式构建

```bash
npm run build
```

## 四. NPM包更新

当Taurus发布新版本后，业务侧根据具体情况可能需要升级`aii-taurus`包，先在命令行环境进入业务工程根目录，然后执行下面的命令升级NPM包

```bash
npm update aii-taurus
```

> 注意：如果需要升级到指定版本，需要指定具体的版本号，如：升级到0.1.4版本需要执行命令`npm update aii-taurus@0.1.4`

如果由于某种原因需要降级`aii-taurus`包，那么可以先卸载当前版本的包然后安装指定版本的包，例如：
如果本地当前版本`aii-taurus`包版本为`0.1.4`，你需要将其降级到`0.1.1`，那么，先执行`npm uninstall aii-taurus`卸载当前版本，然后执行`npm install aii-taurus@0.1.1`安装指定版本的包。

当`aii-taurus`包更新完成后，需要执行下面的命令更新静态资源：

```
npm run taurus-assets
```

## 五. 开发工具选择

推荐使用下面的编辑器作为开发工具：

1. WebStorm

    安装以下插件：

      * ESLint

      * Vue.js

2. Atom

    安装以下插件：

      * linter-eslint

      * language-vue

3. VSCode

    安装以下插件：

      * ESLint (vue文件貌似失效)

      * Babel ES6/ES7

      * vue

4. Sublime Text

    安装以下插件：

      * ESLint

      * Vue Syntax Highlight

## 六. 开发模版

Taurus提供了几个开发页面时的文件模板，可以将其内容作为模版配置到IDE或编辑器内，每次新建文件的时候选择对应的模版来生成新文件，这样可以提升开发效率。

新开发的页面推荐基于下面的模版来创建。

### index.html文件模版

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
    <!-- content请填写业务模块编码，此编码与i18n目录下对应模块的子目录名称保持一致,这里以eshop为例子 -->
    <meta name="biz-code" content="eshop">
    <title></title>
    <link rel="icon" href="/assets/img/favicon.ico" type="image/x-icon">
    <link href="/assets/css/main.css" rel="stylesheet">
    <!-- 此处定义业务样式 -->
</head>
<body>
  <div id="app">
    <!-- 此处放置HTML内容 -->
  </div>
</body>
  <!-- 此处放置需要引入的业务侧js文件 -->
</html>
```

> 注意：`name`为`biz-code`（名称不能更改）的`meta`标记是必须定义的，否则，此页面的国际化内容将失效！

业务模块编码如下：

|业务模块|编码|
|-------|---|
|eshop|eshop|
|self care|self-care|
|agent view|agent-view|
|customer managment|customer-mgmt|
|resource managment|resource-mgmt|

> 注意：如果需要扩展业务模块编码请联系Taurus团队。

### index.js文件模版

```js
import {...} from 'aii-taurus';
new Vue({
  el: '#app',
  created: function () { // 初始化
  },
  components: { // 注册需要使用的组件
  },
  data: function() {
    return {}; // 自定义数据结构
  },
  methods: { // 方法定义
  }
});
```

以上模版中的`...`为某些可用的模块名，如：

```js
import {taurus, TBars, TButton} from 'aii-taurus';
```

### 业务组件文件模版

```html
<style scoped>
</style>
<template>
</template>
<script>
export default {
  // 初始化，参见：https://vuefe.cn/guide/instance.html#生命周期图示
  created: function () {
  },
  // 参见：https://vuefe.cn/api/#data
  data: function () {
    return {};
  },
  // 参见：https://vuefe.cn/api/#props
  props: {
  },
  // 参见：https://vuefe.cn/api/#methods
  methods: {
  }
};
</script>
```

## 七. 页面开发

1. 在`src`目录对应业务模块目录内创建一个子目录，如：`src/eshop/family`；

    > 注意：业务模块目录名称为各业务模块编码，此编码是预先定义好的！

2. 在`src/eshop/family`内创建`index.js`和`index.html`两个文件；

    在`index.js`里必须首先引入Taurus相关的模块。如：

    ```js
    import {taurus, TSwitcher, TDoughnut} from 'aii-taurus';
    ```

    > 注意：`index.js`和`index.html`两个文件是此页面入口，编译脚本依赖了这两个名称，所以不能将这两个文件改名！

3. 导出本业务模块的业务组件给其他业务模块使用：

    在`src/common/pub.js`里导出业务组件给其他业务模块使用

    ```bash
        /**
         * 这只是一个例子，请实际开发的时候以各业务功能需要导出的业务组件为准
         */
        import Tselectuser from '../examples/common/select-user';

        export {
          Tselectuser
        };
    ```

4. 配置服务调用方式，以hub还是restful风格调用服务：

    在`src/common/pub.js`里指定服务的调用方式

    ```bash
       import {taurusConfig, taurusConstant} from 'aii-taurus';
       // 设置服务调用的类型为HUB或者RESTFUL
       taurusConfig.common.SERVICE_SWICTH = taurusConstant.SERVICE_INVOCATION_TYPE.HUB || taurusConstant.SERVICE_INVOCATION_TYPE.RESTFUL;
    ```

5. 开发环境下配置反向代理调试后台接口:

    在`config/index.js`中配置反向代理，这里以HubCrmServlet为例

    ```bash
          dev: {
              env: require('./dev.env'),
              port: 8082,
              assetsSubDirectory: 'assets',
              assetsPublicPath: '/',
              proxyTable: {
                '/HubCrmServlet': {
                  target:'http://10.1.242.25:8082/HubCrmServlet',
                  changeOrigin:true,
                  pathRewrite:{
                    '^/HubCrmServlet':''
                  }
                }
              }
       ```

6. 在命令行控制台进入工程根目录，输入以下命令启动开发环境：

    ```bash
    npm run dev
    ```

    打开浏览器访问此页面对应的地址。开发过程中，只要代码变更(进行保存操作)，浏览器对应页面里的内容将自动刷新。

7. 页面开发完成后，输入下面的命令进行发布：

    ```bash
    npm run build
    ```

    构建完成后，发布内容将全部生成在`dist`目录内。

## 七. 国际化

Taurus使用[vue-i18n][vue-i18n]进行国际化处理。

### 语言资源文件和目录

在工程`src`目录下有一个`i18n`目录(此`i18n`目录在编译发布后将复制到发布目录下)，此目录内放置国际化语言资源文件。

在`i18n`目录中，各模块的语言文件将被放置在以各模块编码为名称的子目录内。如：

```text
i18n
├── eshop
│   ├── cn.json
│   └── en.json
└── self-care
    ├── cn.json
    └── en.json
    ... ...
```

所有语言资源文件都为json格式，并以[ISO 3166-2][iso_3166-2]两位小写国家代码作为文件名，如：`cn.json`、`en.json`等。以下是两个资源文件的例子：

**cn.json**

```json
{
  "shoppingcart": "购物车",
  "insuranse": "保险",
  "instalment": "分期付款",
  "stock": "股票",
  "demo": {
    "hello": "你好",
    "world": "世界",
    "hi": "@:demo.hello @:demo.world !!"
  }
}
```

**en.json**

```json
{
  "shoppingcart": "Shoppingcart",
  "insuranse": "Insuranse",
  "instalment": "Instalment",
  "stock": "Stock",
  "demo": {
    "hello": "Hello",
    "world": "World",
    "hi": "@:demo.hello @:demo.world !!"
  }
}
```

### 资源加载方式

在语言资源文件配置好后，可以以两种方式使用国际化资源。

假设当前语言为英语：

*方式一：*在HTML模版代码里可以使用`$t`函数来加载国际化资源。

  ```html
  <!-- 输出 <div>Shoppingcart</div> -->
  <div>{{ $t("shoppingcart") }}</div>

  <!-- 输出 <div>Hello</div> -->
  <div>{{ $t("demo.hello") }}</div>

  <!-- 输出 <div>Hello World !!</div> -->
  <div>{{ $t("demo.hi") }}</div>
  ```

*方式二：*在组件实例里可以使用`this.$t`函数加载国际化资源，非组件实例内可以使用`Vue.t`静态函数加载国际化资源。

  ```js
  var shoppingcart = this.$t('shoppingcart');
  var hi = this.$t('demo.hi');
  ```

  ```js
  var shoppingcart = Vue.t('shoppingcart');
  var hi = Vue.t('demo.hi');
  ```

某些时候，你需要在组件初始化的时候通过js代码获取国际化资源字符串，此时，你应该将这些逻辑放入`i18n`生命周期函数内，此生命周期勾子函数在每次加载资源文件后被taurus调用，它有两个参数，第一个参数是在`<meta>`标记上定义的业务编码，第二个参数是加载的语言编码，如：

```js
new Vue({
  el: '#wrapper',
  data: function () {
    return {
      hi: 'hello'
    };
  },
  i18n: function (bizCode, newLang) {
    console.log('bizCode=' + bizCode + ' ; newLang=' + newLang);
    console.log('foo=' + this.$t('foo'));
  }
});
```

### 语言切换

如果需要动态切换当前语言，首先需要引入`taurus`模块：

```js
import {taurus} from 'aii-taurus';

//获取当前语言
console.log(taurus.lang);

//切换当前语言
taurus.lang = 'cn';

//加载语言资源
taurus.loadLang('eshop','cn');
```

## 附录

### 相关学习网站

[NodeJS官网][nodejs]

[webpack官网][webpack]

[vue中文网][vue]

[vue官方脚手架工具][vue-cli]

[vue github仓库][vue-github]

[vuex github仓库][vuex-github]

[vue-router github仓库][vue-router-github]

[vue-i18n 官方文档][vue-i18n-doc]

[vuex 官方中文文档][vuex]

[vue-router 官方中文文档][vue-router]

[vue 资源列表][awesome-vue]

[nodejs]: https://nodejs.org/en/
[webpack]: http://webpack.github.io/
[vue]: https://vuefe.cn/
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-github]: https://github.com/vuejs/vue/
[vuex-github]: https://github.com/vuejs/vuex
[vue-router-github]: https://github.com/vuejs/vue-router
[vuex]: https://github.com/vuejs/vuex/tree/1.0/docs/zh-cn
[vue-router]: http://router.vuejs.org/zh-cn/index.html
[awesome-vue]: https://github.com/vuejs/awesome-vue
[iso_3166-2]: https://en.wikipedia.org/wiki/ISO_3166-2
[vue-i18n-doc]: https://kazupon.github.io/vue-i18n/
[vue-i18n]: https://github.com/kazupon/vue-i18n

[amcharts-demo]: http://10.19.18.95:48888/examples/amcharts-demo/index.html
[autocomplete-demo]: http://10.19.18.95:48888/examples/autocomplete-demo/index.html
[box-group-demo]: http://10.19.18.95:48888/examples/box-group-demo/index.html
[breadcrumbs-demo]: http://10.19.18.95:48888/examples/breadcrumbs-demo/index.html
[button-demo]: http://10.19.18.95:48888/examples/button-demo/index.html
[collapse-demo]: http://10.19.18.95:48888/examples/collapse-demo/index.html
[cookie-helper-demo]: http://10.19.18.95:48888/examples/cookie-helper-demo/index.html
[data-table-demo]: http://10.19.18.95:48888/examples/data-table-demo/index.html
[date-picker-demo]: http://10.19.18.95:48888/examples/date-picker-demo/index.html
[dropdown-demo]: http://10.19.18.95:48888/examples/dropdown-demo/index.html
[form-validation-demo]: http://10.19.18.95:48888/examples/form-validation-demo/index.html
[loading-demo]: http://10.19.18.95:48888/examples/loading-demo/index.html
[modal-demo]: http://10.19.18.95:48888/examples/modal-demo/index.html
[number-stepper-demo]: http://10.19.18.95:48888/examples/number-stepper-demo/index.html
[pager-demo]: http://10.19.18.95:48888/examples/pager-demo/index.html
[range-slider-demo]: http://10.19.18.95:48888/examples/range-slider-demo/index.html
[restful-service-demo]: http://10.19.18.95:48888/examples/restful-service-demo/index.html
[scroll-to-demo]: http://10.19.18.95:48888/examples/scroll-to-demo/index.html
[search-filter-demo]: http://10.19.18.95:48888/examples/search-filter-demo/index.html
[select-demo]: http://10.19.18.95:48888/examples/select-demo/index.html
[simple-table-demo]: http://10.19.18.95:48888/examples/simple-table-demo/index.html
[speech-bubble-demo]: http://10.19.18.95:48888/examples/speech-bubble-demo/index.html
[status-message-demo]: http://10.19.18.95:48888/examples/status-message/index.html
[switcher-demo]: http://10.19.18.95:48888/examples/switcher-demo/index.html
[tabs-demo]: http://10.19.18.95:48888/examples/tabs-demo/index.html
[tooltips-demo]: http://10.19.18.95:48888/examples/tooltips-demo/index.html
[video-player-demo]: http://10.19.18.95:48888/examples/video-player-demo/index.html
</article>

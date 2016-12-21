<article class='markdown-body'>

# JS开发规范

## 文件模版

新开发的页面推荐基于下面的模版来创建。

### 1. index.html文件模版

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

> 注意：`name`为`biz-code`的`meta`标记是必须定义的，否则，此页面的国际化内容将失效！

业务模块编码如下：

|业务模块|编码|
|-------|---|
|eshop|eshop|
|self care|self-care|
|agent view|agent-view|
|customer managment|customer-mgmt|
|resource managment|resource-mgmt|

> 注意：如果需要扩展业务编码请联系Taurus团队。

### 2. index.js文件模版

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

Taurus中可导出使用的模块如下：

|模块|描述| |
|---|---|---|
|TBars| 柱状图组件 | [Demo][amcharts-demo] |
|TDoughnut| 饼图组件 | [Demo][amcharts-demo] |
|TGauge| 仪表盘组件 | [Demo][amcharts-demo] |
|TLine| 折线图组件 | [Demo][amcharts-demo] |
|TAutocomplete| 自动完成输入框组件 | [Demo][autocomplete-demo] |
|TBoxGroup| 单选框组、多选框组、多选按钮组组件 | [Demo][box-group-demo] |
|TBreadcrumbs| 面包屑组件 | [Demo][breadcrumbs-demo] |
|TButton| 按钮组件 | [Demo][button-demo] |
|TDatePicker| 日期选择组件 | [Demo][date-picker-demo] |
|TSelectDropdown| 选择下拉框 | [Demo][dropdown-demo] |
|TSubDropdown| 树状选择下拉框 | [Demo][dropdown-demo] |
|TAlert| 提示对话框 | [Demo][modal-demo] |
|TConfirm| 确认对话框 | [Demo][modal-demo] |
|TModal| 模态对话框 | [Demo][modal-demo] |
|TNumberStepper| 数字输入框 | [Demo][number-stepper-demo] |
|TPager| 翻页组件 | [Demo][pager-demo] |
|TRangeSlide| 数值范围组件 | [Demo][range-slider-demo] |
|TSearchFilter| 搜索、查询框组件 | [Demo][search-filter-demo] |
|TSelect| 简单下拉框组件 | [Demo][select-demo] |
|TSpeechBubble| 聊天下拉框组件 | [Demo][speech-bubble-demo] |
|TSpeechBubbleFilter| 聊天过滤下拉框组件 | [Demo][speech-bubble-demo] |
|TSpeechBubbleFilterTree| 聊天过滤树下拉框组件 | [Demo][speech-bubble-demo] |
|TStatusMessage| 消息组件 | [Demo][status-message-demo] |
|TTabs| 页签组件 | [Demo][tabs-demo] |
|TFlatTabs| 平面页签组件 | [Demo][tabs-demo] |
|TVideoPlayer| 视频(Youtobe)组件 | [Demo][video-player-demo] |
|TSimpleTable| 简单表格组件 | [Demo][simple-table-demo] |
|TDataTable| 数据表格组件 | [Demo][data-table-demo] |
|TSwitcher| 开关组件 | [Demo][switcher-demo] |
|TLoading| 加载进度组件 | [Demo][loading-demo] |
|cookieHelper| Cookie读写模块 | [Demo][cookie-helper-demo] |
|localStorage| 浏览器本地存储模块 | [Demo][cookie-helper-demo] |
|taurus| 全局辅助模块，包括国际化、读写Session信息等全局控制功能 | |

插件：

|模块|描述| |
|---|---|---|
|scrollTo|实现了页面中不同位置之间的平滑滚动能力| [Demo][scroll-to-demo] |
|statusMessage|实现了消息提示框组件的封装| [Demo][status-message-demo] |
|restfulService|实现了RESTful方式服务调用能力 | [Demo][restful-service-demo] |

指令：

|模块|描述| |
|---|---|---|
|collapse|实现了页面元素折叠能力| [Demo][collapse-demo] |
|tooltip|实现了鼠标提示功能| [Demo][tooltips-demo] |

> 注意：
> 1. 组件都需要显示使用`import`关键字(ES6关键字)进行导出后使用；
> 2. 插件和指令可以直接使用，不需要再使用`Vue.use`或`Vue.directive`进行注册！

### 3. 业务组件文件模版

以下是业务组件文件模版。

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

## 代码书写风格

所有javascript脚本书写风格按照ESLint静态检查规则实现（不同的编辑器需要安装不同的ESLint插件，参见附录）。

> 注意：由于工程编译脚本已经整合ESLint进行代码静态检查，因此，如果在开发时手动禁用了ESLint插件进行静态代码检查，那么可能在编译时不能通过代码静态检查环节导致编译失败!

## 文件和目录

所有文件名使用全小写命名，单词之间使用`-`号分割，如：

```text
box-group.vue
service.js
main.css
```

开发一个新页面时，你需要在`src`目录对应业务模块的目录里创建一个子目录，然后把该页面的源码放到此子目录中。例如：新写一个eshop业务模块的页面family时，你需要将这个页面的源码放到`src/eshop/family`目录内。

## 组件（component）

所有组件注册的自定义标记都需要带上`t-`前缀。如：

```js
import {TBizComp} from 'common/biz-comp';
Vue.component('t-biz-comp', TBizComp);
```

```js
// 推荐写法
import {TBizComp} from 'common/biz-comp';
new Vue({
  el: '#app',
  components: {
    TBizComp
  }
});
```

```js
import {TBizComp} from 'common/biz-comp';
new Vue({
  el: '#app',
  components: {
    't-biz-comp': TBizComp
  }
});
```

## 事件总线（event bus)

所有需要用到事件总线的场景请自行定义一个模块文件`bus.js`，其内容如下：

```js
import Vue from 'vue';
// 事件总线对象，用于简单的组件间通讯
export default new Vue();
```

`bus.js`需要供所有页面共享（只需定义一个文件）还是部分页面共享（需要定义多个文件放在不同的位置）由业务侧自行根据实际场景决定。

### 事件名称

为了避免多个模块共享一个事件总线对象时产生冲突，事件名称必须命名为如下形式：

```text
<模块编码> + '-' + 事件名
```

其中，模块编码与名称为`biz-code`的`meta`标记中指定的模块编码一致（如前所述）。

例如：`eshop-item-changed`，`customer-mgmt-item-changed`等。

### 事件参数

为了避免多个模块共享一个事件总线对象时产生冲突，使用`$emit`方法触发事件时，第一个参数必须是发送消息的对象实例，例如：

```
// 子组件发送examples-item-changed事件
this.$emit('examples-item-changed', this, foo, bar);

// 父组件接收examples-item-changed事件
this.$on('examples-item-changed', function (source, foo, bar) {
  // 当有多个父组件实例的时候，可以使用source做对象识别，如
  if (source.$parent === this) {
    // ... ...
  }
});
```

## 业务侧公共模块

本业务模块使用的公共模块统一放置到本业务模块工程目录对应的`common`子目录内，同时，需要在`common`子目录里定义一个`pub.js`，在这个文件里统一`export`出所有公共模块。本业务模块内部统一`import`这个`pub.js`来使用本业务模块的公共模块。

对于需要提供给其他业务模块使用的本业务模块的公共模块，需要在工程根目录的`common`目录内定义一个`pub.js`文件，然后在这个文件内`export`本业务模块的公共模块供其他模块使用。

下面是一个例子：

```text
biz <业务工程根目录>
  ├── common <跨业务模块的公用模块目录>
  │     └── pub.js <各业务模块都可以使用的公共模块>
  ├── customer-mgmt <客管业务模块源码目录>
  │      └── common <客管公用模块目录>
  │            ├── others <其他业务组件目录>
  │            │     ├── customer-a.vue <a业务组件>
  │            │     ├── customer-b.vue <b业务组件>
  │            │     └── ... ... <其他业务组件>
  │            ├── customer-info.vue <客户信息展示业务组件>
  │            ├── customer-c.vue <c业务组件>
  │            ├── ... ... <其他业务组件>
  │            └── pub.js <客管业务模块内部使用的公共模块>
  └── agent-view <agentview业务模块源码目录>
        └── common <agentview公用模块目录>
              ├── agentView-d.vue <c业务组件>
              ├── ... ... <其他业务组件>
              └── pub.js <agentview业务模块内部使用的公共模块>

```

如果客管内部需要使用客户信息展示业务组件和a、b、c三个业务组件，那么，只需在对应客管页面的实现文件里`import`它们：

```js
// 从 customer-mgmt/common 引入 pub
import {TCustomerInfo, customerA, customerB, customerC} from '../common/pub';
// 使用 TCustomerInfo 和 customerA, customerB, customerC ... ...
```

如果 AgentView 页面逻辑里不仅需要使用客户信息展示业务组件，还需要使用d组件，则，只需在对应 AgentView 页面的实现文件里`import`它们：

```js
// 从工程根目录的 common 引入 pub
import {TCustomerInfo} from '/common/pub';
// 从 agent-view/common 引入 pub
import {agentViewD} from '../common/pub';
// 使用 TCustomerInfo 和 customerD ... ...
```

> 注意：以上例子中的pub模块路径请根据实际引入文件的位置自行修改！

## Cookie信息读写（草稿）

Taurus已经将一部分常用的cookie信息的读写进行了固化封装，业务模块只需要调用`taurus`对象上的API读出对应的值即可，这部分信息在cookie内的key是固定不变的，业务模块不能将其覆盖掉。如果业务模块需要将一些自定义信息写入cookie，那么，必须调用`taurus`的`setBizInfo`、`getBizInfo`、`removeBizInfo`三个方法进行操作。

## ECMAScript6

Taurus通过Babel来支持ES6语法，由于Babel当前没有完全实现ES6标准，因此，某些不常用ES6特性将不被支持，具体情况请查看[兼容列表][es6-compat]。

[nodejs]: https://nodejs.org/en/
[webpack]: http://webpack.github.io/
[vue]: https://vuefe.cn/
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-github]: https://github.com/vuejs/vue/
[vuex-github]: https://github.com/vuejs/vuex
[vue-router-github]: https://github.com/vuejs/vue-router
[vue-resource-github]: https://github.com/vuejs/vue-resource
[vuex]: https://github.com/vuejs/vuex/tree/1.0/docs/zh-cn
[vue-router]: http://router.vuejs.org/zh-cn/index.html
[awesome-vue]: https://github.com/vuejs/awesome-vue
[iso_3166-2]: https://en.wikipedia.org/wiki/ISO_3166-2
[vue-i18n-doc]: https://kazupon.github.io/vue-i18n/
[vue-i18n]: https://github.com/kazupon/vue-i18n
[es6-compat]: http://kangax.github.io/compat-table/es6/

[amcharts-demo]: /examples/amcharts-demo/index.html
[autocomplete-demo]: /examples/autocomplete-demo/index.html
[box-group-demo]: /examples/box-group-demo/index.html
[breadcrumbs-demo]: /examples/breadcrumbs-demo/index.html
[button-demo]: /examples/button-demo/index.html
[collapse-demo]: /examples/collapse-demo/index.html
[cookie-helper-demo]: /examples/cookie-helper-demo/index.html
[data-table-demo]: /examples/data-table-demo/index.html
[date-picker-demo]: /examples/date-picker-demo/index.html
[dropdown-demo]: /examples/dropdown-demo/index.html
[form-validation-demo]: /examples/form-validation-demo/index.html
[loading-demo]: /examples/loading-demo/index.html
[modal-demo]: /examples/modal-demo/index.html
[number-stepper-demo]: /examples/number-stepper-demo/index.html
[pager-demo]: /examples/pager-demo/index.html
[range-slider-demo]: /examples/range-slider-demo/index.html
[restful-service-demo]: /examples/restful-service-demo/index.html
[scroll-to-demo]: /examples/scroll-to-demo/index.html
[search-filter-demo]: /examples/search-filter-demo/index.html
[select-demo]: /examples/select-demo/index.html
[simple-table-demo]: /examples/simple-table-demo/index.html
[speech-bubble-demo]: /examples/speech-bubble-demo/index.html
[status-message-demo]: /examples/status-message/index.html
[switcher-demo]: /examples/switcher-demo/index.html
[tabs-demo]: /examples/tabs-demo/index.html
[tooltips-demo]: /examples/tooltips-demo/index.html
[video-player-demo]: /examples/video-player-demo/index.html
</article>

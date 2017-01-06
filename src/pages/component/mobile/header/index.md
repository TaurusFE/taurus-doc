## Header组件

Header组件是一个顶部导航栏组件，支持显示按钮、自定义文字和固定在顶部。

### 引入

```js
import { THeader } from 'ai-taurus-mobile';
```

### 用法

参见[Header组件Demo][header-demo]。

基础用法,固定在页面顶部

```html
<t-header fixed title="固定在顶部"></t-header>
```

设置 left 或 right slot

```html
<t-header title="标题过长会隐藏后面的内容">
  <router-link to="/" slot="left">
    <t-button icon="back">返回</t-button>
  </router-link>
  <t-button icon="more" slot="right"></t-button>
</t-header>
```

设置多个按钮

```html
<t-header title="多个按钮">
  <router-link to="/" slot="left">
    <t-button icon="back">返回</t-button>
    <t-button @click="handleClose">关闭</t-button>
  </router-link>
  <t-button icon="more" slot="right"></t-button>
</t-header>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
  fixed | 固定在页面顶部 | Boolean |  | - | false |
| title | 标题 | String | - | '' |

### Slot

| 名称 | 说明 |
| ------- | ---- |
|left| 左边显示元素 |
| right | 右边边显示元素 |


[header-demo]: /static/mobile-demo/examples/index.html#/header

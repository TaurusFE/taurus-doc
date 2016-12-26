## TTabContainer组件

TTabContainer是加载进度提示组件，它一般与TTabContainerItem组件配合使用。

### 引入

```js
import { TTabContainer, TTabContainerItem } from 'ai-taurus-mobile';
```

### 用法

参见[TTabContainer组件Demo][tab-container-demo]。

基础用法

改变`active`的值，与 <tab-container-item> 的 id 一致即显示对应页面。

```html
<t-tab-container v-model="active">
  <t-tab-container-item id="tab-container1">
    <t-cell v-for="n in 10" title="tab-container 1"></t-cell>
  </t-tab-container-item>
  <t-tab-container-item id="tab-container2">
    <t-cell v-for="n in 5" title="tab-container 2"></t-cell>
  </t-tab-container-item>
  <t-tab-container-item id="tab-container3">
    <t-cell v-for="n in 7" title="tab-container 3"></t-cell>
  </t-tab-container-item>
</t-tab-container>
```

### Attributes

TTabContainer组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value | 当前激活的 id | - | - | - |
| swipeable | 显示滑动效果 | Boolean | true\|false |false|

TTabContainerItem组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| id | 页签项Id | - | - | - |

### Slot

TTabContainer组件

| 名称 | 说明 |
| ------- | ---- |
| - | 自定义显示内容 |

TTabContainerItem组件

| 名称 | 说明 |
| ------- | ---- |
| - | 自定义显示内容 |

[tab-container-demo]: /static/mobile-demo/examples/index.html#/tab-container

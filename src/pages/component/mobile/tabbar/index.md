## Tabbar组件

Tabbar组件是一个底部选项卡组件，点击 tab 会切换显示的页面。依赖 tab-item 组件。

### 引入

```js
import { TTabbar, TTabItem  } from 'ai-taurus-mobile';
```

### 用法

参见[Tabbar组件Demo][tabbar-demo]。

搭配 tab-container 组件使用

```html
<t-tabbar v-model="selected">
  <t-tab-item id="外卖">
    <img slot="icon" src="../assets/100x100.png">
    外卖
  </t-tab-item>
  <t-tab-item id="订单">
    <img slot="icon" src="../assets/100x100.png">
    订单
  </t-tab-item>
  <t-tab-item id="发现">
    <img slot="icon" src="../assets/100x100.png">
    发现
  </t-tab-item>
  <t-tab-item id="我的">
    <img slot="icon" src="../assets/100x100.png">
    我的
  </t-tab-item>
</t-tabbar>
```

### Attributes
tabbar

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
  fixed | 固定在页面底部 | Boolean |  | - | false |
| value | 返回当前选中的 tab-item 的 id | * |  |  |

tab-item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| id | 选中后的返回值| * |  |  |

### Slot
tabbar

| 名称 | 说明 |
| ------- | ---- |
|-| 内容 |

tab-item

| 名称 | 说明 |
| ------- | ---- |
|-| 显示文字 |
|icon | icon图标 |


[tabbar-demo]: /static/mobile-demo/examples/index.html#/tabbar

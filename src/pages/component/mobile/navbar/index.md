## Navbar组件

Navbar组件是一个顶部选项卡组件，依赖 tab-item 组件。

### 引入

```js
import { TNavbar, TTabItem  } from 'ai-taurus-mobile';
```

### 用法

参见[Navbar组件Demo][navbar-demo]。

搭配 tab-container 组件使用

```html
<t-navbar v-model="selected">
  <t-tab-item id="1">选项一</t-tab-item>
  <t-tab-item id="2">选项二</t-tab-item>
  <t-tab-item id="3">选项三</t-tab-item>
</t-navbar>

<!-- tab-container -->
<t-tab-container v-model="selected">
  <t-tab-container-item id="1">
    <t-cell v-for="n in 10" :title="'内容 ' + n" />
  </t-tab-container-item>
  <t-tab-container-item id="2">
    <t-cell v-for="n in 4" :title="'测试 ' + n" />
  </t-tab-container-item>
  <t-tab-container-item id="3">
    <t-cell v-for="n in 6" :title="'选项 ' + n" />
  </t-tab-container-item>
</t-tab-container>
```

### Attributes
navbar

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
  fixed | 固定在页面顶部 | Boolean |  | - | false |
| value | 返回当前选中的 tab-item 的 id | * |  |  |

tab-item

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| id | 选中后的返回值| * |  |  |

### Slot
navbar

| 名称 | 说明 |
| ------- | ---- |
|-| 内容 |

tab-item

| 名称 | 说明 |
| ------- | ---- |
|-| 显示文字 |
|icon | icon图标 |


[navbar-demo]: /static/mobile-demo/examples/index.html#/navbar

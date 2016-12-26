## TCell组件

TCell组件是一个移动端列表组件。可用作展示列表信息、链接或者表单等。

### 引入

```js
import { TCell } from 'ai-taurus-mobile';
```

### 用法

参见[Cell组件Demo][cell-demo]。

基础用法

```html
<t-cell title="标题文字"></t-cell>
<t-cell title="标题文字" value="说明文字"></t-cell>
```

链接项

```html
<t-cell title="标题文字" to="http://10.19.18.95:47777/" is-link value="说明文字"></t-cell>
```

带字体图标的项

```html
<t-cell title="标题文字" icon="compute" value="带字体图标的项"></t-cell>
```

带自定义图标（图片）的项

```html
<t-cell title="标题文字" icon="more" value="带字体图标的项">
  <span>我是图片</span>
  <img slot="icon" src="../assets/100x100.png" width="24" height="24">
</t-cell>
```

自定义内容项

```html
<t-cell title="标题文字" is-link>
  <span style="color: green">自定义内容项</span>
</t-cell>
```

带备注的项目

```html
<t-cell title="标题" label="描述信息" is-link></t-cell>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 标题文本，它将显示在列表项左侧 | String | - | '' |
| value | 说明文本，它将显示在列表项右侧 | String | - | '' |
| icon | 图标 | String | 'back'\|'more' | - |
| to | 跳转链接 | String | - | '' |
| label | 备注信息，它将显示在标题下方 | String | - | - |
| is-link | 是否是链接项。链接项会显示箭头图标。搭配 `to` 属性使用 | Boolean | true\|false | false |

### Slot

| 名称 | 说明 |
| ------- | ---- |
| - | 自定义显示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |


[cell-demo]: /static/mobile-demo/examples/index.html#/cell

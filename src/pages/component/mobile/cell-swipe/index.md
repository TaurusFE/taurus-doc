## TCellSwipe组件

TCellSwipe组件类似TCell组件，是带滑动菜单的列表组件。

### 引入

```js
import { TCellSwipe } from 'ai-taurus-mobile';
```

### 用法

参见[TCellSwipe组件Demo][cell-swipe-demo]。

基础用法

```html
<t-cell-swipe title="标题文字" :right="[
  {
    content: 'Delete',
    style: { background: 'red', color: '#fff' },
    handler: () => this.$messagebox('delete')
  }
]"></t-cell-swipe>
```

> 注意：`content` 可以是 HTML 或者纯文本。

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| icon | 图标 | String| back\|more | - |
|title | 标题 | String | - | - |
|to | 跳转链接 | String | - | - |
|value | 内容 | - | - | - |
|label | 备注信息，显示在标题下方 | String | - | - |
|is-link | 链接，会显示箭头图标。搭配 to 属性使用 | Boolean | - | - |
|left | 按钮组, { content, style, handler } | Object[] | - | - |
|right | 按钮组, { content, style, handler } | Object[] | - | - |

### Slot

| 名称 | 说明 |
| ------- | ---- |
| - | 自定义显示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |


[cell-swipe-demo]: /static/mobile-demo/examples/index.html#/cell-swipe

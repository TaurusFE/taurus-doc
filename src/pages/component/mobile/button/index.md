## Button组件

Button组件是一个按钮组件，提供几种基础样式和尺寸，可自定义图标。

### 引入

```js
import { TButton  } from 'ai-taurus-mobile';
```

### 用法

参见[Button组件Demo][button-demo]。

改变颜色

```html
<t-button type="default">default</t-button>
<t-button type="primary">primary</t-button>
<t-button type="danger">danger</t-button>
```

改变大小

```html
<t-button size="small">small</t-button>
<t-button size="large">large</t-button>
<t-button size="normal">normal</t-button>
```
```

禁用按钮

```html
<t-button disabled>disabled</t-button>
```

幽灵按钮

```html
<t-button plain>plain</t-button>
```

带图标

```html
<t-button icon="back">back</t-button>
<t-button icon="more">更多</t-button>
```

自定义图标

```html
<t-button>
  <img src="../assets/100x100.png" height="20" width="20" slot="icon">
  带自定义图标
</t-button>
```

绑定 click 事件

```html
<t-button @click.native="handleClick">点击触发 handleClick</t-button>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
  plain | 幽灵按钮 | Boolean |  |  | false |
  disabled | 禁用状态 | Boolean |  |  | false |
| type | 按钮显示样式 | String|  default, primary, danger| default |
| size | 尺寸 | String| small, normal, large| normal |
| icon | 图标 | String| more, back|  |

### Slot

| 名称 | 说明 |
| ------- | ---- |
|-| 显示的文本内容 |
|icon | 自定义显示的图标 |


[button-demo]: /static/mobile-demo/examples/index.html#/button

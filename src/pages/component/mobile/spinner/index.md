## TSpinner组件

TSpinner是加载进度提示组件。

### 引入

```js
import { TSpinner } from 'ai-taurus-mobile';
```

### 用法

参见[TSpinner组件Demo][spinner-demo]。

基础用法

```html
<t-spinner type="snake"></t-spinner>
<t-spinner type="double-bounce"></t-spinner>
<t-spinner type="triple-bounce"></t-spinner>
<t-spinner type="fading-circle"></t-spinner>

<!-- 或者接受传入类型的序号 -->
<t-spinner :type="0"></t-spinner>
<t-spinner :type="1"></t-spinner>
<t-spinner :type="2"></t-spinner>
<t-spinner :type="3"></t-spinner>
```

指定颜色

```html
<t-spinner color="#26a2ff"></t-spinner>
<t-spinner color="rgb(100, 100, 100)"></t-spinner>
<t-spinner color="yellow"></t-spinner>
```

指定尺寸

```html
<t-spinner :size="60"></t-spinner>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 显示类型，提供四种风格，可以指定名称或者序号 | String、Number | snake\|double-bounce\|triple-bounce\|fading-circle | snake |
| color | 颜色，接受 hex、rgb 等颜色值 | String | - | #ccc |
| size | 尺寸，单位 px | Number | - | 28 |

[spinner-demo]: /static/mobile-demo/examples/index.html#/spinner

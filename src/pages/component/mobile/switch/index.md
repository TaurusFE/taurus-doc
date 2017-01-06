## TSwitch组件

TSwitch组件是一个移动端开关组件。

### 引入

```js
import { TSwitch } from 'ai-taurus-mobile';
```

### 用法

参见[switch组件Demo][switch-demo]。

基础用法

```html
<t-switch :value.sync="value"></t-switch>
```

带显示内容

```html
<t-switch :value.sync="value">开关</t-switch>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value | 绑定值	 | Boolean | - | - |

### Slot

| 名称 | 说明 |
| ------- | ---- |
| - | 自定义显示内容 |


[switch-demo]: /static/mobile-demo/examples/index.html#/switch

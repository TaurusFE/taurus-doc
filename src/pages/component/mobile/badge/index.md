## TBadge组件

徽章，可指定颜色和尺寸。

### 引入

```js
import { TBadge } from 'ai-taurus-mobile';
```

### 用法

参见[Badge组件Demo][badge-demo]。

指定尺寸

```html
<t-badge size="small">30</t-badge>
<t-badge size="normal">10</t-badge>
<t-badge size="large">10</t-badge>
```

指定类型

```html
<t-badge type="primary">30</t-badge>
<t-badge type="error">10</t-badge>
<t-badge type="success">10</t-badge>
<t-badge type="warning">10</t-badge>
```

指定颜色

```html
<t-badge size="small" color="#888">自定义颜色</t-badge>
```

### Attributes

type	显示类型	String	primary, error, success, warning	primary
color	自定义颜色值	String		type 的颜色
size	尺寸	String	normal, large, small	normal

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 显示类型 | String | primary, error, success, warning | primary |
| color | 自定义颜色值 | String | - | type 的颜色 |
| size | 尺寸 | String | normal, large, small | normal |

### Slot

| 名称 | 说明 |
| ------- | ---- |
| - | 自定义显示内容 |
| title | 自定义标题 |
| icon | 自定义图标 |


[badge-demo]: /static/mobile-demo/examples/index.html#/badge

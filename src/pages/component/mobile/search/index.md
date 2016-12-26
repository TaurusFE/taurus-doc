## TSearch组件

TSearch是加载进度提示组件。

### 引入

```js
import { TSearch } from 'ai-taurus-mobile';
```

### 用法

参见[TSearch组件Demo][search-demo]。

基础用法

```html
<t-search v-model="value"></t-search>
```

设置显示文字

```html
<t-search
  v-model="value"
  cancel-text="取消"
  placeholder="搜索">
</t-search>
```

带搜索结果

```html
<t-search v-model="value" :result.sync="result"></t-search>
```

自定义搜索结果

```html
<t-search v-model="value">
  <t-cell
    v-for="item in result"
    :title="item.title"
    :value="item.value">
  </t-cell>
</t-search>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value |	搜索结果绑定值 |	String | - | - |
| cancel-text |	取消按钮文字 |	String | - | 取消 |
| placeholder |	搜索框占位内容 |	String | - | 搜索 |
| result |	搜索结果列表 | Array | - | - |
| autofocus |	自动聚焦 | Boolean | - | false |
| show |	始终显示搜索列表 | Boolean | - | false |

### Slot

| 名称 | 说明 |
| ------- | ---- |
| - | 自定义搜索结果列表 |


[search-demo]: /static/mobile-demo/examples/index.html#/search

## TRadio组件

单选框列表，依赖 cell 组件。

### 引入

```js
import { TRadio } from 'ai-taurus-mobile';
```

### 用法

参见[Radio组件Demo][radio-demo]。

基础用法

```html
<t-radio
  title="单选框列表"
  :value.sync="value"
  :options="['选项A', '选项B', '选项C']">
</t-radio>
```

设置禁用选项

```html
设置禁用选项
this.options = [
  {
    label: '被禁用',
    value: '值F',
    disabled: true
  },
  {
    label: '选项A',
    value: '值A'
  },
  {
    label: '选项B',
    value: '值B'
  }
];
```

```html
<t-radio
  title="单选框列表"
  :value.sync="value"
  :options="options">
</t-radio>
```

单选框右对齐

```html
<t-radio
  align="right"
  title="右对齐"
  :value.sync="value"
  :options="options">
</t-radio>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| options | 	选择项，可直接传字符串数组或者对象数组	 | Array | - | - |
| value | 绑定值	 | Array | - | - |
| title | 标题，显示在列表上方	 | string | - | - |
| align | 	单选框对齐位置	 | String | left, right | left |


[radio-demo]: /static/mobile-demo/examples/index.html#/radio

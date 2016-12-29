## TChecklist组件

复选框列表，依赖 cell 组件。

### 引入

```js
import { Checklist } from 'ai-taurus-mobile';
```

### 用法

参见[checklist组件Demo][checklist-demo]。

基础用法

```html
<t-checklist
  title="复选框列表"
  :value.sync="value"
  :options="['选项A', '选项B', '选项C']">
</t-checklist>
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
    label: '选中禁用',
    value: '选中禁用的值',
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
<t-checklist
  :value.sync="value"
  :options="options">
</t-checklist>
```

设置最大可选数

```html
<t-checklist
  :max="2"
  :value.sync="value"
  :options="options">
</t-checklist>
```

选择框右对齐

```html
<t-checklist
  align="right"
  title="右对齐"
  :value.sync="value"
  :options="options">
</t-checklist>
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| options | 	选择项，可直接传字符串数组或者对象数组	 | Array | - | - |
| value | 绑定值	 | Array | - | - |
| title | 标题，显示在列表上方	 | string | - | - |
| max | 最多可选个数，超过后其他未选择的选项变成禁用状态	 | Number | - | - |
| align | 复选框对齐位置	 | String | left, right | left |


[checklist-demo]: /static/mobile-demo/examples/index.html#/checklist

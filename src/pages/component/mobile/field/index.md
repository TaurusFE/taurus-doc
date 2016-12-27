## TField组件

TField组件是一个表单编辑器组件。

### 引入

```js
import { TField } from 'ai-taurus-mobile';
```

### 用法

参见[Field组件Demo][field-demo]。

基础用法

```html
<t-field label="用户名" placeholder="请输入用户名"></t-field>
<t-field label="邮箱" placeholder="请输入邮箱" type="email"></t-field>
<t-field label="密码" placeholder="请输入密码" type="password"></t-field>
<t-field label="手机号" placeholder="请输入手机号" type="tel"></t-field>
<t-field label="网站" placeholder="请输入网址" type="url"></t-field>
<t-field label="数字" placeholder="请输入数字" type="number"></t-field>
<t-field label="生日" placeholder="请输入生日" type="date"></t-field>
<t-field label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></t-field>
```

设置校验状态

```html
<t-field label="邮箱" state="success"></t-field>
<t-field label="邮箱" state="error"></t-field>
<t-field label="邮箱" state="warning"></t-field>
```

自定义内容（例如添加验证码）

```html
<t-field label="验证码">
  <img src="../assets/100x100.png" height="45px" width="100px">
</t-field>
```

### Attributes
type	输入框类型	String	text, number, email, url, tel, date, datetime, password, textarea	text
label	标签	String
value	绑定表单输入值	String
rows	类型为 textarea 时可指定高度（显示行数）	Number
placeholder	占位内容	String
disableClear	禁用 clear 按钮	Booean		false
readonly	readonly	Boolean		false
disabled	disabled	Boolean		false
state	校验状态	String	error, success, warning
attr	设置原生属性，例如 :attr="{ maxlength: 10 }"	Object


| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 输入框类型 | String | text, number, email, url, tel, date, datetime, password, textarea | text |
| label | 标签 | String | - | - |
| value | 绑定表单输入值 | String | - | - |
| rows | 类型为 textarea 时可指定高度（显示行数） | Number | - | - |
| placeholder | 占位内容 | String | - | - |
| disableClear | 禁用 | Boolean | - | false |
| readonly | 是否只读 | Boolean | - | false |
| disabled | 是否禁用 | Boolean | - | false |
| state | 校验状态 | String | error, success, warning | - |
| attr | 设置原生属性，例如 :attr="{ maxlength: 10 }" | Object | - | - |

### Slot

| 名称 | 说明 |
| ------- | ---- |
| - | 显示的 HTML 内容 |


[field-demo]: /static/mobile-demo/examples/index.html#/field

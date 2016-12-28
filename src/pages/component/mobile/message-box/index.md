## Message Box组件

Message Box是支持多种形态的弹出式信息框

### 引入

```js
import { MessageBox } from 'ai-taurus-mobile';
```

### 用法

参见[MessageBox组件Demo][message-box-demo]。

基础用法

MessageBox组件支持传入自定义参数来定制属性。

```html
<div class="page-msgbox">
  <h1 class="page-title">Message Box</h1>
  <div class="page-msgbox-wrapper">
    <t-button @click.native="openAlert" size="large">打开 alert 提示框</t-button>
    <t-button @click.native="openConfirm" size="large">打开 confirm 提示框</t-button>
    <t-button @click.native="openPrompt" size="large">打开 prompt 提示框</t-button>
  </div>
</div>
```
```js
  import { TButton, MessageBox } from 'ai-taurus-mobile';

  export default {
      components: {
        TButton
      },
      methods: {
        openAlert () {
          MessageBox.alert('操作成功!', '提示');
        },
  
        openConfirm () {
          MessageBox.confirm('确定执行此操作?', '提示');
        },
  
        openPrompt () {
          MessageBox.prompt(' ', '请输入姓名').then(({ value }) => {
            if (value) {
              MessageBox.alert(`你的名字是 ${value}`, '输入成功');
            }
          });
        }
      }
    };
```


### Attributes

MessageBox组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| title | 消息框的标题 | String | - | - |
| message | 消息框的信息 | String | - | - |
| showConfirmButton | 是否显示确认按钮 | Boolean | - | true |
| showCancelButton | 是否显示取消按钮 | Boolean | - | false |
| confirmButtonText | 确认按钮文字 | String | - | - |
| confirmButtonHighlight | 确认按钮是否高亮 | Boolean | - | false |
| confirmButtonClass | 修饰确认按钮的class | String | - | - |
| cancelButtonText | 取消按钮文字 | String | - | - |
| cancelButtonHighlight | 取消按钮是否高亮 | Boolean | - | false |
| cancelButtonClass | 修饰取消按钮class | String | - | - |
| showInput | 是否展示文本框 | Boolean | - | false |
| inputType | 文本框类型 | String | - | 'text' |
| inputValue | 文本框值 | String | - | - |
| inputPlaceholder | 文本框默认显示的提示文字 | String | - | - |

[message-box-demo]: /static/mobile-demo/examples/index.html#/message-box

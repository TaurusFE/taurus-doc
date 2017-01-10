## Toast组件

Toast是简单的信息提示组件。 支持自定义位置，时间和样式。

### 引入

```js
import { Toast } from 'ai-taurus-mobile';
```

### 用法

参见[Toast组件Demo][toast-demo]。

基础用法

Toast组件支持传入自定义对象来定制属性。

```html
<div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <t-button @click.native="openToast" size="large">点击弹出 Toast</t-button>
      <t-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</t-button>
      <t-button @click.native="openBottomToast" size="large">自定义 Toast 位置</t-button>
    </div>
</div>
```
```js
import { Toast, TButton } from 'ai-taurus-mobile';

  export default {
    components: {
      TButton
    },
    methods: {
      openToast () {
        Toast('提示信息');
      },

      openToastWithIcon () {
        Toast({
          message: '操作成功',
          iconClass: 'mintui mintui-success'
        });
      },

      openBottomToast () {
        Toast({
          message: '提示信息',
          position: 'bottom'
        });
      }
    }
  };
```


### Attributes

Toast组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| message | 当前显示的提示文本信息 | String | - | - |
| position | 当前显示的提示框位置 | String | top,middle,bottom | middle |
| duration | 显示持续时间(毫秒为单位) | Number | - | 3000 |
| className | 修饰Toast的class | String | - | - |
| iconClass | 修饰Toast图标的class | String | - | - |

[toast-demo]: /static/mobile-demo/examples/index.html#/toast

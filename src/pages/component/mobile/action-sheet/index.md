## TActionSheet组件

TActionSheet是从屏幕底部滑出的菜单列表。

### 引入

```js
import { TActionSheet } from 'ai-taurus-mobile';
```

### 用法

参见[TActionSheet组件Demo][action-sheet-demo]。

基础用法

TActionSheet组件支持传入自定义属性来展现不同形态。

```html
<div class="page-actionsheet">
  <h1 class="page-title">Action Sheet</h1>
  <div class="page-actionsheet-wrapper">
    <t-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</t-button>
    <t-button @click.native="sheetVisible2 = true" size="large">不带取消按钮的 action sheet</t-button>
  </div>
  <t-action-sheet :actions="actions" v-model="sheetVisible"></t-action-sheet>
  <t-action-sheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></t-action-sheet>
</div>
```
```js
  import {TActionSheet, TButton} from 'ai-taurus-mobile';

  export default {
    components: {
      TActionSheet,
      TButton
    },
    data () {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },

    methods: {
      takePhoto () {
        console.log('taking photo');
      },

      openAlbum () {
        console.log('opening album');
      },

      goBack () {
        history.go(-1);
      }
    },

    mounted () {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
```


### Attributes

TActionSheet组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| actions | 菜单列表信息配置项数组 | Array | - | - |
| cancelText | 取消按钮的文字 | String | - | 取消 |
| closeOnClickModal | 当点击模态框时ActionSheet是否被关闭 | Boolean | - | false |

[toast-demo]: /static/mobile-demo/examples/index.html#/action-sheet

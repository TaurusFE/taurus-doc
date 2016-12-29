## TPopup组件

TPopup是一个可定制内容的弹出框。

### 引入

```js
import { TPopup } from 'ai-taurus-mobile';
```

### 用法

参见[TPopup组件Demo][popup-demo]。

基础用法

TPopup组件支持传入自定义属性来展现不同形态。

```html
<div class="page-popup">
  <h1 class="page-title">Popup</h1>
  <div class="page-popup-wrapper">
    <t-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</t-button>
    <t-button @click.native="popupVisible2 = true" size="large">上侧弹出 popup</t-button>
    <t-button @click.native="popupVisible3 = true" size="large">右侧弹出 popup</t-button>
    <t-button @click.native="popupVisible4 = true" size="large">下侧弹出 popup</t-button>
  </div>
  <t-popup v-model="popupVisible1" popup-transition="popup-fade" class="taurus-popup-1" :style="{ top: buttonBottom + 10 + 'px' }">
    <h1>popup</h1>
    <p>/ ˈpɑpˌʌp /</p>
    <p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>
    <p>adj. 弹起的; 有自动起跳装置的</p>
  </t-popup>
  <t-popup v-model="popupVisible2" position="top" class="taurus-popup-2" :modal="false">
    <p>更新成功</p>
  </t-popup>
  <t-popup v-model="popupVisible3" position="right" class="taurus-popup-3" :modal="false">
    <t-button @click.native="popupVisible3 = false" size="large" type="primary">关闭 popup</t-button>
  </t-popup>
  <t-popup v-model="popupVisible4" position="bottom" class="taurus-popup-4">
    <t-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="5" :show-toolbar="false"></t-picker>
  </t-popup>
</div>
```
```js
  import {TButton, TPopup, TPicker} from 'ai-taurus-mobile';
    export default {
      components: {
        TButton,
        TPopup,
        TPicker
      },
      data () {
        return {
          popupVisible1: false,
          popupVisible2: false,
          popupVisible3: false,
          popupVisible4: false,
          buttonBottom: 0,
          dateSlots: [
            {
              flex: 1,
              values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
              className: 'slot1',
              textAlign: 'right'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: ['2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06'],
              className: 'slot3',
              textAlign: 'left'
            }
          ]
        };
      },
  
      watch: {
        popupVisible2 (val) {
          if (val) {
            setTimeout(() => {
              this.popupVisible2 = false;
            }, 2000);
          }
        }
      },
  
      methods: {
        onDateChange (picker, values) {
          if (values[0] > values[1]) {
            picker.setSlotValue(1, values[0]);
          }
          this.dateStart = values[0];
          this.dateEnd = values[1];
        }
      },
  
      mounted () {
        this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
      }
  };
```


### Attributes

TPopup组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| position | 弹出框的位置，如果省略，默认在屏幕中央 | String | top,right,bottom,left | - |
| pop-transition | 弹出框出现的动效,只有当position属性省略时才有效 | String | 'popup-fade' | - |
| modal | 弹出框显示时是否配合模态层来使用 | Boolean | - | true |
| closeOnClickModal | 当点击模态框时ActionSheet是否被关闭 | Boolean | - | true |

[popup-demo]: /static/mobile-demo/examples/index.html#/popup

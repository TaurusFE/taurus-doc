## TDatetimePicker组件

TDatetimePicker是日期时间选择器，支持自定义类型。

### 引入

```js
import { TDatetimePicker } from 'ai-taurus-mobile';
```

### 用法

参见[TDatetimePicker组件Demo][datetime-picker-demo]。

基础用法

TDatetimePicker组件支持传入自定义属性来展现不同形态。

```html
<div class="page-datetime">
  <h1 class="page-title">Datetime Picker</h1>
  <div class="page-datetime-wrapper">
    <t-button @click.native="open('picker1')" size="large">点击弹出 DateTime Picker</t-button>
    <t-button @click.native="open('picker2')" size="large">点击弹出 Date Picker</t-button>
    <t-button @click.native="open('picker3')" size="large">点击弹出 Time Picker</t-button>
    <t-button @click.native="open('picker4')" size="large">自定义模板</t-button>
    <t-button @click.native="open('picker5')" size="large">设定初始值</t-button>
  </div>
  <t-datetime-picker
    ref="picker1"
    v-model="value"
    @confirm="handleChange">
  </t-datetime-picker>
  <t-datetime-picker
    ref="picker2"
    type="date"
    v-model="value2"
    @confirm="handleChange">
  </t-datetime-picker>
  <t-datetime-picker
    ref="picker3"
    type="time"
    v-model="value3"
    @confirm="handleChange">
  </t-datetime-picker>
  <t-datetime-picker
    ref="picker4"
    type="date"
    v-model="value4"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    @confirm="handleChange">
  </t-datetime-picker>
  <t-datetime-picker
    ref="picker5"
    type="time"
    v-model="value5"
    @confirm="handleChange">
  </t-datetime-picker>
</div>
```
```js
 import { Toast, TDatetimePicker, TButton } from 'ai-taurus-mobile';

  export default {
    components: {
      TDatetimePicker,
      TButton
    },
    data () {
      return {
        value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      };
    },

    methods: {
      open (picker) {
        this.$refs[picker].open();
      },

      handleChange (value) {
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      }
    }
  };
```
### Attributes

TDatetimePicker组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value | 绑定值 | Date / String | - | - |
| visible | 是否显示 datetime-picker | Boolean | - | false |
| type | 组件的类型 | String | 'datetime', 'date', 'time' | 'datetime' |
| cancelText | 取消按钮文本 | String | - | '取消' |
| confirmText | 确定按钮文本 | String | - | '确定' |
| startDate | 日期的最小可选值 | Date | - | 十年前的 1 月 1 日 |
| endDate | 日期的最大可选值 | Date | - | 十年后的 12 月 31 日 |
| startHour | 小时的最小可选值 | Number | - | 0 |
| endHour | 小时的最大可选值 | Number | - | 23 |
| yearFormat | 年份模板 | String | - | '{value}' |
| monthFormat | 月份模板 | String | - | '{value}' |
| dateFormat | 日期模板 | String | - | '{value}' |
| hourFormat | 小时模板 | String | - | '{value}' |
| minuteFormat | 分钟模板 | String | - | '{value}' |


[datetime-picker-demo]: /static/mobile-demo/examples/index.html#/datetime-picker

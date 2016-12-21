<script>
 import {TNumberStepper} from 'aii-taurus';

   export default ({
     components: {
       't-number-stepper': TNumberStepper
     },
     data: function () {
     return {
       min: 0,
       max: 10,
       step: 2,
       normalStepperValue: 0
       };
     },
     methods: {
       setNSValue: function (newValue) {
         this.$refs.nsNormal.setValue(newValue);
       },
       getNSValue: function () {
         let value = this.$refs.nsNormal.getValue();
         alert('类型' + typeof value + '; 值:' + value);
       },
       enable: function () {
         this.$refs.nsNormal.enable();
       },
       disable: function () {
         this.$refs.nsNormal.disable();
       },
       normalStepperChange: function (newValue, oldValue) {
         alert('newValue: ' + newValue + 'oldValue: ' + oldValue);
       }
     },
     watch: {
       normalStepperValue: function (newValue, oldValue) {
         console.log('newValue: ' + newValue + 'oldValue: ' + oldValue);
       }
     }
   });

</script>

## Search-Filter组件

搜索框组件，用于搜索过滤相应内容。

### 基本用法

:::demo

```html
  <div class="form-row">
      <t-number-stepper :min="min" :max="max" :step="step" :model-value="normalStepperValue" label="Number Steppper" @on-value-change="normalStepperChange" ref="nsNormal" v-model="normalStepperValue"></t-number-stepper>
    </div>
    <div class="form-row">
      <button v-on:click="getNSValue" class="button button--action">取值</button>
      <button v-on:click="disable" class="button button--action">禁用</button>
      <button v-on:click="enable" class="button button--action">解禁</button>
    </div>
    <div class="form-row">
      <button v-on:click="setNSValue(-3)" class="button button--action">设置值为(-3)</button>
      <button v-on:click="setNSValue(3)" class="button button--action">设置值为(3)</button>
      <button v-on:click="setNSValue(5.5)" class="button button--action">设置值为(5.5)</button>
      <button v-on:click="setNSValue(0)" class="button button--action">设置值为(0)</button>
      <button v-on:click="setNSValue(101)" class="button button--action">设置值为(101)</button>
    </div>
    <div class="form-row">
      <div class="mt20">这是用来演示双向绑定的:<input v-model.number="normalStepperValue"></div>
    </div>
<script>
 import {TNumberStepper} from 'aii-taurus';

   export default ({
     components: {
       't-number-stepper': TNumberStepper
     },
     data: function () {
     return {
       min: 0,
       max: 10,
       step: 2,
       normalStepperValue: 0
       };
     },
     methods: {
       setNSValue: function (newValue) {
         this.$refs.nsNormal.setValue(newValue);
       },
       getNSValue: function () {
         let value = this.$refs.nsNormal.getValue();
         alert('类型' + typeof value + '; 值:' + value);
       },
       enable: function () {
         this.$refs.nsNormal.enable();
       },
       disable: function () {
         this.$refs.nsNormal.disable();
       },
       normalStepperChange: function (newValue, oldValue) {
         alert('newValue: ' + newValue + 'oldValue: ' + oldValue);
       }
     },
     watch: {
       normalStepperValue: function (newValue, oldValue) {
         console.log('newValue: ' + newValue + 'oldValue: ' + oldValue);
       }
     }
   });

</script>
```
:::

### Props (参数)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| value | String | No | '' | 输入框内的文本 |
| delay | Number | No | 300 | 默认延迟300毫秒执行搜索，可以传入其他值来控制延迟时间 |
| isSmall | Boolean | No  | true | 组件尺寸大小，true为小尺寸，false为大尺寸 |
| isInline | Boolean | No | true | 控制显示模式，当值为true时，搜索框的搜索按钮隐藏，当值为false时，搜索框搜索按钮显示 |

### Events (事件)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| search | 无 | 输入文字搜索时触发回调 |

### Methods (方法)

| 名字 | 参数 | 描述 |
| --- | ---| --- |
| clear |无| 清除输入框文本 |

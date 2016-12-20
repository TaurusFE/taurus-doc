<script>
 import {TGauge} from 'aii-taurus';
 export default {
   data () {
       return {
         multiValueData: [
           { 'color': '#84b761', 'endValue': 30, 'startValue': 0 },
           { 'color': '#fdd400', 'endValue': 60, 'startValue': 30 },
           { 'color': '#cc4748', 'endValue': 90, 'startValue': 60 }
         ],
         lowValueData: [
           { 'endValue': 2.5, 'startValue': 0 },
           { 'endValue': 5, 'startValue': 2.5 }
         ],
         highValueData: [
           { 'endValue': 600, 'startValue': 0 },
           { 'endValue': 1200, 'startValue': 600 }
         ],
         highValueTitle: 'title for high value gauge',
         lowValueTitle: 'title for low value gauge',
         testValue: 3.5
       };
     },
     methods: {
       resetValue: function (value) {
         this.testValue = value;
         this.$refs.lowGauge.setValue(value);
       },
       randomValue: function () {
         let value = Math.random() * 5;
         this.$refs.lowGauge.setValue(value);
       }
     },
     components: {
       TGauge
     }
 };
</script>

## Gauge组件

基于amcharts的表盘，用于数据统计及展示

### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`on-text`属性与`off-text`属性来设置开关的文字描述，使用`on-color`属性与`off-color`属性来设置开关的背景色。

```html
<t-gauge :data="multiValueData" :max-value="90" :step="10" :value="50" title="title for multiValue gauge"></t-gauge>
    <t-gauge :data="lowValueData" :max-value="5" :step="1" :value="testValue" :title="lowValueTitle"
             ref="lowGauge"></t-gauge>
    <div class="form-row">
      <button v-on:click="resetValue(0)" class="button button--action">设置值为(0)</button>
      <button v-on:click="resetValue(3)" class="button button--action">设置值为(3)</button>
      <button v-on:click="resetValue(3.5)" class="button button--action">设置值为(3.5)</button>
      <button v-on:click="resetValue(5)" class="button button--action">设置值为(5)</button>
      <button v-on:click="randomValue()" class="button button--action">设置随机值</button>
    </div>
    <t-gauge :data="highValueData" :max-value="1200" :step="240" :value="500" :title="highValueTitle"
             color="green"></t-gauge>
<script>
 import {TGauge} from 'aii-taurus';
 export default {
   data () {
       return {
         multiValueData: [
           { 'color': '#84b761', 'endValue': 30, 'startValue': 0 },
           { 'color': '#fdd400', 'endValue': 60, 'startValue': 30 },
           { 'color': '#cc4748', 'endValue': 90, 'startValue': 60 }
         ],
         lowValueData: [
           { 'endValue': 2.5, 'startValue': 0 },
           { 'endValue': 5, 'startValue': 2.5 }
         ],
         highValueData: [
           { 'endValue': 600, 'startValue': 0 },
           { 'endValue': 1200, 'startValue': 600 }
         ],
         highValueTitle: 'title for high value gauge',
         lowValueTitle: 'title for low value gauge',
         testValue: 3.5
       };
     },
     methods: {
       resetValue: function (value) {
         this.testValue = value;
         this.$refs.lowGauge.setValue(value);
       },
       randomValue: function () {
         let value = Math.random() * 5;
         this.$refs.lowGauge.setValue(value);
       }
     },
     components: {
       TGauge
     }
 };
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| data | Array| Yes | [] | 组件初始化所需的数据 |
| value | Number | No  | 0 | 组件所代表的值，与组件表盘指针一致 |
| maxValue | Number | Yes  |  | 组件表盘所能显示的最大值 |
| step | Number | No  | 1 | 组件表盘分刻度依据 |
| title | String | No |  | 表盘组件标题 |
| color | String | No | #DB5451 | 表盘外环颜色.若传入的数据中 没有此字段，将启用从父组件中传入的颜色参数 |
| width | String | No | 100% | 表盘宽度，传入字符串类型的数字或百分比 |
| height | String | No | 100% | 表盘高度，传入字符串类型的数字或百分比，最小高度为300px |


### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| setValue | \(value\) | 设置组件的值 |


<script>
 import {TGauge} from 'aii-taurus';
 export default {
   data: function () {
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
       lowValueTitle: 'title for low value gauge',
       testValue: 3.5
     };
   },
   components: {
     TGauge
   }
 };
</script>

## Doughnut组件

基于amcharts的图表，用于数据统计及展示，支持3d效果

### 基本用法

:::demo

```html
<template>
<t-gauge :data="lowValueData" :max-value="5" :step="1" :value="testValue" :title="lowValueTitle"
             ref="lowGauge"></t-gauge>
</template>
<script>
  import {TGauge} from 'aii-taurus';
  export default {
    data: {
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
      lowValueTitle: 'title for low value gauge',
      testValue: 3.5
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
| data | Array| Yes |  | 组件初始化所需的数据 |
| titleField | String | Yes  |  | 标题所对应的源数据中的字段 |
| valueField | String | Yes  |  | 值所对应的源数据中的字段 |
| colorField | String | No  |  | 颜色所对应的源数据中的字段,若不传入则为随机颜色 |
| content | Object | No |  | 表盘下面的为title，中间加粗文字为name，中间不加粗文字为desc。 |
| show3d | String | No | false | 是否显示3d效果 |
| labelsEnabled | String | No | false | 是否显示每个碎片的label |
| labelRender | Function | No |  | label的重渲染函数，在labelsEnabled='true'时生效|
| legend | String | No | false | 是否显示legend |
| width | String | No | 100% | 表盘宽度，传入字符串类型的数字或百分比 |
| height | String | No | 100% | 表盘高度，传入字符串类型的数字或百分比，最小高度为300px |

<script>
 import {TLine} from 'ai-taurus-desktop';

 const CHART_TYPE = {
   line: 'Line'
 };

 export default {
   components: {
       TLine
     },

     data () {
       return {
         barsDataProvider: [{
           'country': 'USA',
           'visits': 3025,
           'color': '#FF0F00'
         }, {
           'country': 'China',
           'visits': 1882,
           'color': '#FF6600'
         }, {
           'country': 'Japan',
           'visits': 2009,
           'color': '#FCDF02'
         }, {
           'country': 'Germany',
           'visits': 1322,
           'color': '#FCD202'
         }, {
           'country': 'France',
           'visits': 1114,
           'color': '#B0DE09'
         }, {
           'country': 'Russia',
           'visits': 580,
           'color': '#2A0CD0'
         }],
         lineDataProvider: [{
           'date': '2012-01',
           'value': 130
         }, {
           'date': '2012-02',
           'value': 110
         }, {
           'date': '2012-03',
           'value': 150
         }, {
           'date': '2012-04',
           'value': 160
         }, {
           'date': '2012-05',
           'value': 180
         }, {
           'date': '2012-06',
           'value': 130
         }, {
           'date': '2012-07',
           'value': 220
         }, {
           'date': '2012-08',
           'value': 230
         }, {
           'date': '2012-09',
           'value': 200
         }, {
           'date': '2012-10',
           'value': 170
         }, {
           'date': '2012-11',
           'value': 160
         }, {
           'date': '2012-12',
           'value': 180
         }]
       };
     }
 };
</script>

## Line Chart组件

图表组件，折线图

### 基本用法

:::demo amcharts的line组件

```html
<t-line :data-provider="lineDataProvider"
              category-field="date"
              value-field="value">
      </t-line>
<script>
 import {TLine} from 'ai-taurus-desktop';

 const CHART_TYPE = {
   line: 'Line'
 };

 export default {
   components: {
       TLine
     },

     data () {
       return {
         barsDataProvider: [{
           'country': 'USA',
           'visits': 3025,
           'color': '#FF0F00'
         }, {
           'country': 'China',
           'visits': 1882,
           'color': '#FF6600'
         }, {
           'country': 'Japan',
           'visits': 2009,
           'color': '#FCDF02'
         }, {
           'country': 'Germany',
           'visits': 1322,
           'color': '#FCD202'
         }, {
           'country': 'France',
           'visits': 1114,
           'color': '#B0DE09'
         }, {
           'country': 'Russia',
           'visits': 580,
           'color': '#2A0CD0'
         }],
         lineDataProvider: [{
           'date': '2012-01',
           'value': 130
         }, {
           'date': '2012-02',
           'value': 110
         }, {
           'date': '2012-03',
           'value': 150
         }, {
           'date': '2012-04',
           'value': 160
         }, {
           'date': '2012-05',
           'value': 180
         }, {
           'date': '2012-06',
           'value': 130
         }, {
           'date': '2012-07',
           'value': 220
         }, {
           'date': '2012-08',
           'value': 230
         }, {
           'date': '2012-09',
           'value': 200
         }, {
           'date': '2012-10',
           'value': 170
         }, {
           'date': '2012-11',
           'value': 160
         }, {
           'date': '2012-12',
           'value': 180
         }]
       };
     }
 };
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| lineColor | String| no | '#0278B8' | 折线颜色 |
| lineThickness | Number | No  | 2 | 折线的粗细 |
| bulletSize | Number | No | 6 | 节点大小 |

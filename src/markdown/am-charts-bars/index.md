<script>
 import {TBars} from 'aii-taurus';

 export default {
     components: {
       TBars
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
         enableCategoryLegend: false
       };
     }
 };
</script>

## Bars Chart组件

图表组件，柱状图

### 基本用法

:::demo

```html
<t-bars
        :data-provider="barsDataProvider"
        category-field="country"
        value-field="visits"
        :enable-category-legend="enableCategoryLegend"
        value-unit="km">
      </t-bars>
<script>
 import {TBars} from 'aii-taurus';

 export default {
     components: {
       TBars
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
         enableCategoryLegend: false
       };
     }
 };
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| enableCategoryLegend | Boolean| no | false | 由 Category 生成 Legend Data |
| legendData | Array | No  | 无 | 图例数据 |
| legendPosition | String | No | 'top' | Legend 位置，暂不支持 'absolute' |
| legendAlign | String | No | 'right' | Legend Item 对齐方式 |
| legendMaxColumns | Number | No | 3 | Legend Item 行最大列数 |
| legendConf | Object | No | 无 | 当上面提供的 Legend 可选项无法满足要求时，请传递完整的 legendConf 信息\(将忽略上述所有的可选项\) |


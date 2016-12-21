<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
  data: function () {
     return {
      singleDateVal: '',
      doubleDateVal: '',
      dateVal: '2016.08.20 - 2016.09.21'
     };
    },
    components: {
      TDatePicker
    },
    methods: {
      setSingleDate: function () {
        this.singleDateVal = '2015-06-16';
      },
      setDoubleDate: function () {
        this.doubleDateVal = '2016.07.16 - 2016.08.10';
      },
      onChange: function (value) {
        alert(value);
      }
    },
    watch: {
      singleDateVal: function (newValue) {
        console.log('********Single Date Change********');
        console.log(newValue);
      },
      doubleDateVal: function (newValue) {
        console.log('********Double Date Change********');
        console.log(newValue);
      }
    }
  };
</script>

## DatePicker组件

日期选择组件，支持选择单个日期或日期范围

### 选择单个日期

:::demo

```html
  <button class="button button--action" @click="setSingleDate">set single date (2015-06-16)</button>
  <div style="margin: 10px;">
    <t-date-picker v-model="singleDateVal" date-format="yyyy.mm.dd"></t-date-picker>
  </div>
<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
   data: {
       singleDateVal: ''
     },
     components: {
       TDatePicker
     },
     methods: {
       setSingleDate: function () {
         this.singleDateVal = '2015-06-16';
       }
     },
     watch: {
       singleDateVal: function (newValue) {
         console.log('********Single Date Change********');
         console.log(newValue);
       }
     }
 };
</script>
```
:::

### 选择日期范围

:::demo

```html
<button class="button button--action" @click="setDoubleDate">set double date (2016.07.16 - 2016.08.10)</button>
<div style="float1:left; margin: 10px;">
    <t-date-picker :months-to-show="2" v-model="doubleDateVal" min-date="2016.07.11" max-date="2016.11.11" date-format="yyyy.mm.dd" :range-select="true"></t-date-picker>
</div>
<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
   data: function () {
        return {
         doubleDateVal: ''
        };
       },
       components: {
         TDatePicker
       },
       methods: {
         setDoubleDate: function () {
           this.doubleDateVal = '2016.12.16 - 2017.01.10';
         }
       },
       watch: {
         doubleDateVal: function (newValue) {
           console.log('********Double Date Change********');
           console.log(newValue);
         }
       }
 };
</script>
```
:::

### 指定日期最大值，最小值

:::demo

```html
<t-date-picker  min-date="2016.07.11" max-date="2016.11.11" date-format="yyyy.mm.dd"></t-date-picker>
<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
       components: {
         TDatePicker
       }
 };
</script>
```
:::

### 禁用

:::demo

```html
<t-date-picker :disabled="true" ></t-date-picker>
<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
       components: {
         TDatePicker
       }
 };
</script>
```
:::

### change事件

:::demo

```html
<t-date-picker :date-val="dateVal" :range-select="true" date-format="yyyy.mm.dd" v-on:date-change="onChange"></t-date-picker>
<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
  data: function () {
       return {
        dateVal: '2016.08.20 - 2016.09.21'
       };
      },
      components: {
        TDatePicker
      },
      methods: {
        onChange: function (value) {
          alert(value);
        }
      }
 };
</script>
```
:::

### size设置为large

:::demo

```html
<t-date-picker :is-large="true" date-format="yyyy.mm.dd"></t-date-picker>
<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
       components: {
         TDatePicker
       }
 };
</script>
```
:::

### 宽度根据内容做自适应

:::demo

```html
<t-date-picker :inline="true" date-format="yyyy.mm.dd"></t-date-picker>
<script>
 import {TDatePicker} from 'aii-taurus';

 export default {
       components: {
         TDatePicker
       }
 };
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| dateVal | String | No | '' | 日期值，需要与dateFormat的格式一致 |
| rangeSelect | Boolean | No | false | 是否选择日期范围 |
| rangeSeparator | String | No | ' - ' | 开始时间，结束时间的分隔符 |
| dateFormat | String | No | 'yyyy-mm-dd' | 日期格式 |
| disabled | Boolean | No | false | 是否禁用 |
| minDate | Strig | No | '' | 日期最小值 |
| maxDate | Strig | No | '' | 日期最大值 |
| monthsToShow | Number/Array | No | 1 | 日历视图中同时显示月份的个数，出入的值为number时则在一行中显示number个月；传入值为数组[a，b]时，则显示为a行b列，共a*b个月 |
| monthHeaderFormat | String | No | 'MM yyyy' | 月头部的显示格式 |
| isLarge | Boolean | No | false | 设置组件size是否为large，true为large，false为default |
| inline | Boolean | false | false | 组件宽度按内容自适应，默认为'false',按父元素大小显示 |

### Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| v-on:date-change |  | 日期值变化时触发改时间 |



### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| getDates |  | 获取当前选中的日期 |
| clearDates |  | 清除/重置选中日期 |
| show |  | 显示日期弹窗 |
| hide |  | 隐藏日期弹窗 |

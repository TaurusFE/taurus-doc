<script>
 import {TSelect, taurus, TDatePicker, moment} from 'ai-taurus-desktop';

 export default {
      data: function () {
        return {
          calendarSizeArr: ['small', 'large'],
          calendarSize: 'small',
          langArr: ['en', 'cn'],
          lang: 'en',
          shortcutOptions: {
            isCover: false,
            shortcuts: [{
              text: '昨天',
              onClick (picker) {
                picker.$emit('pick', moment().subtract(1, 'd'));
              }
            }, {
              text: '前天',
              onClick (picker) {
                picker.$emit('pick', moment().subtract(2, 'd'));
              }
            }]
          },
          type: 'date',
          singleDateVal: '',
          singleMonthVal: '',
          singleDateTimeVal: '',
          rangeDateVal: '',
          rangeDateTimeVal: '',
          formatDateValue: '2017/1/12',
          formatMonthValue: '2017/3',
          formatDateRangeValue: ['2017/1/12', '2017/1/30'],
          dateShortcutVal: '',
          dateRangeShortcutVal: '',
          customShortcutVal: '',
          formatDateVal: ''
        };
      },
      components: {
        TDatePicker,
        TSelect
      },
      methods: {
        sizeChange (newVal) {
          this.calendarSie = newVal;
        },
        langChange (newVal) {
          taurus.lang = newVal;
          this.lang = newVal;
        },
        onChange (value) {
          console.log('date change:' + value);
        }
      }
 };
</script>

## DatePicker组件

日期选择组件，在同一个选择器里选择日期和时间

### 基本操作

:::demo 要使用该组件需要传入一个type设定日历的类型，默认为date类型，用v-model绑定需要返回的值。

```html
    <div class="sg-component__label">基本操作</div>
    <div style="margin: 10px;" class="box--default-dark-border padding-whole--small">
    <label>日期选择</label>
    <t-date-picker style="width:200px" v-model="singleDateVal" ref="singleDatePicker" v-on:date-change="onChange"
                 placeholder="please select date"></t-date-picker>
    <label>年月选择</label>
    <t-date-picker style="width:200px" v-model="singleMonthVal" type="month" v-on:date-change="onChange"
                 placeholder="please select date"></t-date-picker>
    <label>日期时间选择</label>
    <t-date-picker style="width:200px" v-model="singleDateTimeVal" type="dateTime" v-on:date-change="onChange"
                 placeholder="please select date"></t-date-picker>
    <label>日期范围</label>
    <t-date-picker style="width:500px" v-model="rangeDateVal" type="dateRange" v-on:date-change="onChange"
                 placeholder="please select date"></t-date-picker>
    <label>日期时间范围</label>
    <t-date-picker style="width:500px" v-model="rangeDateTimeVal" type="dateTimeRange" v-on:date-change="onChange"
                 placeholder="please select date"></t-date-picker>
    </div>
<script>
 import {TSelect, taurus, TDatePicker, moment} from 'ai-taurus-desktop';

 export default {
   data: function () {
       return {
         type: 'date',
         singleDateVal: '',
         singleMonthVal: '',
         singleDateTimeVal: '',
         rangeDateVal: '',
         rangeDateTimeVal: ''
       }
     },
     components: {
       TDatePicker
     },
     methods: {
       onChange (value) {
         console.log('date change:' + value);
       }
     }
   }
 };
</script>
```
:::

### 带快捷选项

:::demo 传入show-shortcut属性为true，可以显示默认的快捷选项，如果需要传入自己定义的快捷选项传入shortcut-options属性，值为自定义的快捷选项数组

```html
  <div class="sg-component__label">带快捷选项</div>
  <div style="margin: 10px;" class="box--default-dark-border padding-whole--small">
    <label>日期快捷选项</label>
    <t-date-picker style="width:200px" v-model="dateShortcutVal" type="date" :show-shortcut="true"
                   v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
    <label>日期范围快捷选项</label>
    <t-date-picker style="width:300px" v-model="dateRangeShortcutVal" type="dateRange" :show-shortcut="true"
                   v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
    <label>自定义快捷选项</label>
    <t-date-picker style="width:200px" v-model="customShortcutVal" type="date"
                   :show-shortcut="true"
                   :shortcut-options="shortcutOptions"
                   v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
  </div>
<script>
  import {TSelect, taurus, TDatePicker, moment} from 'ai-taurus-desktop';

  export default {
    data: function () {
        return {
            dateShortcutVal: '',
            dateRangeShortcutVal: '',
            customShortcutVal: ''
        }
    },
    components: {
      TDatePicker
    },
    methods: {
      onChange (value) {
      console.log('date change:' + value);
      }
    }
  };
</script>
```
:::

### 格式化

:::demo 传入format属性可以自定义日期的格式化，具体见下面参数文档

```html
  <div class="sg-component__label">格式化</div>
  <div style="margin: 10px;"  class="box--default-dark-border padding-whole--small">
    <t-date-picker style="width:200px"  type="date" v-model="formatDateValue" format="YYYY/MM/DD"
                   v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
    <t-date-picker style="width:200px"  type="month" v-model="formatMonthValue" format="YYYY/MM"
                   v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
    <t-date-picker style="width:300px"  type="dateRange" v-model="formatDateRangeValue" format="YYYY/MM/DD"
                   v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
  </div>
  <script>
    import {TSelect, taurus, TDatePicker, moment} from 'ai-taurus-desktop';

    export default {
      data: function (){
            return {
                type: 'date',
                formatDateValue: '',
                formatMonthValue: '',
                formatDateRangeValue: ''
            }
        },
        components: {
          TDatePicker
        },
        methods: {
          onChange (value) {
            console.log('date change:' + value);
          }
        }
      }
    };
  </script>
```
:::

### 尺寸

:::demo 选择date-picker的大小尺寸，传入属性size

```html
    <div class="sg-component__label">尺寸</div>
    <div style="margin: 10px;" class="box--default-dark-border padding-whole--small">
    <t-select :size="calendarSize" :options="calendarSizeArr" default-value="calendarSize" v-model="calendarSize"
            :on-change="sizeChange" style="width:150px; display: inline-block;"></t-select>
    <t-date-picker class="autoCanlendar" style="width:200px" type="date"  :size="calendarSize"
                 v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
    </div>
  <script>
    import {TSelect, taurus, TDatePicker, moment} from 'ai-taurus-desktop';

    export default {
      data: function() {
            return {
              type: 'date',
              calendarSize: '',
            }
        },
        components: {
          TDatePicker,
          TSelect
        },
        methods: {
          onChange (value) {
            console.log('date change:' + value);
          },
          sizeChange (newVal) {
            this.calendarSie = newVal;
          }
        }
      }
    };
  </script>
```
:::

### 禁用

:::demo disabled="true"用来禁用,禁用后不可操作

```html
<div class="sg-component__label">禁止</div>
  <div style="margin: 10px;" class="box--default-dark-border padding-whole--small">
    <t-date-picker style="width:200px" type="date"
                   v-on:date-change="onChange" placeholder="please select date" disabled></t-date-picker>
  </div>
</script>
<script>
    import {TSelect, taurus, TDatePicker, moment} from 'ai-taurus-desktop';

    export default {
        components: {
          TDatePicker
        }
      }
    };
  </script>
```
:::

### 国际化

:::demo date-picker支持国际化，默认语言为taurus设置的语言，可以自由切换

```html
<div class="sg-component__label">国际化</div>
  <div style="margin: 10px;" class="box--default-dark-border padding-whole--small">
    <t-select size="small" :options="langArr" default-value="en" v-model="lang" :on-change="langChange"
              style="width:150px; display: inline-block;"></t-select>
    <t-date-picker style="width:200px" type="dateTime" :locale="lang"
                   v-on:date-change="onChange" placeholder="please select date"></t-date-picker>
  </div></script>
<script>
    import {TSelect, taurus, TDatePicker, moment} from 'ai-taurus-desktop';

        export default {
          data: {
            components: {
              TDatePicker,
              TSelect
            },
            methods: {
              onChange (value) {
                console.log('date change:' + value);
              },
             langChange (newVal) {
                   taurus.lang = newVal;
                   this.lang = newVal;
             }
            }
          }
        };
</script>
```
:::



### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| type | String | No | date | 日期类型，month/date/dateRange/dateTime/dateTimeRange/ |
| rangeSeparator | String | No | ' ~ ' | 开始时间，结束时间的分隔符 |
| format | String | No | 'YYYY-MM-DD' | 时间日期格式化,年 YYYY，月 MM，日 DD，小时 HH，分 mm，秒 ss，其他详细可参见http://momentjs.cn/docs/#/displaying/format/ |
| disabled | Boolean | No | false | 是否禁用 |
| locale | String | No | taurus的默认语言en | 语言类型,如en表示英文，cn表示中文 |
| size | String | No | small | 尺寸，[small,large] |
| placeholder | String | No | '' | date-picker的输入框默认文本值 |
| v-model | [String, Array] | No | '' | 双向绑定的值，如果type为dateRange或者dateTimeRange，需要传入数组，设置的值则为初始值，如['2017-1-1','2017-2-1'],其他类型可以传'2017-1-1'或者['2017-1-1'] |
| showShortcut | Boolean | No | false | 是否显示快捷选项 |
| shortcutOptions | object | No | false | 快捷选项，选项参考下表 |


### format \(参数\)

| 标识 | 输出 | 描述 |
| --- | --- | ---  |
| M   | 1 2 ... 11 12 |  月份|
| Mo  | 1st 2nd ... 11th 12th |  |
| MM  | 01 02 ... 11 12 |  |
| MMM  | Jan Feb ... Nov Dec | 月份缩写 |
| MMMM  | January February ... November December| 月份全写 |
| Q  | 	1 2 3 4| 季度 |
| D  | 1 2 ... 30 31| 日 |
| Do  | 1st 2nd ... 30th 31st|  |
| DD  | 01 02 ... 30 31|  |
| DDD | 1 2 ... 364 365| 一年中的第几天 |
| DDDo | 1st 2nd ... 364th 365th|  |
| DDDD | 001 002 ... 364 365|  |
| d | 0 1 ... 5 6| 一周中的第几天 |
| do | 0th 1st ... 5th 6th|  |
| dd | Su Mo ... Fr Sa|  |
| ddd | Sun Mon ... Fri Sat|  |
| dddd | Sunday Monday ... Friday Saturday|  |
| H | 0 1 ... 22 23| 小时 |
| HH | 00 01 ... 22 23|  |
| h | 1 2 ... 11 12|  |
| hh | 01 02 ... 11 12|  |
| m | 0 1 ... 58 59 |  分钟|
| mm | 00 01 ... 58 59 |  |
| s | 0 1 ... 58 59 | 秒 |
| ss | 00 01 ... 58 59 |  |

### shortcutOptions \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| text | String | True | - | 标题文本 |
| onClick

### Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| v-on:date-change |  | 日期值变化时触发改时间 |





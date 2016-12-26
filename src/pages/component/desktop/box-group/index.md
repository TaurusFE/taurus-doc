<script>
 import {TBoxGroup} from 'ai-taurus-desktop'
 const INFO_TITLE = 'BoxGroup事件信息：';
 export default {
   components: {
     TBoxGroup
   },
   data () {
     return {
       modelValues: []
     }
   },
   methods: {
     warn$1: function (msg1, msg2) {
      if (typeof console !== 'undefined') {
        console.info('[' + msg1 + '] ' + msg2);
      }
    },
    changed: function (index, newValue) {
      this.warn$1('changed', INFO_TITLE + 'index = ' + index + '；newVaue = ' + newValue);
    },
    checked: function (index, newValue) {
      this.warn$1('checked', INFO_TITLE + 'index = ' + index);
    },
    unchecked: function (index, newValue) {
      this.warn$1('unchecked', INFO_TITLE + 'index = ' + index);
    }
   }
 }
</script>
## BoxGroup

radio 和 checkbox

### checkbox
:::demo 设置`v-model`绑定变量，选中意味着变量的值为相应CheckBox`label`属性的`value`，
```html
<template>
  <t-box-group labels="item1,item2,item3,item4"
      checked="false,true,false,false"
      value="This,is,a,test"
      v-model="modelValues">
    </t-box-group>
    <div>当前值为：{{modelValues}}</div>
</template>
<script>
 import {TBoxGroup} from 'ai-taurus-desktop'
 export default {
   components: {
     TBoxGroup
   },
   data () {
     return {
       modelValues: []
     }
   }
 }
</script>

```
:::
### Radio Basic
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
::: demo 要使用`radio`,只需要加上`type="radiobox"`属性. radio默认`垂直`方向排列
```html
<template>
  <t-box-group type="radiobox" labels="选项1,选项2"
               checked="false,true"></t-box-group>
</template>
<script>
import {TBoxGroup} from 'ai-taurus-desktop'
 export default {
   components: {
     TBoxGroup
   },
   data () {
     return {
       modelValues: []
     }
   }
 }
</script>
```
:::
### Radio Inline
::: demo 要使用水平排列的radio,只需加上`inline="true"`的属性即可
```html
<template>
  <t-box-group type="radiobox" labels="选项1,选项2"
               checked="false,true"
               inline='true'>
  </t-box-group>
</template>
<script>
import {TBoxGroup} from 'ai-taurus-desktop' 
 export default {
   components: {
     TBoxGroup
   }
 }
</script>
```
:::
### Button Filter
::: demo 要使用`button filter`，只需要设置`type='checkbox-filter'`，button filter 常用来作为标签筛选器
```html
<template>
  <t-box-group type="checkbox-filter"
      labels="选项1,选项2,选项3,选项4"
      counts="31,10,5,1"
      checked="false,true,false,false"
      value="This,is,a,test"
      total-button-visibled="true"
      total-button-checked="true"
      total-button-label="全部"
      size="small"
      ref="myTag2"
      v-on:changed="changed"
      v-on:checked="checked"
      v-on:unchecked="unchecked"></t-box-group>
</template>
<script>
 import {TBoxGroup} from 'ai-taurus-desktop'
 const INFO_TITLE = 'BoxGroup事件信息：';
 export default {
   components: {
     TBoxGroup
   },
   methods: {
     warn$1: function (msg1, msg2) {
      if (typeof console !== 'undefined') {
        console.info('[' + msg1 + '] ' + msg2);
      }
    },
    changed: function (index, newValue) {
      this.warn$1('changed', INFO_TITLE + 'index = ' + index + '；newVaue = ' + newValue);
    },
    checked: function (index, newValue) {
      this.warn$1('checked', INFO_TITLE + 'index = ' + index);
    },
    unchecked: function (index, newValue) {
      this.warn$1('unchecked', INFO_TITLE + 'index = ' + index);
    }
   }
 }
</script>
```
:::
### Props

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| type | String | No | 'checkbox' | 组件类型，类型分为三种('checkbox', 'radiobox', 'checkbox-filter') |
| size | String | No  | 'normal' | 组件尺寸，类型分为三种('small'，'normal'，'large') |
| disabled | String 或 Array | No | [false] | 组件禁用选项，如果组内有3个checkbox都设置为禁用状态，那么当前设置的值应该为'true,true,true'，反之启用状态设置每一项为false。注：radiobox和checkbox-filter设置方式与此相同。 |
| mtop | Boolean | No | false | 设置组件上边距(margin-top)，如果让组件与上方元素有一定的间隔，可以设置此值为true |
| inline | Boolean | No | false | 设置组件是垂直显示还是水平显示 |
| labels | String 或 Array | No | ['Untitled'] | 组件每一项所显示的文字，如果组内有3个checkbox，那么可以将此值设置为'item1,item2,item3'，radiobox和checkbox-filter以此类推。 |
| value | String 或 Array | No | [''] | 组件每一项的值，如果组内有3个checkbox，那么可以将此值设置为(1,2,3)，radiobox和checkbox-filter以此类推。 |
| checked | String 或 Array | No | [false] | 组件初始化设置默认选中项，如果组内有3个checkbox，第2个设置为选中，那么可以将此值设置为(0,1,0)，radiobox和checkbox-filter以此类推。 |
| tips | String 或 Array | No | [''] | 提示属性,组件初始化设置默认选中项，组件每一项的值，如果组内有3个checkbox，那么可以将此值设置为'tip1,tip2,tip3'，radiobox和checkbox-filter以此类推。。 |

> 注意：以下参数是复选按钮组特有参数(参数type设置为'checkbox-filter'时，以下参数有效，否则无效)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| total-button-visibled | String 或 Boolean | No | false | 是否显示total按钮项。 |
| total-button-checked | String 或 Boolean | false | false | 是否设置total按钮为选中状态 |
| total-button-label | String | No | 'All' | 设置total按钮上所显示的文字 |
| counts | String 或 Array | No | [0] | 设置每个按钮项上所显示的数量，如果组内有3个按钮项，每个的显示数量都是60，那么可以将此值设置为'60,20,19'|

### Events

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| changed | (index, newValue) | 选中值变化时触发(参数index是当前选中项的下标，newValue是当前选中项的值) |
| checked | (index, newValue) | 选中某一项时触发(参数index是当前选中项的下标，newValue是当前选中项的值) |
| unchecked | (index, newValue) | 取消选中某一项时触发(参数index是当前选中项的下标，newValue是当前选中项的值) |

### Methods

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| toggle | (index) | 反选下标为index的选项，如果参数index不传，则默认为反选所有项 |
| check | (index) | 选中下标为index的选项，如果参数index不传，则默认为选中所有项 |
| uncheck | (index) | 取消选中下标为index的选项，如果参数index不传，则默认为取消选中所有项|
| enable | (index) | 启用下标为index的选项，如果参数index不传，则默认为启用所有项 |
| disable | (index) | 禁用下标为index的选项，如果参数index不传，则默认为禁用所有项 |
| getValue | (index) | 获取下标为index的选项的值，如果参数index不传，则默认为获取所有项的值，值类型为Array |
| isChecked | (index) | 获取下标为index的选项的选中状态，如果参数index不传，则默认为获取所有项的选中状态，值类型为Array |
| count | (index, value可选) |   set或这get总数，仅在checkbox-filter类型时有效 |

其中`count`方法调用具有以下场景：

1. 当没传任何参数时返回所有复选框总数数组；如：

```js
this.$refs.myTag.count();
```

2. 当仅传递index时，如果index是数值，那么返回该索引对应的总数，如果index是数组，那么返回此数组内每一个有效的索引对应的总数；如：

```js
this.$refs.myTag.count(1); // 返回第二个复选框对应的总数
this.$refs.myTag.count([0, 1, 2]); // 返回前三个复选框对应的总数数组
```

3. 当传递了有效索引index和数值num时，将设置该索引对应复选框的总数；如：

```js
this.$refs.myTag.count(2, 99); // 将第三个复选框的总数设置为99
```

4. 当传递了索引数组index和总数数组num时，将设置索引数组内每一个有效索引对应的总数；如：

```js
// 分别将第三、四、五个复选框的总数设置为99、98和10
this.$refs.myTag.count([2, 3, 4], [99, 98, 10]);
```

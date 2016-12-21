<script>
 import {TSelect} from 'aii-taurus';

   export default ({
     components: {
       TSelect
     },
     data: function () {
         return {
           optionData: [{label: 'L1', value: 1}, {label: 'L2', value: 2}, {label: 'L3', value: 3}, {label: 'L4', value: 4}],
           optgroup: [
             {
               label: 'g1',
               value: [{label: 'gop1', value: 1}, {label: 'g2', value: 2}, {label: 'g3', value: 3}, {label: 'g4', value: 4}]
             },
             {
               label: 'g2',
               value: [
                 {label: 'g21', value: 21}, {label: 'g22', value: 22}, {label: 'g23', value: 23}, {label: 'g24', value: 24}
               ]
             }
           ],
           disabled: false,
           selectVal: '2',
           selectTxt: '',
           selectOption: '',
           currentValue: ''
         };
       },
       methods: {
         btnClick: function () {
           alert(1);
         },
         dataChange: function (value, vm) {
           this.selectVal = value;
           this.selectTxt = vm.getText();
           this.selectOption = vm.getSelected();
         },
         clearSelect: function () {
           this.$refs.select1.clear();
         },
         resetSelect: function () {
           this.$refs.select1.reset();
         },
         toggleDisable: function () {
           this.disabled = !this.disabled;
         },
         setValue: function (value) {
           this.$refs.select1.setValue(value);
         },
         getValue: function () {
           alert(this.$refs.select1.getValue());
         },
         setModel: function () {
           this.currentValue = 1;
         }
       },
       watch: {
         currentValue (newValue) {
           console.log('*************');
           console.log(newValue);
         }
       }
   });

</script>

## Select组件

下拉列表框

### 基本用法

:::demo 要使用该组件需要传入一个optionData数组，并且要用v-model绑定需要返回的值。

```html
    <li>Vaule: {{selectVal}}</li>
    <li>Text: {{selectTxt}}</li>
    <li>Option: {{selectOption}}</li>
		<div class="form-row" data-module="form.select">
			<t-select ref="select1" :options="optionData" :default-value="2" v-model="currentValue" :disabled="disabled" v-on:on-change="dataChange" style="width:150px;"></t-select>
		</div>
    <div class="form-row" data-module="form.select">
      <button class="button button--action" @click="toggleDisable">{{disabled ? 'enable' : 'disable'}}</button>
      <button class="button button--action" @click="setValue(3)">set value 3</button>
      <button class="button button--action" @click="clearSelect">clear</button>
      <button class="button button--action" @click="resetSelect">reset</button>
      <button class="button button--action" @click="getValue">get value</button>
      <button class="button button--action" @click="setModel">set model (1)</button>
    </div>


<script>
 import {TSelect} from 'aii-taurus';

   export default ({
     components: {
       TSelect
     },
     data: function () {
         return {
           optionData: [{label: 'L1', value: 1}, {label: 'L2', value: 2}, {label: 'L3', value: 3}, {label: 'L4', value: 4}],
           disabled: false,
           selectVal: '2',
           selectTxt: '',
           selectOption: '',
           currentValue: ''
         };
       },
       methods: {
         btnClick: function () {
           alert(1);
         },
         dataChange: function (value, vm) {
           this.selectVal = value;
           this.selectTxt = vm.getText();
           this.selectOption = vm.getSelected();
         },
         clearSelect: function () {
           this.$refs.select1.clear();
         },
         resetSelect: function () {
           this.$refs.select1.reset();
         },
         toggleDisable: function () {
           this.disabled = !this.disabled;
         },
         setValue: function (value) {
           this.$refs.select1.setValue(value);
         },
         getValue: function () {
           alert(this.$refs.select1.getValue());
         },
         setModel: function () {
           this.currentValue = 1;
         }
       },
       watch: {
         currentValue (newValue) {
           console.log('*************');
           console.log(newValue);
         }
       }
   });

</script>
```
:::

### Select with grouping

:::demo 需要用group功能要在optgroup中的每个value中再传入option数组

```html
<t-select :options="optgroup" style="width:150px;"></t-select>

<script>
 import {TSelect} from 'aii-taurus';

   export default ({
     components: {
       TSelect
     },
     data: function () {
         return {
           optgroup: [
             {
               label: 'g1',
               value: [{label: 'gop1', value: 1}, {label: 'g2', value: 2}, {label: 'g3', value: 3}, {label: 'g4', value: 4}]
             },
             {
               label: 'g2',
               value: [
                 {label: 'g21', value: 21}, {label: 'g22', value: 22}, {label: 'g23', value: 23}, {label: 'g24', value: 24}
               ]
             }
           ]
         };
       }
   });

</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| options | Array | Yes | [] | 下拉选项,数据格式如：[{label: '1', value: 1}, {label: '2', value: 2}] |
| size | String | false |  | 设置下拉框尺寸，当该值设为small时，显示小尺寸的下拉框|
| disabled | Boolean | false | false | 是否禁用 |
| optLabel | String | false | label | option为对象时，label的属性名，默认为'label' |
| optValue | String | false | value | option为对象时，value的属性名，默认为'value' |
| groupLabel | String | false | label | option为对象时，optgroup的label属性名，默认为'label' |
| groupValue | String | false | value | option为对象时，optgroup的子选项属性名，默认为'value' |
| placeholder | String | false | -- | 未选中任何下拉值时显示的文字，默认为'--' |
| defaultValue | String,Number | false | -- | 默认值 |
| inline | Boolean | false | false | 组件宽度按内容自适应，默认为'false',按父元素大小显示 |
| isError | Boolean | false | false | 是否显示错误提示 |
| errorMsg | String/Object | false | '' | 提示信息，可以是字符串（'error message'）或json对象({title:'title', text:'message'})。需要将isError设为true |


### Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| on-change | value | 下拉框的值发生变化时，触发该事件。 |


### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| getValue |  | 获取选中选项的值 |
| setValue | value | 设置下拉值 |
| getText |  | 获取选中选项的文本 |
| getSelected |  | 获取选中的option |
| disable |  | 禁用下拉框 |
| enable |  | 启用下拉框 |
| reset |  | 重置下拉框的值 |
| clear |  | 清除选中值 |

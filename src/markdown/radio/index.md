<script>
 import {TBoxGroup} from 'aii-taurus' 
 export default {
   components: {
     'ab': TBoxGroup
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
## Radio 单选框

在一组备选项中进行单选

### 基本用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
:::demo xxxxx
```html
<ab type="radiobox" 
        labels="item1,item2,item3,item4" 
        checked="false,true,false,false" 
        mtop="true" size="small"
      @changed="changed"
      @checked="checked"
      @unchecked="unchecked"></ab>
<script>
  import {TBoxGroup} from 'aii-taurus' 
 export default {
   components: {
     TBoxGroup: 't-radio'
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

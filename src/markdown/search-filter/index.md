<script>
 import {TSearchFilter} from 'aii-taurus';

   export default ({
     components: {
       TSearchFilter
     },
     data: function () {
     return {
         normalSearchResult: '',
         smallSearchResult: '',
         inlineSearchResult: '',
         smaillInlineSearchResult: ''
       };
     },
     methods: {
       normalSearch: function (value) {
             console.log('normalSearchResult search:' + this.normalSearchResult);
           },
           smallSearch: function (value) {
             this.smallSearchResult = value;
           },
           inlineSearch: function (value) {
             this.inlineSearchResult = value;
           },
           smaillInlineSearch: function (value) {
             this.smaillInlineSearchResult = value;
           }
     }
   });

</script>

## Search-Filter组件

搜索框组件，用于搜索过滤相应内容。

### Search

:::demo

```html
  <t-search-filter v-model.trim="normalSearchResult" @sf-search="normalSearch"></t-search-filter>
          <div class="form-row">
                      <div class="mt20">这是用来演示双向绑定的:<input v-model="normalSearchResult"></div>
                    </div>

<script>
 import {TSearchFilter} from 'aii-taurus';

   export default ({
     components: {
       TSearchFilter
     },
     data: function () {
     return {
         normalSearchResult: ''
       };
     },
     methods: {
       normalSearch: function (value) {
             console.log('normalSearchResult search:' + this.normalSearchResult);
           }
     }
   });

</script>
```
:::

## Search Small

:::demo

```html
  <t-search-filter :is-small="true" v-model.trim="smallSearchResult" @sf-search="smallSearch"></t-search-filter>
        <div class="form-row">
                    <div class="mt20">这是用来演示双向绑定的:<input v-model="smallSearchResult"></div>
                  </div>
<script>
 import {TSearchFilter} from 'aii-taurus';

   export default ({
     components: {
       TSearchFilter
     },
     data: function () {
     return {
         smallSearchResult: ''
       };
     },
     methods: {
           smallSearch: function (value) {
             this.smallSearchResult = value;
           }
     }
   });

</script>
```
:::

## Search Inline

:::demo

```html
<t-search-filter :is-inline="true" v-model.trim="inlineSearchResult" @sf-search="inlineSearch"></t-search-filter>
      <div class="form-row">
            <div class="mt20">这是用来演示双向绑定的:<input v-model="inlineSearchResult"></div>
          </div>

<script>
 import {TSearchFilter} from 'aii-taurus';

   export default ({
     components: {
       TSearchFilter
     },
     data: function () {
     return {
         inlineSearchResult: ''
       };
     },
     methods: {
           inlineSearch: function (value) {
             this.inlineSearchResult = value;
           }
     }
   });

</script>
```
:::


## Search Small Inline

:::demo

```html
<t-search-filter :is-small="true" :is-inline="true" v-model.trim="smaillInlineSearchResult" @sf-search="smaillInlineSearch"></t-search-filter>
<div class="form-row">
      <div class="mt20">这是用来演示双向绑定的:<input v-model="smaillInlineSearchResult"></div>
    </div>


<script>
 import {TSearchFilter} from 'aii-taurus';

   export default ({
     components: {
       TSearchFilter
     },
     data: function () {
     return {
         smaillInlineSearchResult: ''
       };
     },
     methods: {
           smaillInlineSearch: function (value) {
             this.smaillInlineSearchResult = value;
           }
     }
   });

</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| max | Number| No |  | 组件可达到的最大值 |
| min | Number | No  | 0 | 组件对应的最小值，递减到最小值后停止减小|
| step | Number | No  | 1 | 组件的增减步长，递增或递减以此作为步长|
| defaultValue | Number | No | 0 | 组件的初始值，若默认值小于最小值，则将最小值设置为默认值；若默认值大于最大值，则将最大值设置为默认值 |
| size | String | No |  | 可选择normal和small两种，不传入是默认为normal |
| label | String | No |  | 组件的label,不传或传空时label不占位 |
| modelValue | Number | No |  | 用来做双向绑定的入参传值 |

### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| setValue | \(value\) | 设置组件的值 |
| getValue |  | 获取组件的值 |
| disable |  | 禁用组件 |
| enable |  | 启用组件 |


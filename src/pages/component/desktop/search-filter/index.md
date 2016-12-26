<script>
 import {TSearchFilter} from 'ai-taurus-desktop';

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

:::demo sf-search="normalSearch"来定义为普通搜索框，并且要用v-model绑定需要返回的值。

```html
  <t-search-filter v-model.trim="normalSearchResult" @sf-search="normalSearch"></t-search-filter>
          <div class="form-row">
                      <div class="mt20">这是用来演示双向绑定的:<input v-model="normalSearchResult"></div>
                    </div>

<script>
 import {TSearchFilter} from 'ai-taurus-desktop';

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

:::demo is-small="true" 来设置成small样式

```html
  <t-search-filter :is-small="true" v-model.trim="smallSearchResult" @sf-search="smallSearch"></t-search-filter>
        <div class="form-row">
                    <div class="mt20">这是用来演示双向绑定的:<input v-model="smallSearchResult"></div>
                  </div>
<script>
 import {TSearchFilter} from 'ai-taurus-desktop';

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
 import {TSearchFilter} from 'ai-taurus-desktop';

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

:::demo is-inline="true"来显示搜索框搜索按钮

```html
<t-search-filter :is-small="true" :is-inline="true" v-model.trim="smaillInlineSearchResult" @sf-search="smaillInlineSearch"></t-search-filter>
<div class="form-row">
   <div class="mt20">这是用来演示双向绑定的:<input v-model="smaillInlineSearchResult"></div>
</div>


<script>
 import {TSearchFilter} from 'ai-taurus-desktop';

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

### Props (参数)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| value | String | No | '' | 输入框内的文本 |
| delay | Number | No | 300 | 默认延迟300毫秒执行搜索，可以传入其他值来控制延迟时间 |
| isSmall | Boolean | No  | true | 组件尺寸大小，true为小尺寸，false为大尺寸 |
| isInline | Boolean | No | true | 控制显示模式，当值为true时，搜索框的搜索按钮隐藏，当值为false时，搜索框搜索按钮显示 |

### Events (事件)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| search | 无 | 输入文字搜索时触发回调 |

### Methods (方法)

| 名字 | 参数 | 描述 |
| --- | ---| --- |
| clear |无| 清除输入框文本 |

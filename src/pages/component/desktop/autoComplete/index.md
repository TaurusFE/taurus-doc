<script>
import {TAutocomplete} from 'ai-taurus-desktop'
export default {
  components: {
    TAutocomplete
  },
  data () {
    return  {
      // delay: 1000,
    rearchResult: '',
    disabled: false,
    autoFocus: false,
    source: [
      'ActionScript',
      'AppleScript',
      'Asp',
      'BASIC',
      'C',
      'C++',
      'Clojure',
      'COBOL',
      'ColdFusion',
      'Erlang',
      'Fortran',
      'Groovy',
      'Haskell',
      'Java',
      'JavaScript',
      'Lisp',
      'Perl',
      'PHP',
      'Python',
      'Ruby',
      'Scala',
      'Scheme'
    ]
    }
  }
}
</script>

## AutomComplete
Autocomplete组件，根据用户输入值进行搜索和过滤，让用户快速找到并从预设值列表中选择。
::: demo 要使用该组件需要传入一个`source`数组，并且要用`v-model`绑定需要返回的值。接受一个`Boolean`类型的disabled属性来控制组件是否禁用
```html
<template>
<div style='width:400px;'>
   <t-autocomplete
      v-model.trim="rearchResult"
      :source="source"
      :disabled="disabled"
      :auto-focus="autoFocus" >
    </t-autocomplete>
</div>
<div style='margin-top: 20px'>
      <button class="button button--action" @click="disabled=true" >disable</button>
      <button class="button button--action ml20" @click="disabled=false">enable</button>
</div>
 <p style='margin-top: 20px'>disabled-status:{{disabled}}</p>
 <div style='margin-top: 20px'>这是用来演示双向绑定的:<input v-model.trim="rearchResult"></div>
</template>
<script>
import {TAutocomplete} from 'ai-taurus-desktop'
export default {
  components: {
    TAutocomplete
  },
  data () {
    return  {
      rearchResult: '',
      disabled: false,
      autoFocus: false,
      source: [
        'ActionScript', 'AppleScript', 'Asp',
        'BASIC', 'C', 'C++',
        'Clojure', 'COBOL', 'ColdFusion',
        'Erlang', 'Fortran', 'Groovy',
        'Haskell', 'Java', 'JavaScript',
        'Lisp', 'Perl', 'PHP',
        'Python', 'Ruby', 'Scala', 'Scheme'
      ]
    }
  }
}
</script>

```
:::
### Props

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| source | String, Array, Function| Yes |  | 定义要使用的数据，必须指定 |
| v-model | String| Yes |  | 用来绑定的值 |
| delay | Number | No  | 0 or 300 | 键和执行搜索之间的延迟，以毫秒计。默认远程调用300，本地0|
| resultLimit | Number | No | 10 | 显示结果的条数限制 |
| autoFocus | Boolean | No | false | 如果设置为 true，当菜单显示时，第一个条目将自动获得焦点|
| disabled | Boolean | No | false | 如果设置为 true，则该 Autocomplete不会弹出搜索结果框，仅作为普通输入框 |


### Events

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| change |  \({oldValue: '改变前值', newValue: '改变后的值'}\) | 搜索值发生了改变 |
| close |  | 关闭搜索结果列表菜单 |
| open |  | 打开搜索结果列表菜单 |
| select | value | 选择搜索结果,参数为选择的内容 |

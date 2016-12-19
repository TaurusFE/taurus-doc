<script>
  import {TSwitcher} from 'aii-taurus'
  export default {
    data () {
      return {
        small: {
          'on': 'Yes',
          'off': 'No',
          value: false
        },
        two: {
          'on': 'Y',
          'off': 'N',
          disabled: true
        },
        three: {
          'on': '开',
          'off': '关'
        },
        four: {
          'on':'<i class="icon-add"/>',
          'off': '<i class=" icon-remove"/>'
        }
      }
    },
    components: {
      TSwitcher
    }
  };
</script>
## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`on-text`属性与`off-text`属性来设置开关的文字描述。

```html
<template>
  <t-switcher :on-text='small.on' 
              :off-text='small.off' 
              v-model='small.value'>
  </t-switcher>
</template>
<script>
  import {TSwitcher} from 'aii-taurus'
  export default {
    components: {
      TSwitcher
    },
    return {
        small: {
          'on': 'Yes',
          'off': 'No'
        }
      }
  };
</script>
```


:::
### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```html
<template>
  <t-switcher :on-text='two.on' 
              :off-text='two.off' 
              :disabled='two.disabled'>
  </t-switcher>
</template>
<script>
  import {TSwitcher} from 'aii-taurus'
  export default {
    data() {
      return {
        two: {
          'on': 'Y',
          'off': 'N',
          disabled: true
        },
      }
    },
    components: {
      TSwitcher
    }
  };
</script>
```
:::
### 加长状态

:::demo 设置`wide`属性，接受一个`Boolean`，设置`true`即可使用加长状态。或者在标签上加上wide属性

```html
  <template>
    <t-switcher :on-text='three.on' 
                :off-text='three.off' 
                wide>
    </t-switcher>
  </template>
  <script>
  import {TSwitcher} from 'aii-taurus'
  export default {
    data() {
      return {
        three: {
          'on': '开',
          'off': '关'
        }
      }
    },
    components: {
      TSwitcher
    }
  };
  </script>
```
:::

### 开关图标
:::demo 只需要在`on-text`和`off-text`属性中设置`<i></i>`就可以使开关状态显示为图标
```html
  <template>
    <t-switcher :on-text='four.on' 
                :off-text='four.off'>
    </t-switcher>
  </template>
  <script>
  import {TSwitcher} from 'aii-taurus'
  export default {
    data() {
      return {
       four: {
          'on':'<i class="icon icon-add"></i>',
          'off': '<i class="icon icon-remove"></i>'
        }
      }
    },
    components: {
      TSwitcher
    }
  };
  </script>
```
:::
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| wide  | 是否加宽    | boolean   | — | false |
| on-text  | switch 打开时的文字    | string   | — | ON |
| off-text  | switch 关闭时的文字    | string   | — | OFF |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-change  | switcher状态发生变化时的回调函数    | 新状态的布尔值 |


### Methods 
| 方法名称      | 说明    | 方法参数      |
|---------- |-------- |---------- |
| toggle | 切换switcher的状态| — |
| getValue | 获取switcher的开关状态| — |
| setValue | 设置switcher的状态| `true`: open ,`false`:关闭 |
| disable | 设置switcher为禁用状态| — |
| enable | 设置switcher的为可用状态| — |
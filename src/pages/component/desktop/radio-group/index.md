<script>
import {TRadioGroup} from 'ai-taurus-desktop';
export default {
  components: {
    TRadioGroup
  },
  data: function () {
    return {
      message: [],
      labels: ['八戒', '唐僧', '!'],
      tips: ['', '唐僧', '']
    };
  },
  methods: {
    checkedTwoItem () {
      this.$refs.myRadioGroup.check(1);
    },
    changeTwoItemLabel () {
      this.$set(this.labels, 1, (this.labels[1] === '唐僧') ? '悟空' : '唐僧');
    }
  }
};
</script>

## TRadioGroup组件

单选框组。

### 单选框组

:::demo

```html
<div class="form-row">
  <button class="button button--action" @click="checkedTwoItem">选中第二项</button>
  <button class="button button--action" @click="changeTwoItemLabel">改变第二项标签文本</button>
</div>
<div class="form-row">
  <t-radio-group :label="labels" ref="myRadioGroup" :tips="tips"></t-radio-group>
</div>

<script>
import {TRadioGroup} from 'ai-taurus-desktop';
export default {
  components: {
    TRadioGroup
  },
  data: function () {
    return {
      message: [],
      labels: ['八戒', '唐僧', '!'],
      tips: ['', '唐僧', '']
    };
  },
  methods: {
    checkedTwoItem () {
      this.$refs.myRadioGroup.check(1);
    },
    changeTwoItemLabel () {
      this.$set(this.labels, 1, (this.labels[1] === '唐僧') ? '悟空' : '唐僧');
    }
  }
};
</script>
```

:::

### 内联单选框

:::demo

```html
<div class="form-row">
  <t-radio-group :label="['Hello', 'world', '!']" :value="['你好', '世界', '!']" :inline="true"></t-radio-group>
</div>

<script>
import {TRadioGroup} from 'ai-taurus-desktop';
export default {
  components: {
    TRadioGroup
  }
};
</script>
```
:::

### v-model双向绑定

:::demo

```html
<div class="form-row">
  <t-radio-group :label="['Hello', 'world', '!']" :value="['你好', '世界', '!']" :inline="true" v-model="message"></t-radio-group>
  <div class="form-row">v-model绑定message的值为：{{message}}</div>
</div>

<script>
import {TRadioGroup} from 'ai-taurus-desktop';
export default {
  components: {
    TRadioGroup
  },
  data: function () {
    return {
      message: []
    };
  }
};
</script>
```
:::

### 尺寸

:::demo

```html
<div class="form-row">
  <t-radio-group :label="['第一项', '第二项', '第三项']" size="small" :inline="true"></t-radio-group>
  <t-radio-group :label="['第一项', '第二项', '第三项']" :mtop="true" :inline="true"></t-radio-group>
  <t-radio-group :label="['第一项', '第二项', '第三项']" :mtop="true" size="large" :inline="true"></t-radio-group>
</div>

<script>
import {TRadioGroup} from 'ai-taurus-desktop';
export default {
  components: {
    TRadioGroup
  }
};
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| checked | 是否勾选，true为勾选，否则没有勾选 | Boolean | true\|false | false |
| label | 标签文本 | Array | - | ['Untitled'] |
| disabled | 是否禁用，true表示禁用，否则表示启用 | Array | - | [false] |
| value | 值 | Array | - | null |
| tips | 鼠标悬停冒泡提示文本 | Array | - | [] |
| icon | 图标样式名 | Array | - | [] |
| size | 尺寸 | String | 'large'\|'normal'\|'small' | 'normal' |
| inline | 是否内联显示，true为内联显示，否则不内联。 | Boolean | true\|false | false |
| mtop | 是否添加顶边距，true为添加顶边距，否则不加顶边距 | Boolean | true\|false | false |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| checked | 勾选选中时触发该事件 | index 传入操作项序号 |
| unchecked | 取消勾选时触发该事件 | index 传入操作项序号 |
| changed | 勾选状态发生改变时触发该事件 | checked, index 传入勾选状态和变更项序号 |

### Methods

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| check | 勾选指定项 | index 待勾选的项目序号 |

<script>
import {TCheckbox} from 'ai-taurus-desktop';
export default {
  components: {
    TCheckbox
  },
  data: function () {
    return {
      label: '唐僧',
      oneItemCheckedState: false,
      checkedState: false,
      valueList: []
    };
  },
  methods: {
    toggleOneItemCheckedState () {
      this.oneItemCheckedState = !this.oneItemCheckedState;
    },
    getOneItemValue () {
      alert(this.$refs.myCheckbox.valueState);
    },
    changeTwoItemLabel () {
      this.label = (this.label === '唐僧') ? '孙悟空' : '唐僧';
    }
  }
};
</script>

## TCheckbox组件

复选框。

### 多选框

:::demo

```html
<div class="form-row">
  <button class="button button--action" @click="toggleOneItemCheckedState">切换第一项勾选状态</button>
  <button class="button button--action" @click="getOneItemValue">获得第一项的值</button>
  <button class="button button--action" @click="changeTwoItemLabel">改变第二项的标签文本</button>
</div>
<div id="demo1" class="form-row">
  <t-checkbox :checked="oneItemCheckedState" value="hello world!" icon="icon-chat-fill" label="带图标的复选框" ref="myCheckbox"></t-checkbox>
  <t-checkbox :label="label" tips="hello"></t-checkbox>
</div>

<script>
import {TCheckbox} from 'ai-taurus-desktop';
export default {
  el: '#demo1',
  components: {
    TCheckbox
  },
  data: function () {
    return {
      label: '唐僧',
      oneItemCheckedState: false,
      checkedState: false,
      valueList: []
    };
  },
  methods: {
    toggleOneItemCheckedState () {
      this.oneItemCheckedState = !this.oneItemCheckedState;
    },
    getOneItemValue () {
      alert(this.$refs.myCheckbox.valueState);
    },
    changeTwoItemLabel () {
      this.label = (this.label === '唐僧') ? '孙悟空' : '唐僧';
    }
  }
};
</script>
```
:::

### 内联多选框

:::demo

```html
<div id="demo2" class="form-row">
  <t-checkbox v-model="valueList" value="aaa" :checked="true" label="内联复选框1" :inline="true"></t-checkbox>
  <t-checkbox v-model="valueList" value="bbb" label="内联复选框2" :disabled="true" :inline="true"></t-checkbox>
  <t-checkbox v-model="valueList" value="ccc" label="内联复选框3" :checked="true" :inline="true"></t-checkbox>
</div>

<script>
import {TCheckbox} from 'ai-taurus-desktop';
export default {
  el: '#demo2',
  components: {
    TCheckbox
  },
  data: function () {
    return {
      label: '唐僧',
      valueList: []
    };
  }
};
</script>
```
:::

### 尺寸

:::demo

```html
<div id="demo3" class="form-row">
  <t-checkbox label="小号" size="small"></t-checkbox>
  <t-checkbox label="中号"></t-checkbox>
  <t-checkbox label="大号" size="large"></t-checkbox>
</div>

<script>
import {TCheckbox} from 'ai-taurus-desktop';
export default {
  el: '#demo3',
  components: {
    TCheckbox
  }
};
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| checked | 是否勾选，true为勾选，否则没有勾选 | Boolean | true\|false | false |
| label | 标签文本 | String | - | '' |
| disabled | 是否禁用，true表示禁用，否则表示启用 | Boolean | true\|false | false |
| value | 值 | String | - | '' |
| tips | 鼠标悬停冒泡提示文本 | String | - | '' |
| icon | 图标样式名 | String | - | '' |
| size | 尺寸 | String | 'large'\|'normal'\|'small' | 'normal' |
| inline | 是否内联显示 | Boolean | true\|false | false |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| checked | 勾选选中时触发该事件 | - |
| unchecked | 取消勾选时触发该事件 | - |
| changed | 勾选状态发生改变时触发该事件 | checked 传入勾选状态 |

### Methods

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| toggle | 切换勾选状态 | - |

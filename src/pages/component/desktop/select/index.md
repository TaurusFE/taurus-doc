<script>
import {TSelect} from 'ai-taurus-desktop';
export default {
  components: {
    TSelect
  },
  data: function () {
    return {
      simpleValue: [
        'Push-Communication',
        'Trouble-Ticket',
        'Campaign',
        'Customer-Management',
        'C3'
      ],
      complexValue: [
        {
          text: 'Push-Communication',
          name: 'v1'
        },
        {
          text: 'Trouble-Ticket',
          name: 'v2'
        },
        {
          text: 'Campaign',
          name: 'v3'
        },
        {
          text: 'Customer-Management',
          name: 'v4'
        },
        {
          text: 'C3',
          name: 'v5'
        }
      ]
    };
  },
  methods: {
    _hdSelect: function (itemData) {
      console.log('select==>' + itemData);
    },
    _hdUnSelect: function (itemData) {
      console.log('unselect==>' + itemData);
    }
  }
};
</script>

## TSelect组件

下拉列表框。

### 基本用法

:::demo

```html
<div id="base" class="form-row">
  <t-select :value="simpleValue" size="small" width="200px" @select="_hdSelect" @unselect="_hdUnSelect"></t-select>
</div>

<script>
export default {
  el: '#base',
  components: {
    TSelect
  },
  data: function () {
    return {
      simpleValue: [
        'Push-Communication',
        'Trouble-Ticket',
        'Campaign',
        'Customer-Management',
        'C3'
      ],
      complexValue: [
        {
          text: 'Push-Communication',
          name: 'v1'
        },
        {
          text: 'Trouble-Ticket',
          name: 'v2'
        },
        {
          text: 'Campaign',
          name: 'v3'
        },
        {
          text: 'Customer-Management',
          name: 'v4'
        },
        {
          text: 'C3',
          name: 'v5'
        }
      ]
    };
  },
  methods: {
    _hdSelect: function (itemData) {
      console.log('select==>' + itemData);
    },
    _hdUnSelect: function (itemData) {
      console.log('unselect==>' + itemData);
    }
  }
});
</script>
```
:::

### 禁用下拉框

:::demo

```html
<div id="disabledState" class="form-row">
  <t-select :value="simpleValue" placeholder="请选择一条数据" :disabled="true" width="200px"></t-select>
</div>

<script>
export default {
  el: '#disabledState',
  components: {
    TSelect
  },
  data: function () {
    return {
      simpleValue: [
        'Push-Communication',
        'Trouble-Ticket',
        'Campaign',
        'Customer-Management',
        'C3'
      ]
    };
  }
};
</script>
```
:::

### 设置下拉框 Placeholder

:::demo

```html
<div id="placeholder" class="form-row">
  <t-select :value="simpleValue" placeholder="请选择一条数据" width="200px"></t-select>
</div>

<script>
export default {
  el: '#placeholder',
  components: {
    TSelect
  },
  data: function () {
    return {
      simpleValue: [
        'Push-Communication',
        'Trouble-Ticket',
        'Campaign',
        'Customer-Management',
        'C3'
      ]
    };
  }
};
</script>
```

:::

### 多选下拉框

:::demo

```html
<div id="multiple" class="form-row">
  <t-select :value="simpleValue" :muti-select="true" placeholder="请选择" width="400px"></t-select>
</div>

<script>
export default {
  el: '#multiple',
  components: {
    TSelect
  },
  data: function () {
    return {
      simpleValue: [
        'Push-Communication',
        'Trouble-Ticket',
        'Campaign',
        'Customer-Management',
        'C3'
      ]
    };
  }
};
</script>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| options | 值 | Array | - | [] |
| size | 尺寸, 空串表示标准尺寸 | String | ''\|'small' | '' |
| disabled | 是否禁用，true表示禁用，否则表示启用 | Boolean | true\|false | false |
| width | 宽度 | String | 'auto'\|长度\|百分比 | 'auto' |
| muti-select | 是否多选，true表示多选，否则表示单选 | Boolean | true\|false | false |
| placeholder | placeholder文本。此文本只有在没有设置`default-value`属性的情况下显示 | String | - | '' |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选中下拉框的值时触发该事件。data参数表示当前选中项对应的数据 | data |
| unselect | 取消选中下拉框的值时触发该事件。data参数表示当前取消选中项对应的数据 | data |

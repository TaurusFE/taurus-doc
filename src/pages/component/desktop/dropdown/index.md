<script>
import { TDropdown } from 'ai-taurus-desktop';
export default {
  components: {
    TDropdown
  },
  data () {
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
    _hdCustomDropdownClick (event) {
      var el = event.target;
      var lineInfo = el.getAttribute('data-line');
      if (lineInfo !== null) {
        alert('您点击了' + lineInfo);
      }
      this.$refs.myDropdown.visibledState = false;
    },
    _hdClick () {
      var dd = this.$refs.myDropdown;
      dd.visibledState = !dd.visibledState;
    },
    closeDropdown () {
      this.$refs.myDropdown.visibledState = false;
    }
  }
};
</script>

## Dropdown组件

TDropdown是一个下拉框组件，它没有触发开关，触发开关由用户自定义完成，下拉部分内容默认是一个简单列表，但是也可以自定义。

### 鼠标悬停触发

:::demo 鼠标悬停显示。此示例value属性也可以改为complexValue这种复杂数据结构

```html
<div class="form-row">
  <t-dropdown :value="simpleValue">
    <a href="javascript:void(0)">鼠标悬停显示(hover)</a>
  </t-dropdown>
</div>
<script>
import { TDropdown } from 'ai-taurus-desktop';
export default {
  components: {
    TDropdown
  },
  data () {
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
  }
};
</script>
```

:::

### 鼠标单击触发

:::demo 鼠标单击显示

```html
<div class="form-row">
  <t-dropdown :value="simpleValue" toggler="click" @click="_hdClick">
    <a href="javascript:void(0)">鼠标单击显示(click)</a>
  </t-dropdown>
</div>

<script>
import { TDropdown } from 'ai-taurus-desktop';
export default {
  components: {
    TDropdown
  },
  data () {
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
    _hdClick (data) {
      console.log(data);
    }
  }
};
</script>
```

:::

### 自定义

:::demo 自定义下拉内容

```html
<div class="form-row">
  <t-dropdown toggler="custom" ref="myDropdown" @click="_hdCustomDropdownClick">
    <a href="javascript:void(0)" @click="_hdClick">自定义(custom)</a>
    <div slot="content" class="padding-whole--xsmall">
      <div data-line="第一行" class="box--yellow" style="white-space:nowrap">独在异乡为异客</div>
      <div data-line="第二行" class="box--purple color-white" style="white-space:nowrap">每逢佳节倍思亲</div>
      <button class="button button--default button--small button--stretch" @click="closeDropdown()">Close</button>
    </div>
  </t-dropdown>
</div>

<script>
import { TDropdown } from 'ai-taurus-desktop';
export default {
  components: {
    TDropdown
  },
  data () {
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
    _hdCustomDropdownClick (event) {
      var el = event.target;
      var lineInfo = el.getAttribute('data-line');
      if (lineInfo !== null) {
        alert('您点击了' + lineInfo);
      }
      this.$refs.myDropdown.visibledState = false;
    },
    _hdClick () {
      var dd = this.$refs.myDropdown;
      dd.visibledState = !dd.visibledState;
    },
    closeDropdown () {
      this.$refs.myDropdown.visibledState = false;
    }
  }
};
</script>
```

:::

### Attributes

`TDropdown`组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| toggler | 触发器类型。默认为'hover'，即当鼠标移动到触发器区域时自动显示下拉内容，移出后隐藏下拉内容；如果设置为'click'，那么只有当鼠标在触发器区域单击时才会显示下拉内容，在其他区域单击隐藏下拉内容；如果设置为'custom'，那么触发器区域内的触发动作和下拉内容完全自定义实现。 | String | 'hover'\|'click'\|'custom' | 'hover' |
| disabled | 是否禁用。true为禁用，否则启用。 | Boolean | true\|false | false |
| value | 值对象。是一个数组，下拉框内容中显示的数据来自此数组，其元素可以是简单的字符串，也可以是一个对象。当元素为一个对象时，此对象至少要包括一个名为'text'的属性指定这个项的显示文本。 | Array | - | [] |
| width | 宽度 | String | 'auto'\|长度\|百分比 | 'auto' |
| visibled | 下拉内容是否可见 | Boolean | true\|false | false |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 当点击下拉内容区域时触发该事件 | data\|event 当toggler属性为'custom'时，回调参数为事件对象，否则回调参数为点击列表项对应value属性中的值对象。 |

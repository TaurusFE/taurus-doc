<script>
import {TTransfer, TButton} from 'ai-taurus-desktop';

new Vue({
  components: {
    TTransfer,
    TButton
  },
  data: function () {
    return {
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys(),
      listStyle: {
        width: '250px',
        height: '300px'
      }
    };
  },
  methods: {
    getMockData: function () {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: '内容' + i,
          description: '内容' + i + '的描述信息',
          disabled: Math.random() * 3 < 1
        });
      }
      return mockData;
    },
    getTargetKeys: function () {
      return this.getMockData().filter(() => Math.random() * 2 > 1).map(item => item.key);
    },
    render1: function (item) {
      return item.label + ' - ' + item.description;
    },
    handleChange1: function (newTargetKeys, direction, moveKeys) {
      console.log(newTargetKeys);
      console.log(direction);
      console.log(moveKeys);
      this.targetKeys1 = newTargetKeys;
    },
    reloadMockData: function () {
      this.data1 = this.getMockData();
      this.targetKeys1 = this.getTargetKeys();
    }
  }
});
</script>

## Transfer

穿梭框组件

### Transfer

:::demo 需要传入data来设置穿梭框数据,target-keys来设置已选数据

```html
<t-transfer
    :data="data1"
    :target-keys="targetKeys1"
    @on-change="handleChange1"></t-transfer>
<script>
import {TTransfer} from 'ai-taurus-desktop';

new Vue({
  components: {
    TTransfer
  },
  data: function () {
    return {
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys()
    };
  },
  methods: {
    getMockData: function () {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: '内容' + i,
          description: '内容' + i + '的描述信息',
          disabled: Math.random() * 3 < 1
        });
      }
      return mockData;
    },
    getTargetKeys: function () {
      return this.getMockData().filter(() => Math.random() * 2 > 1).map(item => item.key);
    },
    handleChange1: function (newTargetKeys, direction, moveKeys) {
      console.log(newTargetKeys);
      console.log(direction);
      console.log(moveKeys);
      this.targetKeys1 = newTargetKeys;
    }
  }
});
</script>
```
:::

### Search Transfer

:::demo filterable设置为true

```html
 <t-transfer
    :data="data1"
    :target-keys="targetKeys1"
    :filterable="true"
    @on-change="handleChange1"></t-transfer>
<script>
import {TTransfer} from 'ai-taurus-desktop';

new Vue({
  components: {
    TTransfer
  },
  data: function () {
    return {
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys()
    };
  },
  methods: {
    getMockData: function () {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: '内容' + i,
          description: '内容' + i + '的描述信息',
          disabled: Math.random() * 3 < 1
        });
      }
      return mockData;
    },
    getTargetKeys: function () {
      return this.getMockData().filter(() => Math.random() * 2 > 1).map(item => item.key);
    },
    handleChange1: function (newTargetKeys, direction, moveKeys) {
      console.log(newTargetKeys);
      console.log(direction);
      console.log(moveKeys);
      this.targetKeys1 = newTargetKeys;
    }
  }
});
</script>
```
:::

### Subscriptions Transfer

:::demo 自定义穿梭框

```html
 <t-transfer
    :data="data1"
    :target-keys="targetKeys1"
    :list-style="listStyle"
    :render-format="render1"
    :operations="['向左移动','向右移动']"
    filterable
    show-footer
    @on-change="handleChange1">
    <div :style="{float: 'right', margin: '5px'}" slot="left-footer">
      <t-button  text="刷新"  class="button--default" size="small" @btn-click="reloadMockData"></t-button>
    </div>
    <div :style="{float: 'right', margin: '5px'}" slot="right-footer">
      <t-button  text="刷新"  class="button--default" size="small" @btn-click="reloadMockData"></t-button>
    </div>
  </t-transfer>
<script>
import {TTransfer, TButton} from 'ai-taurus-desktop';

new Vue({
  components: {
    TTransfer,
    TButton
  },
  data: function () {
    return {
      data1: this.getMockData(),
      targetKeys1: this.getTargetKeys(),
      listStyle: {
        width: '250px',
        height: '300px'
      }
    };
  },
  methods: {
    getMockData: function () {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: '内容' + i,
          description: '内容' + i + '的描述信息',
          disabled: Math.random() * 3 < 1
        });
      }
      return mockData;
    },
    getTargetKeys: function () {
      return this.getMockData().filter(() => Math.random() * 2 > 1).map(item => item.key);
    },
    render1: function (item) {
      return item.label + ' - ' + item.description;
    },
    handleChange1: function (newTargetKeys, direction, moveKeys) {
      console.log(newTargetKeys);
      console.log(direction);
      console.log(moveKeys);
      this.targetKeys1 = newTargetKeys;
    },
    reloadMockData: function () {
      this.data1 = this.getMockData();
      this.targetKeys1 = this.getTargetKeys();
    }
  }
});
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| data | Array | Yes  |  | 穿梭框数据实例数组 |
| targetKeys | Array | Yes  |  | 显示在右侧框数据的key集合 |
| titles | Array | Yes  |  | 标题集合，顺序从左至右 |
| operations | Array | Yes  |  | 操作文案集合，顺序从上至下 |
| filterable | Boolean| No | false | 是否显示搜索框 |
| render-format | Function| No |  | 每行数据渲染函数 |
| list-style | Object | No | false | 两个穿梭框的自定义样式 |

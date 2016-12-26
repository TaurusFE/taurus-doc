<script>
import { TDTabs, TTabs, TFlatTabs } from 'ai-taurus-desktop';
export default {
  components: {
    TTabs,
    TFlatTabs,
    TDTabs
  },
  data () {
    return {
      tabs: ['Panel 1', 'Panel 2', 'Panel 3'],
      dTabs: [{name: 'Panel_1'}, {name: 'Panel_2'}, {name: 'Panel_3'}],
      content: [
        {
          type: 'Panel 1',
          id: 'panel_one'
        },
        {
          type: 'Panel 2',
          id: 'panel_two'
        },
        {
          type: 'Panel 3',
          id: 'panel_three'
        }
      ],
      smallTabs: ['Panel 1', 'Panel 2', 'Panel 3'],
      smallContent: [
        {
          type: 'Panel 1',
          id: 's_panel_one'
        },
        {
          type: 'Panel 2',
          id: 's_panel_two'
        },
        {
          type: 'Panel 3',
          id: 's_panel_three'
        }
      ],
      flatTabs: ['LongPanel 1', 'LongPanel 2', 'LongPanel 3', 'LongPanel 4', 'LongPanel 5'],
      flatContent: [
        {
          type: 'LongPanel 1',
          id: 'flat_panel_one'
        },
        {
          type: 'LongPanel 2',
          id: 'flat_panel_two'
        },
        {
          type: 'LongPanel 3',
          id: 'flat_panel_three'
        },
        {
          type: 'LongPanel 4',
          id: 'flat_panel_four'
        },
        {
          type: 'LongPanel 5',
          id: 'flat_panel_five'
        }
      ],
      fewFlatTabs: ['Panel 1', 'Panel 2', 'PanelWithLongName'],
      fewFlatContent: [
        {
          type: 'Panel 1',
          id: 'f_flat_panel_one'
        },
        {
          type: 'Panel 2',
          id: 'f_flat_panel_two'
        },
        {
          type: 'PanelWithLongName',
          id: 'f_flat_panel_three'
        }
      ]
    };
  },

  methods: {
    addOneTab (tab) {
      this.$refs.tdTab.addTab(tab);
    },
    addMoreTab () {
      this.$refs.tdTab.addTab({name: 'tab' + (Math.random() + '').substr(2)});
    },
    closeOneTab (tab) {
      this.$refs.tdTab.closeTab(tab);
    },
    onChange (val, oldVal) {
      alert(oldVal + '--->' + val);
    },
    onAdd (tab) {
      alert('tab ' + tab + 'was added!');
    },
    onClose (tab) {
      alert('tab ' + tab + 'was closed!');
    }
  }
};
</script>

## Tab组件

Tab组件一般用来分类数据和导航。

### 基本用法

#### **标准页签**

:::demo

```html
<template>
  <div>
    <div class="form-row">
      <h1>标准尺寸</h1>
      <t-tabs :tabs="tabs" :content="content">
        <section id="panel_one" class="tabpanel__panel">
          <div class="sg-component__label">Tab content 1</div>
        </section>
        <section id="panel_two" class="tabpanel__panel">
          <div class="sg-component__label">Tab content 2</div>
        </section>
        <section id="panel_three" class="tabpanel__panel is-active">
          <div class="sg-component__label">Tab content 3</div>
        </section>
      </t-tabs>
    </div>
    <div class="form-row">
      <h1>小尺寸</h1>
      <t-tabs :tabs="smallTabs" :content="smallContent" :small="true">
        <section id="s_panel_one" class="tabpanel__panel">
          <div class="sg-component__label">Small Tab content 1</div>
        </section>
        <section id="s_panel_two" class="tabpanel__panel">
          <div class="sg-component__label">Small Tab content 2</div>
        </section>
        <section id="s_panel_three" class="tabpanel__panel is-active">
          <div class="sg-component__label">Small Tab content 3</div>
        </section>
      </t-tabs>
    </div>
  </div>
</template>
<script>
import {TTabs} from 'ai-taurus-desktop';
export default {
  components: {
    TTabs
  },
  data () {
    return {
      tabs: ['Panel 1', 'Panel 2', 'Panel 3'],
      content: [
        {
          type: 'Panel 1',
          id: 'panel_one'
        },
        {
          type: 'Panel 2',
          id: 'panel_two'
        },
        {
          type: 'Panel 3',
          id: 'panel_three'
        }
      ],
      smallTabs: ['Panel 1', 'Panel 2', 'Panel 3'],
      smallContent: [
        {
          type: 'Panel 1',
          id: 's_panel_one'
        },
        {
          type: 'Panel 2',
          id: 's_panel_two'
        },
        {
          type: 'Panel 3',
          id: 's_panel_three'
        }
      ]
    };
  }
};
</script>
```

:::
#### **平面风格页签**

:::demo 使用`TFlatTabs`组件实现

```html
<template>
  <div>
    <div class="form-row">
      <t-flat-tabs :tabs="flatTabs" :content="flatContent" :many-items="true">
        <section id="flat_panel_one" class="tabpanel__panel">
          <div class="sg-component__label">Flat Tab 1</div>
        </section>
        <section id="flat_panel_two" class="tabpanel__panel">
          <div class="sg-component__label">Flat Tab 2</div>
        </section>
        <section id="flat_panel_three" class="tabpanel__panel">
          <div class="sg-component__label">Flat Tab 3</div>
        </section>
        <section id="flat_panel_four" class="tabpanel__panel">
          <div class="sg-component__label">Flat Tab 4</div>
        </section>
        <section id="flat_panel_five" class="tabpanel__panel">
          <div class="sg-component__label">Flat Tab 5</div>
        </section>
      </t-flat-tabs>
    </div>
    <div class="form-row">
      <t-flat-tabs :tabs="fewFlatTabs" :content="fewFlatContent">
        <section id="f_flat_panel_one" class="tabpanel__panel">
          <div class="sg-component__label">Few Flat Tab 1</div>
        </section>
        <section id="f_flat_panel_two" class="tabpanel__panel">
          <div class="sg-component__label">Few Flat Tab 2</div>
        </section>
        <section id="f_flat_panel_three" class="tabpanel__panel">
          <div class="sg-component__label">Few Flat Tab 3</div>
        </section>
      </t-flat-tabs>
    </div>
  </div>
</template>
<script>
import {TFlatTabs} from 'ai-taurus-desktop';
export default {
  components: {
    TFlatTabs
  },
  data () {
    return {
      flatTabs: ['LongPanel 1', 'LongPanel 2', 'LongPanel 3', 'LongPanel 4', 'LongPanel 5'],
      flatContent: [
        {
          type: 'LongPanel 1',
          id: 'flat_panel_one'
        },
        {
          type: 'LongPanel 2',
          id: 'flat_panel_two'
        },
        {
          type: 'LongPanel 3',
          id: 'flat_panel_three'
        },
        {
          type: 'LongPanel 4',
          id: 'flat_panel_four'
        },
        {
          type: 'LongPanel 5',
          id: 'flat_panel_five'
        }
      ],
      fewFlatTabs: ['Panel 1', 'Panel 2', 'PanelWithLongName'],
      fewFlatContent: [
        {
          type: 'Panel 1',
          id: 'f_flat_panel_one'
        },
        {
          type: 'Panel 2',
          id: 'f_flat_panel_two'
        },
        {
          type: 'PanelWithLongName',
          id: 'f_flat_panel_three'
        }
      ]
    };
  }
};
</script>
```

:::
#### **动态页签**

:::demo 使用`TDTabs`组件实现

```html
<template>
  <div>
    <div class="form-row">
      <button @click="addOneTab({name: 'newTab1'})" class="button button--small button--action">add new1</button>
      <button @click="closeOneTab({name: 'newTab1'})" class="button button--small button--action">close new 1</button>
      <button @click="addOneTab({name: 'query tab', source: 'query'})" class="button button--small button--action">add query tab</button>
      <button @click="addMoreTab" class="button button--small button--action">add more</button>
    </div>
    <div class="form-row">
      <t-d-tabs
        :tabs="dTabs"
        v-on:tab-change="onChange"
        v-on:tab-add="onAdd"
        v-on:tab-close="onClose"
        ref="tdTab">
      </t-d-tabs>
    </div>
  </div>
</template>
<script>
import {TDTabs} from 'ai-taurus-desktop';
export default {
  components: {
    TDTabs
  },
  data () {
    return {
      dTabs: [{name: 'Panel_1'}, {name: 'Panel_2'}, {name: 'Panel_3'}],
    };
  },
  methods: {
    addOneTab (tab) {
      this.$refs.tdTab.addTab(tab);
    },
    addMoreTab () {
      this.$refs.tdTab.addTab({name: 'tab' + (Math.random() + '').substr(2)});
    },
    closeOneTab (tab) {
      this.$refs.tdTab.closeTab(tab);
    },
    onChange (val, oldVal) {
      alert(oldVal + '--->' + val);
    },
    onAdd (tab) {
      alert('tab ' + tab + 'was added!');
    },
    onClose (tab) {
      alert('tab ' + tab + 'was closed!');
    }
  }
};
</script>
```

:::
### Attributes

`TTabs`组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| small | 组件显示尺寸 | Boolean | true\|false | false |
| tabs | 页签头标题名。 | Array  | - | [] |
| content | 页签内容（标题名和内容区域建立连接）。 | Array | - | [] |
| tabActive | 组件初始化默认展示的页签（此处填写页签标题名） | String | - | $index_0 |

`TFlatTabs`组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| manyItems | 大量页签展示模式 | Boolean | true\|false | false |
| tabs | 页签头标题名。 | Array  | - | [] |
| content | 页签内容（标题名和内容区域建立连接）。 | Array | - | [] |
| tabActive | 组件初始化默认展示的页签（此处填写页签标题名） | String | - | $index_0 |

`TDTabs`组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| tabs | 组件初始化所需的数据,name字段是必要属性，且不可重复，source字段为可选属性，表示页签打开来源 | Array  | - | [{name:'index'}] |
| tabActive | 组件初始化默认展示的页签（此处填写页签标题名）| String | - | $index_0 |

### Events

`TFlatTabs`组件具有如下事件：

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| ft-toggle-tab | 切换页签时触发 | - |

`TDTabs`组件具有如下事件：

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| tab-change |当激活的页签由一个变为另一个的时候触发，关闭和打开新的页签都会触发此事件 | newValue, oldValue |
| tab-add | 页签新增时触发，name参数为新页签的名字,打开的新页签处于立即激活状态 | name |
| tab-close | 页签关闭时触发，name参数为关闭的页签的名字 | name |

### Methods

`TTabs`，`TDTabs`和`TFlatTabs`组件都具有如下方法：

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| changeTab | 切换到指定页签项（入参为指定页签的标题名） | name |

`TDTabs`组件特有方法如下：

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| addTab | 新增一个页签，data为新页签数据，Object类型，必须有name属性，且name不可与其他页签相同 | data |
| closeTab | 关闭一个页签，data为要关闭的 页签数据，Object类型，必须有name属性 | data |

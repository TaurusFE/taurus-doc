<script>
import { TSpeechBubble, TSpeechBubbleFilter, TSpeechBubbleFilterTree } from 'ai-taurus-desktop';
export default {
  components: {
    TSpeechBubble,
    TSpeechBubbleFilter,
    TSpeechBubbleFilterTree
  },
  data: function () {
    return {
      checkedValue: '',
      checkedTreeValue: '',
      items: [
        {
          label: 'item1',
          checked: false,
          value: 'value1',
          pid: '',
          id: 1
        },
        {
          label: 'item2',
          checked: false,
          value: 'value2',
          pid: 1,
          id: 2,
          count: 7
        },
        {
          label: 'item3',
          checked: false,
          value: 'value3',
          pid: 1,
          id: 3,
          count: 7
        },
        {
          label: 'item4',
          checked: true,
          value: 'value4',
          pid: '',
          id: 4,
          count: 0
        },
        {
          label: 'item5',
          checked: true,
          value: 'value5',
          pid: '',
          id: 5,
          count: 7
        },
        {
          label: 'item6',
          checked: true,
          value: 'value6',
          pid: 4,
          id: 6,
          count: 7
        },
        {
          label: 'item7',
          checked: true,
          value: 'value7',
          pid: 4,
          id: 7,
          count: 7
        }
      ]
    };
  },
  methods: {
    showExportMore () {
      this.$refs.exportSpeechBubble.open();
    },
    openEvent () {
      console.log('speech bubble is opend');
    },
    closeEvent () {
      console.log('speech bubble is closed');
    },
    openSpeechBubble (type) {
      var ref;
      if (type === 'large') {
        ref = this.$refs.speechBubbleLarge;
      } else if (type === 'small') {
        ref = this.$refs.speechBubbleSmall;
      } else if (type === 'filter-large') {
        ref = this.$refs.speechBubbleFilterLarge;
      } else if (type === 'tree-large') {
        ref = this.$refs.largeSpeechBubbleTree;
      }
      if (ref.isShow) {
        ref.close();
      } else {
        ref.open();
      }
    },
    buttonClickEvent () {
      console.log('speech bubble button click');
    }
  }
};
</script>

## Speech Bubble组件

Speech Bubble是一个类似下拉框的组件集，它包括`TSpeechBubble`,`TSpeechBubbleFilter`,`TSpeechBubbleFilterTree`三个组件。它的下拉内容可以定制。

### 基本用法

#### **下拉框风格**

:::demo

```html
<template>
  <div class="form-row">
    <button id="btnShowExportMore" @click="showExportMore" class="button button--default button--small" role="button" data-toggle="dropdown">
      <span class="button__label icon--right icon-arrow-down">
        <span class="button__text">
          Export(1)
        </span>
      </span>
    </button>
    <t-speech-bubble size="large" title="Title (ComboBox)" target="btnShowExportMore" ref="exportSpeechBubble">
      <ul>
        <li><a>Current Page</a></li>
        <li><a>All Pages</a></li>
      </ul>
    </t-speech-bubble>
  </div>
</template>
<script>
import { TSpeechBubble } from 'ai-taurus-desktop';
export default {
  components: {
    TSpeechBubble
  }
  methods: {
    showExportMore () {
      this.$refs.exportSpeechBubble.open();
    }
  }
};
</script>
```

:::
#### **尺寸**

:::demo

```html
<template>
  <div>
    <div class="form-row">
      <button id="btnShowLarge" @click="openSpeechBubble('large')" class="button  button--small button--action">显示大尺寸下拉框</button>
      <t-speech-bubble v-cloak size="large" title="Title (large)" target="btnShowLarge" ref="speechBubbleLarge" v-on:speech-bubble-opend = "openEvent" v-on:speech-bubble-closed = "closeEvent">
        <h2>Some html content</h2>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
      </t-speech-bubble>
    </div>
    <div class="form-row">
      <button id="btnShowSmall" @click="openSpeechBubble('small')" class="button  button--small button--action">显示小尺寸下拉框</button>
      <t-speech-bubble v-cloak size="small" title="Title (small)" target="btnShowSmall" ref="speechBubbleSmall" v-on:speech-bubble-opend = "openEvent" v-on:speech-bubble-closed = "closeEvent">
        <h2>Some html content</h2>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
        <p>Some paregraph bla bla..</p>
      </t-speech-bubble>
    </div>
  </div>
</template>
<script>
import { TSpeechBubble } from 'ai-taurus-desktop';
export default {
  components: {
    TSpeechBubble
  },
  methods: {
    openEvent () {
      console.log('speech bubble is opend');
    },
    closeEvent () {
      console.log('speech bubble is closed');
    },
    openSpeechBubble (type) {
      var ref;
      if (type === 'large') {
        ref = this.$refs.speechBubbleLarge;
      } else if (type === 'small') {
        ref = this.$refs.speechBubbleSmall;
      }
      if (ref.isShow) {
        ref.close();
      } else {
        ref.open();
      }
    }
  }
};
</script>
```

:::
#### **下拉多选列表**

:::demo

```html
<template>
  <div class="form-row" id = "speechBubbleFilterDivLarge">
    <button id="btnShowSpeechBubbleFilterLarge" @click="openSpeechBubble('filter-large')" class="button button--small button--action">显示下拉多选列表</button>
    <t-speech-bubble-filter size="large" title="Select columns" target="btnShowSpeechBubbleFilterLarge" labels="item1,item2,item3,item4" item-name="SpeechBubbleItem" checked="0,1,0,0" disabled="0,1,0,1" values="This,is,a,test" button-name="OK" ref="speechBubbleFilterLarge" v-model="checkedValue" v-on:speech-bubble-opend = "openEvent" v-on:speech-bubble-closed = "closeEvent" v-on:speech-bubble-button-click = "buttonClickEvent">
    </t-speech-bubble-filter>
    <div class="form-row">
      这是用来演示双向绑定的:<input v-model.trim="checkedValue">
    </div>
  </div>
</template>
<script>
import {TSpeechBubbleFilter } from 'ai-taurus-desktop';
export default {
  components: {
    TSpeechBubbleFilter
  },
  data: function () {
    return {
      checkedValue: ''
    };
  },
  methods: {
    openEvent () {
      console.log('speech bubble is opend');
    },
    closeEvent () {
      console.log('speech bubble is closed');
    },
    openSpeechBubble (type) {
      var ref = this.$refs.speechBubbleFilterLarge;
      if (ref.isShow) {
        ref.close();
      } else {
        ref.open();
      }
    },
    buttonClickEvent () {
      console.log('speech bubble button click');
    }
  }
};
</script>
```

:::
#### **树形下拉框**

:::demo

```html
<template>
  <div class="form-row" id = "speechBubbleDivLargeTree">
    <button id="btnShowSpeechBubbleLargeTree" @click="openSpeechBubble('tree-large')" class="button button--small button--action">显示下拉树形列表</button>
    <t-speech-bubble-filter-tree size="large" title="Title (Tree)" target="btnShowSpeechBubbleLargeTree" item-name="SpeechBubbleCheck" button-name="OK" :items="items" ref="largeSpeechBubbleTree" :model-value="checkedTreeValue" v-model="checkedTreeValue"
    v-on:speech-bubble-opend = "openEvent" v-on:speech-bubble-closed = "closeEvent" v-on:speech-bubble-button-click = "buttonClickEvent">
    </t-speech-bubble-filter-tree>
    <div class="form-row">
      这是用来演示双向绑定的:<input v-model.trim="checkedTreeValue">
    </div>
  </div>
</template>
<script>
import { TSpeechBubbleFilterTree } from 'ai-taurus-desktop';
export default {
  components: {
    TSpeechBubbleFilterTree
  },
  data: function () {
    return {
      checkedTreeValue: '',
      items: [
        {
          label: 'item1',
          checked: false,
          value: 'value1',
          pid: '',
          id: 1
        },
        {
          label: 'item2',
          checked: false,
          value: 'value2',
          pid: 1,
          id: 2,
          count: 7
        },
        {
          label: 'item3',
          checked: false,
          value: 'value3',
          pid: 1,
          id: 3,
          count: 7
        },
        {
          label: 'item4',
          checked: true,
          value: 'value4',
          pid: '',
          id: 4,
          count: 0
        },
        {
          label: 'item5',
          checked: true,
          value: 'value5',
          pid: '',
          id: 5,
          count: 7
        },
        {
          label: 'item6',
          checked: true,
          value: 'value6',
          pid: 4,
          id: 6,
          count: 7
        },
        {
          label: 'item7',
          checked: true,
          value: 'value7',
          pid: 4,
          id: 7,
          count: 7
        }
      ]
    };
  },
  methods: {
    showExportMore () {
      this.$refs.exportSpeechBubble.open();
    },
    openEvent () {
      console.log('speech bubble is opend');
    },
    closeEvent () {
      console.log('speech bubble is closed');
    },
    openSpeechBubble (type) {
      var ref = this.$refs.largeSpeechBubbleTree;
      if (ref.isShow) {
        ref.close();
      } else {
        ref.open();
      }
    },
    buttonClickEvent () {
      console.log('speech bubble button click');
    }
  }
};
</script>
```

:::
### Attributes

下面的属性是`TSpeechBubble`,`TSpeechBubbleFilter`,`TSpeechBubbleFilterTree`三个组件共有属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| target | 调用speech-bubble的组件id | String  | - | - |
| size | 组件尺寸 | String | small\|large | large |
| title | 标题名称 | String | - | 'Speech Bubble' |
| showClose | 是否显示关闭按钮 | String\|Boolean | true\|false | true |

下面的属性是`TSpeechBubbleFilter`组件特有属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| itemName | 多选框的name属性 | String | - | - |
| buttonName | 按钮名称 | String | - | 'Update' |
| labels | 设置checkbox的label（支持传入'item,item1,item2'格式字符串） | String\|Array | - | 'Untitled' |
| disabled | checkbox的disabled属性设置（支持传入'0,1,2'格式字符串） | String\|Array | - | '0' |
| values | checkbox的value （支持传入'0,1,2'格式字符串） | String\|Array | - | - |
| checked | checkbox的checked属性设置 （支持传入'0,1,2'格式字符串） | String\|Array | - | '0' |
| modelValue | 用来做双向绑定的入参传值 | Number | - | - |

下面的属性是`TSpeechBubbleFilterTree`组件特有属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| itemName | 多选框的name属性 | String | - | - |
| buttonName | 按钮名称 | String | - | 'Update' |
| items | 列表数据 | Array | - | - |
| modelValue | 用来做双向绑定的入参传值 | Number | - | - |

其中`items`属性对应的数据格式参看以下示例：

```js
[
  {
    label: 'item4',  // 展示字段
    checked: true,   // 是否选中
    disabled: false, // 是否可选
    value: 'value4', // 值
    pid: '',         // 父节点ID
    id: 4,           // 节点ID
    count: 7         // 数量
  }
]
```

### Events

下面的事件是`TSpeechBubble`,`TSpeechBubbleFilter`,`TSpeechBubbleFilterTree`三个组件共有事件：

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| speech-bubble-opend | 显示提示框时触发 | - |
| speech-bubble-closed | 关闭提示框时触发 | - |

下面的事件是`TSpeechBubbleFilter`,`TSpeechBubbleFilterTree`两个组件特有事件：

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| speech-bubble-button-click | 提示框按钮单击时触发 | - |

### Methods

下面的方法是`TSpeechBubble`,`TSpeechBubbleFilter`,`TSpeechBubbleFilterTree`三个组件共有方法：

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| open |显示提示框 | - |
| close | 关闭提示框 | - |

下面的方法是`TSpeechBubbleFilter`,`TSpeechBubbleFilterTree`两个组件特有方法：

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| getCheckItem | 获取复选框为选中的数据label和value值 | - |

### Data

| 数据属性名称 | 说明 | 类型 |
| ------- | ---- | ---- |
| isShow | 下拉框显示状态 | Boolean |

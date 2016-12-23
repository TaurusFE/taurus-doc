<script>
import { TSelectDropdown, TSubDropdown } from 'aii-taurus';
export default {
  components: {
    TSelectDropdown,
    TSubDropdown
  },
  data () {
    return {
      subDropDownData: [
        {
          'baseInfo': 'Jannik Mørch Søndergaard',
          'detailInfo': 'Jannik Mørch Søndergaard (32108000158121)',
          'ico': 'icon-people',
          'id': 1
        },
        {
          'baseInfo': 'Jannik Zhang',
          'detailInfo': 'Jannik Zhang (32108000158122)',
          'ico': 'icon-people',
          'id': 2
        },
        {
          'baseInfo': 'Denamik Mick Segement',
          'detailInfo': 'Denamik Mick Segement (32108000158123)',
          'ico': 'icon-people',
          'id': 3
        },
        {
          'baseInfo': 'Peter Mutomubo James',
          'detailInfo': 'Peter Mutomubo James (32108000158124)',
          'ico': 'icon-people',
          'id': 4
        },
        {
          'baseInfo': 'Søndergaard Anthony Gregory',
          'detailInfo': 'Søndergaard Anthony Gregory (32108000158125)',
          'ico': 'icon-people',
          'id': 5
        },
        {
          'baseInfo': 'Tim Duncan',
          'detailInfo': 'Tim Duncan (32108000158126)',
          'ico': 'icon-people',
          'id': 6
        },
        {
          'baseInfo': 'Zhou Qi',
          'detailInfo': 'Zhou Qi (32108000158127)',
          'ico': 'icon-people',
          'id': 7
        },
        {
          'baseInfo': 'Kevin Durrant',
          'detailInfo': 'Kevin Durrant (32108000158128)',
          'ico': 'icon-people',
          'id': 8
        },
        {
          'baseInfo': 'Paul Gregory',
          'detailInfo': 'Paul Gregory (32108000158129)',
          'ico': 'icon-people',
          'id': 9
        },
        {
          'baseInfo': 'Yi Jian lian',
          'detailInfo': 'Yi Jian lian (321080001581210)',
          'ico': 'icon-people',
          'id': 10
        },
        {
          'baseInfo': 'Lebron James',
          'detailInfo': 'Lebron James (321080001581211)',
          'ico': 'icon-people',
          'id': 11
        }
      ],
      subDropReloadData: [
        {
          'baseInfo': 'Leon Peng',
          'detailInfo': 'Leon Peng (32108000158121)',
          'ico': 'icon-people',
          'id': 1
        },
        {
          'baseInfo': 'Mike Ke',
          'detailInfo': 'Mike Ke (32108000158122)',
          'ico': 'icon-people',
          'id': 2
        },
        {
          'baseInfo': 'Greg Zhang',
          'detailInfo': 'Greg Zhang (32108000158123)',
          'ico': 'icon-people',
          'id': 3
        },
        {
          'baseInfo': 'Raymond Yuan',
          'detailInfo': 'Raymond Yuan (32108000158124)',
          'ico': 'icon-people',
          'id': 4
        },
        {
          'baseInfo': 'Jay Chou',
          'detailInfo': 'Jay Chou (32108000158125)',
          'ico': 'icon-people',
          'id': 5
        },
        {
          'baseInfo': 'Yao Ming',
          'detailInfo': 'Yao Ming (32108000158126)',
          'ico': 'icon-people',
          'id': 6
        },
        {
          'baseInfo': 'Zhou Qi',
          'detailInfo': 'Zhou Qi (32108000158127)',
          'ico': 'icon-people',
          'id': 7
        },
        {
          'baseInfo': 'Kevin Durrant',
          'detailInfo': 'Kevin Durrant (32108000158128)',
          'ico': 'icon-people',
          'id': 8
        },
        {
          'baseInfo': 'Paul Gregory',
          'detailInfo': 'Paul Gregory (32108000158129)',
          'ico': 'icon-people',
          'id': 9
        }
      ],
      selCurrentValue: 0,
      // 初始化组件数据
      selDropDownData: [
        {
          'text': 'Push-Communication',
          'id': 1
        },
        {
          'text': 'Trouble-Ticket',
          'id': 2
        },
        {
          'text': 'Campaign',
          'id': 3
        },
        {
          'text': 'Customer-Management',
          'id': 4
        },
        {
          'text': 'C3',
          'id': 5
        }
      ],
      // 重载reload组件数据
      selDropReloadData: [
        {
          'text': 'Greg Zhang',
          'id': 1
        },
        {
          'text': 'Mike Bibby',
          'id': 2
        },
        {
          'text': 'Jay Chou',
          'id': 3
        },
        {
          'text': 'Amy Sun',
          'id': 4
        },
        {
          'text': 'Paul Gregory',
          'id': 5
        },
        {
          'text': 'Joan Wu',
          'id': 6
        },
        {
          'text': 'Lebron James',
          'id': 7
        }
      ],
      selRename: {
        label: 'text',
        value: 'id'
      },
      rename: {
        icon: 'ico',
        value: 'id'
      },
      subCurrentValue: ''
    };
  },
  methods: {
    // 重载组件方法
    reloadSelDropDown: function () {
      this.$refs.mySelectDropdown.reload(this.$data.selDropReloadData);
    },
    // 获取组件当前选择值的方法
    getSelDropDownValue: function () {
      alert(this.$refs.mySelectDropdown.getValue());
    },
    // 获取组件当前选中文字的方法
    getSelDropDownText: function () {
      alert(this.$refs.mySelectDropdown.getText());
    },
    // 设置组件选中值的方法
    setSelDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySelectDropdown.setValue(value);
    },
    // 清除组件选中值的方法
    clearDropDown: function () {
      this.$refs.mySelectDropdown.clear();
    },
    // 启用组件的方法
    enableDropDown: function () {
      this.$refs.mySelectDropdown.enable();
    },
    // 禁用组件的方法
    disableDropDown: function () {
      this.$refs.mySelectDropdown.disable();
    },
    // 组件选中值变化时触发此方法
    onSelectValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    // 在显示下拉Panel时触发此方法
    onSelectShowPanel: function () {
      console.log('Panel Show');
    },
    // 在隐藏下拉Panel时触发此方法
    onSelectHidePanel: function () {
      console.log('Panel Hide');
    },
    setSelModelValue: function () {
      this.selCurrentValue = 5;
    },
    reloadSubDropDown: function () {
      this.$refs.mySubDropdown.reload(this.$data.subDropReloadData);
    },
    getSubDropDownValue: function () {
      alert(this.$refs.mySubDropdown.getValue());
    },
    getSubDropDownText: function () {
      alert(this.$refs.mySubDropdown.getText());
    },
    setSubDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySubDropdown.setValue(value);
    },
    clearSubDropDown: function () {
      this.$refs.mySubDropdown.clear();
    },
    disableSubDropDown: function () {
      this.$refs.mySubDropdown.disable();
    },
    enableSubDropDown: function () {
      this.$refs.mySubDropdown.enable();
    },
    onSubValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    onSubShowPanel: function () {
      console.log('Panel Show');
    },
    onSubHidePanel: function () {
      console.log('Panel Hide');
    },
    setSubModelValue: function () {
      this.subCurrentValue = 6;
    }
  },
  watch: {
    selCurrentValue (newValue) {
      console.log('***************');
      console.log(newValue);
    },
    subCurrentValue (newValue) {
      console.log('***************');
      console.log(newValue);
    }
  }
};
</script>

## Dropdown组件

Dropdown是一个下拉框组件集，它包括`TSelectDropdown`和`TSubDropdown`两个组件。

### 基本用法

#### **TSelectDropdown**

:::demo Select Dropdown是默认提供的下拉框组件

```html
<template>
  <div>
    <div class="form-row">
      <button @click="reloadSelDropDown" class="button button--small button--action">重载下拉框数据(reload)</button>
      <button @click="getSelDropDownValue" class="button button--small button--action">获取选中的值(getValue)</button>
      <button @click="getSelDropDownText" class="button button--small button--action">获取选中的文字(getText)</button>
      <button @click="setSelDropDownValue" class="button button--small button--action">设置下拉框的值(setValue)</button>
    </div>
    <div class="form-row">
      <button @click="clearDropDown" class="button button--small button--action">清除下拉框的值(clear)</button>
      <button @click="disableDropDown" class="button button--small button--action">禁用(disable)</button>
      <button @click="enableDropDown" class="button button--small button--action">启用(enable)</button>
      <button @click="setSelModelValue" class="button button--small button--action">(setSelModelValue (5))</button>
    </div>
    <div style="max-width: 360px;margin: 50px auto 0;">
      <t-select-dropdown :list="selDropDownData" :rename="selRename" :default-value="3" :disabled="false" v-model="selCurrentValue" @on-value-change="onSelectValueChange" @on-show-panel="onSelectShowPanel" @on-hide-panel="onSelectHidePanel" ref="mySelectDropdown"></t-select-dropdown>
    </div>
  </div>
</template>
<script>
import { TSelectDropdown } from 'aii-taurus';
export default {
  components: {
    TSelectDropdown
  },
  data: {
    selCurrentValue: 0,
    // 初始化组件数据
    selDropDownData: [
      {
        'text': 'Push-Communication',
        'id': 1
      },
      {
        'text': 'Trouble-Ticket',
        'id': 2
      },
      {
        'text': 'Campaign',
        'id': 3
      },
      {
        'text': 'Customer-Management',
        'id': 4
      },
      {
        'text': 'C3',
        'id': 5
      }
    ],
    // 重载reload组件数据
    selDropReloadData: [
      {
        'text': 'Greg Zhang',
        'id': 1
      },
      {
        'text': 'Mike Bibby',
        'id': 2
      },
      {
        'text': 'Jay Chou',
        'id': 3
      },
      {
        'text': 'Amy Sun',
        'id': 4
      },
      {
        'text': 'Paul Gregory',
        'id': 5
      },
      {
        'text': 'Joan Wu',
        'id': 6
      },
      {
        'text': 'Lebron James',
        'id': 7
      }
    ],
    selRename: {
      label: 'text',
      value: 'id'
    }
  },
  methods: {
    // 重载组件方法
    reloadSelDropDown: function () {
      this.$refs.mySelectDropdown.reload(this.$data.selDropReloadData);
    },
    // 获取组件当前选择值的方法
    getSelDropDownValue: function () {
      alert(this.$refs.mySelectDropdown.getValue());
    },
    // 获取组件当前选中文字的方法
    getSelDropDownText: function () {
      alert(this.$refs.mySelectDropdown.getText());
    },
    // 设置组件选中值的方法
    setSelDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySelectDropdown.setValue(value);
    },
    // 清除组件选中值的方法
    clearDropDown: function () {
      this.$refs.mySelectDropdown.clear();
    },
    // 启用组件的方法
    enableDropDown: function () {
      this.$refs.mySelectDropdown.enable();
    },
    // 禁用组件的方法
    disableDropDown: function () {
      this.$refs.mySelectDropdown.disable();
    },
    // 组件选中值变化时触发此方法
    onSelectValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    // 在显示下拉Panel时触发此方法
    onSelectShowPanel: function () {
      console.log('Panel Show');
    },
    // 在隐藏下拉Panel时触发此方法
    onSelectHidePanel: function () {
      console.log('Panel Hide');
    },
    setSelModelValue: function () {
      this.selCurrentValue = 5;
    }
  },
  watch: {
    selCurrentValue (newValue) {
      console.log('***************');
      console.log(newValue);
    }
  }
});
</script>
```

:::
#### **TSubDropdown**

:::demo Subscription Dropdown组件是专供定制化的下拉框。

```html
<template>
  <div>
    <div class="form-row">
      <button @click="reloadSubDropDown" class="button button--small button--action">重载下拉框数据(reload)</button>
      <button @click="getSubDropDownValue" class="button button--small button--action">获取选中的值(getValue)</button>
      <button @click="getSubDropDownText" class="button button--small button--action">获取选中的文字(getText)</button>
      <button @click="setSubDropDownValue" class="button button--small button--action">设置下拉框的值(setValue)</button>
    </div>
    <div class="form-row">
      <button @click="clearSubDropDown" class="button button--small button--action">清除下拉框的值(clear)</button>
      <button @click="disableSubDropDown" class="button button--small button--action">禁用(disable)</button>
      <button @click="enableSubDropDown" class="button button--small button--action">启用(enable)</button>
      <button @click="setSubModelValue" class="button button--small button--action">(setSubModelValue (5) )</button>
    </div>
    <div style="max-width: 360px;margin: 50px auto 450px;">
      <t-sub-dropdown :list="subDropDownData" :rename="rename" :disabled="false" :default-value="2" :show-number="8" v-model="subCurrentValue" @on-value-change="onSubValueChange" @on-show-panel="onSubShowPanel" @on-hide-panel="onSubHidePanel" ref="mySubDropdown"></t-sub-dropdown>
    </div>
  </div>
</template>
<script>
import { TSubDropdown } from 'aii-taurus';
export default {
  components: {
    TSubDropdown
  },
  data: {
    subDropDownData: [
      {
        'baseInfo': 'Jannik Mørch Søndergaard',
        'detailInfo': 'Jannik Mørch Søndergaard (32108000158121)',
        'ico': 'icon-people',
        'id': 1
      },
      {
        'baseInfo': 'Jannik Zhang',
        'detailInfo': 'Jannik Zhang (32108000158122)',
        'ico': 'icon-people',
        'id': 2
      },
      {
        'baseInfo': 'Denamik Mick Segement',
        'detailInfo': 'Denamik Mick Segement (32108000158123)',
        'ico': 'icon-people',
        'id': 3
      },
      {
        'baseInfo': 'Peter Mutomubo James',
        'detailInfo': 'Peter Mutomubo James (32108000158124)',
        'ico': 'icon-people',
        'id': 4
      },
      {
        'baseInfo': 'Søndergaard Anthony Gregory',
        'detailInfo': 'Søndergaard Anthony Gregory (32108000158125)',
        'ico': 'icon-people',
        'id': 5
      },
      {
        'baseInfo': 'Tim Duncan',
        'detailInfo': 'Tim Duncan (32108000158126)',
        'ico': 'icon-people',
        'id': 6
      },
      {
        'baseInfo': 'Zhou Qi',
        'detailInfo': 'Zhou Qi (32108000158127)',
        'ico': 'icon-people',
        'id': 7
      },
      {
        'baseInfo': 'Kevin Durrant',
        'detailInfo': 'Kevin Durrant (32108000158128)',
        'ico': 'icon-people',
        'id': 8
      },
      {
        'baseInfo': 'Paul Gregory',
        'detailInfo': 'Paul Gregory (32108000158129)',
        'ico': 'icon-people',
        'id': 9
      },
      {
        'baseInfo': 'Yi Jian lian',
        'detailInfo': 'Yi Jian lian (321080001581210)',
        'ico': 'icon-people',
        'id': 10
      },
      {
        'baseInfo': 'Lebron James',
        'detailInfo': 'Lebron James (321080001581211)',
        'ico': 'icon-people',
        'id': 11
      }
    ],
    subDropReloadData: [
      {
        'baseInfo': 'Leon Peng',
        'detailInfo': 'Leon Peng (32108000158121)',
        'ico': 'icon-people',
        'id': 1
      },
      {
        'baseInfo': 'Mike Ke',
        'detailInfo': 'Mike Ke (32108000158122)',
        'ico': 'icon-people',
        'id': 2
      },
      {
        'baseInfo': 'Greg Zhang',
        'detailInfo': 'Greg Zhang (32108000158123)',
        'ico': 'icon-people',
        'id': 3
      },
      {
        'baseInfo': 'Raymond Yuan',
        'detailInfo': 'Raymond Yuan (32108000158124)',
        'ico': 'icon-people',
        'id': 4
      },
      {
        'baseInfo': 'Jay Chou',
        'detailInfo': 'Jay Chou (32108000158125)',
        'ico': 'icon-people',
        'id': 5
      },
      {
        'baseInfo': 'Yao Ming',
        'detailInfo': 'Yao Ming (32108000158126)',
        'ico': 'icon-people',
        'id': 6
      },
      {
        'baseInfo': 'Zhou Qi',
        'detailInfo': 'Zhou Qi (32108000158127)',
        'ico': 'icon-people',
        'id': 7
      },
      {
        'baseInfo': 'Kevin Durrant',
        'detailInfo': 'Kevin Durrant (32108000158128)',
        'ico': 'icon-people',
        'id': 8
      },
      {
        'baseInfo': 'Paul Gregory',
        'detailInfo': 'Paul Gregory (32108000158129)',
        'ico': 'icon-people',
        'id': 9
      }
    ],
    rename: {
      icon: 'ico',
      value: 'id'
    },
    subCurrentValue: ''
  },
  methods: {
    reloadSubDropDown: function () {
      this.$refs.mySubDropdown.reload(this.$data.subDropReloadData);
    },
    getSubDropDownValue: function () {
      alert(this.$refs.mySubDropdown.getValue());
    },
    getSubDropDownText: function () {
      alert(this.$refs.mySubDropdown.getText());
    },
    setSubDropDownValue: function () {
      var value = prompt('Please enter value', '');
      this.$refs.mySubDropdown.setValue(value);
    },
    clearSubDropDown: function () {
      this.$refs.mySubDropdown.clear();
    },
    disableSubDropDown: function () {
      this.$refs.mySubDropdown.disable();
    },
    enableSubDropDown: function () {
      this.$refs.mySubDropdown.enable();
    },
    onSubValueChange: function (newValue, oldValue) {
      console.log('newValue: ' + newValue);
      console.log('oldValue: ' + oldValue);
    },
    onSubShowPanel: function () {
      console.log('Panel Show');
    },
    onSubHidePanel: function () {
      console.log('Panel Hide');
    },
    setSubModelValue: function () {
      this.subCurrentValue = 6;
    }
  },
  watch: {
    subCurrentValue (newValue) {
      console.log('***************');
      console.log(newValue);
    }
  }
};
</script>
```

:::
### Attributes

`TSelectDropdown`组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| list | 组件初始化所需的数据 | Array | - | [] |
| rename | 如果传入的数据中的key与此项参数默认值的key不一致，需要传入一个对象来重命名数据中的key，保持与参数默认值一致。 | Object  | - | {value: 'value', label: 'label'} |
| placeholder | 组件初始化时默认显示文字\(功能类似Input中的placeholder\) | String | - | 'Please select!' |
| default-value | 组件初始化时的默认值。注：如果list数据中value值类型为string，那么需要用 '' 将值括起来代表字符串。如果是number类型，直接写值即可。 | String\|Number | - | null |
| disabled | 组件初始化时是否禁用 | Boolean | true\|false | false |
| size | 不传值时为标准大小，可传入small | String | 'small'\|'' | - |

`TSubDropdown`组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| list | 组件初始化所需的数据 | Array | - | [] |
| rename | 如果传入的数据中的key与此项参数默认值的key不一致，需要传入一个对象来重命名数据中的key，保持与参数默认值一致。 | Object  | - | {value: 'value',icon: 'icon',base: 'baseInfo',detail: 'detailInfo'} |
| default-value | 组件初始化时的默认值。注：如果list数据中value值类型为string，那么需要用 '' 将值括起来代表字符串。如果是number类型，直接写值即可。 | String\|Number | - | null |
| disabled | 组件初始化时是否禁用 | Boolean | true\|false | false |
| size | 不传值时为标准大小，可传入small | String | 'small'\|'' | - |
| show-number | 初始化时默认显示多少条数据 | Number | 大于等于0的整数 | 6 |

### Events

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| on-value-change | 选中值变化时触发 | newValue, oldValue |
| on-show-panel | 显示下拉Panel时触发 | - |
| on-hide-panel | 隐藏下拉Panel时触发 | - |

### Methods

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| reload | 重载组件数据 (数据结构需与初始化数据保持一致) | data |
| setValue | 设置组件的值 | value |
| getValue | 获取组件的值 | - |
| getText | 获取组件的显示文本 | - |
| clear | 清除组件选中项，恢复初始化状态 | - |
| enable | 启用组件 | - |
| disable | 禁用组件 | - |

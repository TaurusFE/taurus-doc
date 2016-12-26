<script>
  import {TSimpleTable} from 'ai-taurus-desktop';
  let simpleTableTemplate = ' <div> '+
                 '     <h3 class="title--xsmall trailing-border trailer">{{entry.boxTitle}}</h3> '+
                 '     <div class="grid-row"> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         <span class="padding-leader--small">{{entry.boxLabel1}}</span> '+
                 '         <div class="form-checkbox form-checkbox--small"> '+
                 '           <input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-0" value="--some-value--"> '+
                 '           <label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText1}}</label> '+
                 '         </div> '+
                 '       </div> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         <div class="form-item "> '+
                 '           <input id="form-field-simple-with-label-0" type="text" :value="entry.boxInputValue1"> '+
                 '         </div> '+
                 '       </div> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         {{entry.boxLabel2}} '+
                 '         <div class="form-checkbox form-checkbox--small"> '+
                 '           <input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-1" value="--some-value--"> '+
                 '           <label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText2}}</label> '+
                 '         </div> '+
                 '       </div> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         <div class="form-item "> '+
                 '           <input id="form-field-simple-with-label-1" type="text" :value="entry.boxInputValue2"> '+
                 '         </div> '+
                 '       </div> '+
                 '     </div> '+
                 '   </div>  ';
  export default {
    components: {
      TSimpleTable
    },
    data: function () {
    return {
      searchQuery: '',
      boxName: 'simple-table-box',
      tableColumns: [
        {field: 'name', name: 'Name'},
        {field: 'age', name: 'Age'}
      ],
      defaultTableData: [
        {name: 'Aaron', age: '17'},
        {name: 'Marcus', age: '25'},
        {name: 'Edison', age: '38'},
        {name: 'Hiram', age: '41'},
        {name: 'Aaron', age: '16'},
        {name: 'Carter', age: '99'}
      ],
      settingsTableData: [
        {
          item: 'Add child protection',
          state: false,
          reading: '(4,40 kr/mo)',
          tip: 'Click on the switch',
          expanded: false,
          // 以下是自定义数据
          boxTitle: 'Forward calls when1',
          boxLabel1: 'Mobile is off1',
          boxLabel2: 'Pad is off1',
          boxCheckText1: 'Forward to voice mail1',
          boxCheckText2: 'Forward to voice mail21',
          boxInputValue1: 'john1',
          boxInputValue2: 'john21'
        },
        {
          item: 'Pay via mobile',
          state: true,
          reading: '(6,80 kr/mo)',
          tip: 'Click on the switch',
          expanded: true,
          // 以下是自定义数据
          boxTitle: 'Forward calls when2',
          boxLabel1: 'Mobile is off2',
          boxLabel2: 'Pad is off2',
          boxCheckText1: 'Forward to voice mail2',
          boxCheckText2: 'Forward to voice mail22',
          boxInputValue1: 'john2',
          boxInputValue2: 'john22'
        },
        {
          item: 'Buy physical goods',
          state: false,
          reading: '',
          tip: 'Click on the switch',
          expanded: false,
          // 以下是自定义数据
          boxTitle: 'Forward calls when3',
          boxLabel1: 'Mobile is off3',
          boxLabel2: 'Pad is off3',
          boxCheckText1: 'Forward to voice mail3',
          boxCheckText2: 'Forward to voice mail23',
          boxInputValue1: 'john3',
          boxInputValue2: 'john23'
        }
      ]
      };
    },
    created: function () {
      // box下拉区域自定义组件注册
      var _this = this;
      Vue.component('simple-table-box', {
        template: simpleTableTemplate,
        props: ['entry', 'index'],
        data: function () {
          return {
            data: _this.settingsTableData
          };
        },
        methods: {
          onClick: function (value, index) {
            console.log('click.....');
          }
        }
      });
    },
    methods: {
      changeText: function () {
        this.settingsTableData[1].item = 'Hello';
      },
      stateChanged: function (value, index) {
        console.log('value = ' + value + ' ; index = ' + index);
        // 输出当前行数据
        console.log(this.settingsTableData[index].item);
      }
    }
  };
</script>

## simple-Table

简单表格组件

### Default Table

::: demo 需要传入data来设置表格数据，columns来设置表格的列

```html
  <t-simple-table
    ref="myTable"
    :data="defaultTableData"
    :columns="tableColumns"
    :filter-key="searchQuery">
  </t-simple-table>
<script>
import {TSimpleTable} from 'ai-taurus-desktop';

export default {
  components: {
    TSimpleTable
  },
  data: function () {
  return {
    searchQuery: '',
    tableColumns: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'}
    ],
    defaultTableData: [
      {name: 'Aaron', age: '17'},
      {name: 'Marcus', age: '25'},
      {name: 'Edison', age: '38'},
      {name: 'Hiram', age: '41'},
      {name: 'Aaron', age: '16'},
      {name: 'Carter', age: '99'}
    ]
  }
  };
};
</script>
```
:::

### Default Table Small

::: demo size="small"设置成small样式

```html
  <t-simple-table
      :data="defaultTableData"
      :columns="tableColumns"
      size="small">
    </t-simple-table>
<script>
import {TSimpleTable} from 'ai-taurus-desktop';

export default {
  components: {
    TSimpleTable
  },
  data: function () {
  return {
    searchQuery: '',
    tableColumns: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'}
    ],
    defaultTableData: [
      {name: 'Aaron', age: '17'},
      {name: 'Marcus', age: '25'},
      {name: 'Edison', age: '38'},
      {name: 'Hiram', age: '41'},
      {name: 'Aaron', age: '16'},
      {name: 'Carter', age: '99'}
    ]
  }
  };
};
</script>
```
:::



### Zebra Table

::: demo zebra="true"来设置条纹间隔

```html
<t-simple-table
    :data="defaultTableData"
    :columns="tableColumns"
    :filter-key="searchQuery"
    zebra="true">
  </t-simple-table>
<script>
import {TSimpleTable} from 'ai-taurus-desktop';

export default {
  components: {
    TSimpleTable
  },
  data: function () {
  return {
    searchQuery: '',
    tableColumns: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'}
    ],
    defaultTableData: [
      {name: 'Aaron', age: '17'},
      {name: 'Marcus', age: '25'},
      {name: 'Edison', age: '38'},
      {name: 'Hiram', age: '41'},
      {name: 'Aaron', age: '16'},
      {name: 'Carter', age: '99'}
    ]
  }
  };
};
</script>
```
:::

### Line Table

::: demo line="true"来设置每一行底部是否显示横线

```html
<t-simple-table
    :data="defaultTableData"
    :columns="tableColumns"
    :filter-key="searchQuery"
    line="true">
  </t-simple-table>
<script>
import {TSimpleTable} from 'ai-taurus-desktop';

export default {
  components: {
    TSimpleTable
  },
  data: function () {
  return {
    searchQuery: '',
    tableColumns: [
      {field: 'name', name: 'Name'},
      {field: 'age', name: 'Age'}
    ],
    defaultTableData: [
      {name: 'Aaron', age: '17'},
      {name: 'Marcus', age: '25'},
      {name: 'Edison', age: '38'},
      {name: 'Hiram', age: '41'},
      {name: 'Aaron', age: '16'},
      {name: 'Carter', age: '99'}
    ]
  }
  };
};
</script>
```
:::


### Settings Table

::: demo type='settings'吧表格设置成可以自定义行

```html
<t-simple-table
    :data="settingsTableData"
    type='settings'>
  </t-simple-table>
<script>
  import {TSimpleTable} from 'ai-taurus-desktop';

  export default {
    components: {
      TSimpleTable
    },
    data: function () {
    return {
      settingsTableData: [
        {
          item: 'Add child protection',
          state: false,
          reading: '(4,40 kr/mo)',
          tip: 'Click on the switch',
          expanded: false,
          // 以下是自定义数据
          boxTitle: 'Forward calls when1',
          boxLabel1: 'Mobile is off1',
          boxLabel2: 'Pad is off1',
          boxCheckText1: 'Forward to voice mail1',
          boxCheckText2: 'Forward to voice mail21',
          boxInputValue1: 'john1',
          boxInputValue2: 'john21'
        },
        {
          item: 'Pay via mobile',
          state: true,
          reading: '(6,80 kr/mo)',
          tip: 'Click on the switch',
          expanded: true,
          // 以下是自定义数据
          boxTitle: 'Forward calls when2',
          boxLabel1: 'Mobile is off2',
          boxLabel2: 'Pad is off2',
          boxCheckText1: 'Forward to voice mail2',
          boxCheckText2: 'Forward to voice mail22',
          boxInputValue1: 'john2',
          boxInputValue2: 'john22'
        },
        {
          item: 'Buy physical goods',
          state: false,
          reading: '',
          tip: 'Click on the switch',
          expanded: false,
          // 以下是自定义数据
          boxTitle: 'Forward calls when3',
          boxLabel1: 'Mobile is off3',
          boxLabel2: 'Pad is off3',
          boxCheckText1: 'Forward to voice mail3',
          boxCheckText2: 'Forward to voice mail23',
          boxInputValue1: 'john3',
          boxInputValue2: 'john23'
        }
      ]
      };
    }
  };
</script>
```
:::


### Settings Table

::: demo expandable="true"设置表格可以展开

```html
<div class="form-row">
    <button v-on:click="changeText" class="button button--action">改变第二行文本</button>
  </div>
  <t-simple-table
    :data="settingsTableData"
    :box-name="boxName"
    expandable="true"
    type="settings"
    @state-changed="stateChanged">
  </t-simple-table>

<script>
  import {TSimpleTable} from 'ai-taurus-desktop';

  let simpleTableTemplate = ' <div> '+
                 '     <h3 class="title--xsmall trailing-border trailer">{{entry.boxTitle}}</h3> '+
                 '     <div class="grid-row"> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         <span class="padding-leader--small">{{entry.boxLabel1}}</span> '+
                 '         <div class="form-checkbox form-checkbox--small"> '+
                 '           <input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-0" value="--some-value--"> '+
                 '           <label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText1}}</label> '+
                 '         </div> '+
                 '       </div> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         <div class="form-item "> '+
                 '           <input id="form-field-simple-with-label-0" type="text" :value="entry.boxInputValue1"> '+
                 '         </div> '+
                 '       </div> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         {{entry.boxLabel2}} '+
                 '         <div class="form-checkbox form-checkbox--small"> '+
                 '           <input type="checkbox" checked="" name="cbs-disabled-0" id="cbs-disabled-1" value="--some-value--"> '+
                 '           <label class="text--small" for="cbs-disabled-0">{{entry.boxCheckText2}}</label> '+
                 '         </div> '+
                 '       </div> '+
                 '       <div class="col-md-6 trailer"> '+
                 '         <div class="form-item "> '+
                 '           <input id="form-field-simple-with-label-1" type="text" :value="entry.boxInputValue2"> '+
                 '         </div> '+
                 '       </div> '+
                 '     </div> '+
                 '   </div>  ';

  export default {
    components: {
      TSimpleTable
    },
    data: function () {
    return {
      boxName: 'simple-table-box',
      settingsTableData: [
        {
          item: 'Add child protection',
          state: false,
          reading: '(4,40 kr/mo)',
          tip: 'Click on the switch',
          expanded: false,
          // 以下是自定义数据
          boxTitle: 'Forward calls when1',
          boxLabel1: 'Mobile is off1',
          boxLabel2: 'Pad is off1',
          boxCheckText1: 'Forward to voice mail1',
          boxCheckText2: 'Forward to voice mail21',
          boxInputValue1: 'john1',
          boxInputValue2: 'john21'
        },
        {
          item: 'Pay via mobile',
          state: true,
          reading: '(6,80 kr/mo)',
          tip: 'Click on the switch',
          expanded: true,
          // 以下是自定义数据
          boxTitle: 'Forward calls when2',
          boxLabel1: 'Mobile is off2',
          boxLabel2: 'Pad is off2',
          boxCheckText1: 'Forward to voice mail2',
          boxCheckText2: 'Forward to voice mail22',
          boxInputValue1: 'john2',
          boxInputValue2: 'john22'
        },
        {
          item: 'Buy physical goods',
          state: false,
          reading: '',
          tip: 'Click on the switch',
          expanded: false,
          // 以下是自定义数据
          boxTitle: 'Forward calls when3',
          boxLabel1: 'Mobile is off3',
          boxLabel2: 'Pad is off3',
          boxCheckText1: 'Forward to voice mail3',
          boxCheckText2: 'Forward to voice mail23',
          boxInputValue1: 'john3',
          boxInputValue2: 'john23'
        }
      ]
      };
    },
    created: function () {
      // box下拉区域自定义组件注册
      var _this = this;
      Vue.component('simple-table-box', {
        template: simpleTableTemplate,
        props: ['entry', 'index'],
        data: function () {
          return {
            data: _this.settingsTableData
          };
        },
        methods: {
          onClick: function (value, index) {
            console.log('click.....');
          }
        }
      });
    },
    methods: {
      changeText: function () {
        this.settingsTableData[1].item = 'Hello';
      },
      stateChanged: function (value, index) {
        console.log('value = ' + value + ' ; index = ' + index);
        // 输出当前行数据
        console.log(this.settingsTableData[index].item);
      }
    }
  };
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| data | Array | Yes  |  | 表格数据实例数组|
| columns | Array | Yes |  | 表格列名数组|
| boxName | String| No |  | 自定义box的模版对象名字 |
| title | String | No |  | 标题名称 |
| zebra | Boolean | No | false | 是否需要表格内容有条纹间隔显示 |
| line | Boolean | No | false | 表格每一行底部是否显示横线 |
| size | String | No | default | 组件尺寸，small或者default |
| type | String | No | default | 表格类型，settings或者default |
| expandable | Boolean | No | false | 表格的每一行是否可以展开 |

### Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| state-changed | | switcher组件发生变化时触发 |
| dt-toggle-expanded | index, expanded | 展开或者收起表格的行时触发,index为行数,expanded为打开或收起状态 |

### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| toggleStorageBox | index| 展开或者收起表格的行,index为行数|
| sortBy | key | 按照某一字断重新对表格排序,key为字段名 |

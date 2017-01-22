<script>
  import {TTable, TButton} from 'ai-taurus-desktop';

  let dataTableTemplate = ' <div class="container data-table--without-pagination"> '+
                          '       <div class="border--bottom clear padding-whole box--greyed header-grey"> '+
                          '         <div class="grid-row"><h2 class="col-md-6 text-size--19 text-light">{{rowData.subTableTitle}}</h2> '+
                          '           <div class="col-md-6 text--right"> '+
                          '             <div class="mobile-trailer--small display--inline-block mobile-display--block"></div> '+
                          '             <button class="button button--default button--small stretch-mobile toleft--small mobile-toleft--none" '+
                          '                     type="button" @click="toggle(index)"><span class="button__text">Toggle all</span></button> '+
                          '           </div> '+
                          '         </div> '+
                          '       </div> '+
                          '       <div class="dataTables_wrapper no-footer"> '+
                          '         <table  class="table table--without-hover" role="grid"> '+
                          '           <thead> '+
                          '           <tr role="row"> '+
                          '             <th>Account</th> '+
                          '             <th>EAN</th> '+
                          '             <th>Acc.</th> '+
                          '             <th>Payer</th> '+
                          '             <th>Address</th> '+
                          '           </tr> '+
                          '           </thead> '+
                          '           <tbody> '+
                          '           <tr v-for="item in dataList"> '+
                          '             <td>{{item.account}}</td> '+
                          '             <td>{{item.ean}}</td> '+
                          '             <td>{{item.acc}}</td> '+
                          '             <td>{{item.payer}}</td> '+
                          '             <td>{{item.address}}</td> '+
                          '           </tr> '+
                          '           </tbody> '+
                          '         </table> '+
                          '       </div> '+
                          '     </div> ';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              columns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'},
                {field: 'note', name: 'Note', componentId: 'note-component'}
              ],
              simpleColumns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'}
              ],
              scrollColumns: [
                {field: 'name', name: 'Name', fixed: 'left'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'note', name: 'Note', componentId: 'note-component', fixed: 'right'}
              ],
              data: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'}
              ],
              simpleTableData: [
                {name: 'Aaron', age: '17'},
                {name: 'Marcus', age: '25'},
                {name: 'Edison', age: '38'},
                {name: 'Hiram', age: '41'},
                {name: 'Aaron', age: '16'},
                {name: 'Carter', age: '99'}
              ],
              dataTableData: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'}
              ],
              pageData: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
                {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
                {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
                {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
              ]
            },
            table1Setting: {
              mutiSelect: true,
              isSelectable: true,
              withPagination: true,
              zebra: true,
              dataCount: 6,
              pageSize: 3,
              localPage: true,
              fixedOperate: true,
              fixColumn: 'note',
              isShowExpandIcon: false
            }
        };
      },
      created: function () {
        var vm = this;
        Vue.component('my-box-partial', {
          template: dataTableTemplate,
          props: ['rowData', 'index'],
          data: function () {
            return {
              dataList: vm.defaultTable.data
            };
          },
          methods: {
            toggle: function (rowId) {
              vm.defaultTable.data[rowId].expanded = false;
            }
          },
          watch: {
            'rowData.expanded': function (expanded) {
              if (expanded === true) {
                this.dataList = [
                  {account: 1, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 2, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 3, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 4, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 5, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'}
                ];
              }
            }
          }
        });
        debugger;
        Vue.component('note-component', {
          template: '<div><t-button text="button" class="button--action" size="small" @click="onclick(rowData,index)"></t-button><p>This is a note</p><span class="text-size--13"><a href="#">#18988027892</a></span></div>',
          props: ['rowData', 'index'],
          components: {
            TButton
          },
          methods: {
            onclick: function (rowData, rowIndex) {
              alert('rowData:' + JSON.stringify(rowData) + 'rowindex:' + rowIndex);
            }
          }
        });
      },
      methods: {
        // 回调函数
        pageChanged: function (pageNumber, pageSize) {
          console.log('dt-page-changed--pageNumber = ' + pageNumber + ' ; pageSize = ' + pageSize);
        },
        rowChecked: function (rowId) {
          console.log('dt-check--rowId = ' + rowId);
        },
        rowUnchecked: function (rowId) {
          console.log('dt-uncheck--rowId = ' + rowId);
        },
        allRowUnchecked: function () {
          console.log('dt-uncheck-all');
        },
        allRowChecked: function () {
          console.log('dt-check-all');
        },
        dtCheckStateChanged: function () {
          console.log('dt-check-state-changed');
        },
        rowSelected: function (rowId) {
          console.log('dt-select--rowId = ' + rowId);
        },
        rowUnselected: function (rowId) {
          console.log('dt-unselect--rowId = ' + rowId);
        },
        rowClick: function (data) {
          console.log('click');
        },
        toggleExpanded: function (rowId, expanded) {
          console.log('触发toggle自定义区事件');
        },
        dtFixedTableEdit: function (data) {
          console.log('edit');
        },
        dtFixedTableDelete: function (data) {
          console.log('delete');
        },

        setData: function () {
          var data = [
            {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
            {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
            {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
            {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
            {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
            {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
          ];
          this.defaultTable.dataTableData = data;
        },
        removeRow: function () {
          if (this.defaultTable.data.length > 0) {
            this.defaultTable.dataTableData.pop();
          }
        },
        sortSecondColumn: function () {
          this.$refs.dataTable.sortBy('age');
        },
        toggleSortSecondColumn: function () {
          this.$refs.dataTable.toggleSortBy('age');
        },
        changePage: function (pageNumber) {
          this.$refs.paginationTable.changePage(2, 3);
        },
        checkAll: function () {
          this.$refs.multipleTable.checkAll();
        },
        uncheckAll: function () {
          this.$refs.multipleTable.uncheckAll();
        },
        toggleAllChecked: function () {
          this.$refs.multipleTable.toggleAllChecked();
        },
        getChecked: function () {
          var arr = this.$refs.multipleTable.getChecked();
          if (arr.length > 0) {
            alert('第一个勾选行对应的数据中的name属性值为：\n' + arr[0].name);
          } else {
            alert('没有勾选任何行！');
          }
        },
        getCheckedRowIds: function () {
          var arr = this.$refs.multipleTable.getCheckedRowIds();
          if (arr.length > 0) {
            alert('第一个勾选行对应的数据中的行号为：\n' + arr[0]);
          } else {
            alert('没有勾选任何行！');
          }
        },
        checkRow: function () {
          this.$refs.multipleTable.checkRow(1);
        },
        uncheckRow: function () {
          this.$refs.multipleTable.uncheckRow(1);
        },
        toggleCheckedBy: function () {
          this.$refs.multipleTable.toggleCheckedBy(1);
        },
        selectRow: function () {
          this.$refs.selectTable.selectRow(1);
        },
        unselectRow: function () {
          this.$refs.selectTable.unselectRow();
        },
        getSelectedRowId: function () {
          var selectedRowId = this.$refs.selectTable.getSelectedRowId();
          if (selectedRowId === -1) {
            alert('没有选中任何行！');
          } else {
            alert('selectedRowId = ' + selectedRowId);
          }
        },
        getSelected: function () {
          var data = this.$refs.selectTable.getSelected();
          if (data === null) {
            alert('你没有选中任何行！');
          } else {
            alert('当前选中行对应数据的name属性值为：' + data.name);
          }
        },
        toggleBoxBy: function () {
          this.$refs.subsTable.toggleBoxBy(1);
        }
      }
  };
</script>

## Table

表格组件

### Simple Table

:::demo type设置为simple

```html
  <t-table
          type="simple"
          :columns="defaultTable.simpleColumns"
          :table-data="defaultTable.simpleTableData"
          >
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              simpleColumns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'}
              ],
              simpleTableData: [
                {name: 'Aaron', age: '17'},
                {name: 'Marcus', age: '25'},
                {name: 'Edison', age: '38'},
                {name: 'Hiram', age: '41'},
                {name: 'Aaron', age: '16'},
                {name: 'Carter', age: '99'}
              ]
            }
        };
      }
  };
</script>
```
:::

### Small Simple Table

:::demo type设置为simple,size设置为small

```html
  <t-table
          type="simple"
          size="small"
          :columns="defaultTable.simpleColumns"
          :table-data="defaultTable.simpleTableData"
          >
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              simpleColumns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'}
              ],
              simpleTableData: [
                {name: 'Aaron', age: '17'},
                {name: 'Marcus', age: '25'},
                {name: 'Edison', age: '38'},
                {name: 'Hiram', age: '41'},
                {name: 'Aaron', age: '16'},
                {name: 'Carter', age: '99'}
              ]
            }
        };
      }
  };
</script>
```
:::

### Zebra Table

:::demo type设置为simple,zebra设置为true

```html
  <t-table
          type="simple"
          zebra="true"
          :columns="defaultTable.simpleColumns"
          :table-data="defaultTable.simpleTableData"
          >
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              simpleColumns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'}
              ],
              simpleTableData: [
                {name: 'Aaron', age: '17'},
                {name: 'Marcus', age: '25'},
                {name: 'Edison', age: '38'},
                {name: 'Hiram', age: '41'},
                {name: 'Aaron', age: '16'},
                {name: 'Carter', age: '99'}
              ]
            }
        };
      }
  };
</script>
```
:::

### Line Table

:::demo type设置为simple,line设置为true

```html
  <t-table
          type="simple"
          line="true"
          :columns="defaultTable.simpleColumns"
          :table-data="defaultTable.simpleTableData"
          >
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              simpleColumns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'}
              ],
              simpleTableData: [
                {name: 'Aaron', age: '17'},
                {name: 'Marcus', age: '25'},
                {name: 'Edison', age: '38'},
                {name: 'Hiram', age: '41'},
                {name: 'Aaron', age: '16'},
                {name: 'Carter', age: '99'}
              ]
            }
        };
      }
  };
</script>
```
:::

### Data Table

:::demo 需要传入table-data来设置表格数据，columns来设置表格的列

```html
    <div class="form-row">
    <button @click="removeRow" class="button button--action">删除当前页最后一行</button>
    <button @click="setData" class="button button--action">加载数据</button>
    <button @click="sortSecondColumn" class="button button--action">第二列排序</button>
    <button @click="toggleSortSecondColumn" class="button button--action">切换第二列的排序</button>
  </div>
  <t-table
    ref="dataTable"
    :columns="defaultTable.columns"
    :table-data="defaultTable.dataTableData"
    @dt-row-click="rowClick">
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';

  export default {
    components: {
        TTable
      },
      data: function () {
        return {
          defaultTable: {
            columns: [
              {field: 'name', name: 'Name'},
              {field: 'age', name: 'Age'},
              {field: 'note', name: 'Note', componentId: 'note-component'}
            ],
            dataTableData: [
              {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
              {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
              {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'}
            ]
          }
        };
      },
      methods: {
        rowClick: function (data) {
          console.log('click');
        },

        setData: function () {
          var data = [
            {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
            {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
            {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
            {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
            {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
            {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
          ];
          this.defaultTable.dataTableData = data;
        },
        removeRow: function () {
          if (this.defaultTable.data.length > 0) {
            this.defaultTable.dataTableData.pop();
          }
        },
        sortSecondColumn: function () {
          this.$refs.dataTable.sortBy('age');
        },
        toggleSortSecondColumn: function () {
          this.$refs.dataTable.toggleSortBy('age');
        }
      }
  };
</script>
```
:::


### Pagination Table

:::demo 需要传入with-pagination来设置是否分页，ata-count来设置总数据，local-page来设置是否本地分页，page-size来设置每页显示多少行

```html
    <div class="form-row">
    <button @click="changePage" class="button button--action">跳转到第二页</button>
  </div>
  <t-table
    ref="paginationTable"
    :columns="defaultTable.columns"
    :table-data="defaultTable.pageData"
    :with-pagination="table1Setting.withPagination"
    :data-count="table1Setting.dataCount"
    :page-size="table1Setting.pageSize"
    :local-page="table1Setting.localPage"
    @dt-page-changed="pageChanged">
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              columns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'},
                {field: 'note', name: 'Note', componentId: 'note-component'}
              ],
              pageData: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
                {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
                {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
                {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
              ]
            },
            table1Setting: {
              withPagination: true,
              dataCount: 6,
              pageSize: 3,
              localPage: true
            }
        };
      },
      methods: {
        // 回调函数
        pageChanged: function (pageNumber, pageSize) {
          console.log('dt-page-changed--pageNumber = ' + pageNumber + ' ; pageSize = ' + pageSize);
        },

        changePage: function (pageNumber) {
          this.$refs.paginationTable.changePage(2, 3);
        }
      }
  };
</script>
```
:::

### Multiple Select Table

:::demo 需要传入muti-select来设置是否显示复选框

```html
<div class="form-row">
    <button @click="checkAll" class="button button--action">全选</button>
    <button @click="uncheckAll" class="button button--action">取消全选</button>
    <button @click="toggleAllChecked" class="button button--action">切换全选或取消全选</button>
    <button @click="checkRow" class="button button--action">勾选第二行</button>
    <button @click="uncheckRow" class="button button--action">取消勾选第二行</button>
    <button @click="toggleCheckedBy" class="button button--action">切换勾选或取消勾选第二行</button>
    <button @click="getChecked" class="button button--action">获得勾选项数据</button>
    <button @click="getCheckedRowIds" class="button button--action">获得勾选项数据行号</button>
  </div>
  <t-table
    ref="multipleTable"
    :columns="defaultTable.columns"
    :table-data="defaultTable.data"
    :muti-select="table1Setting.mutiSelect"
    @dt-check-all="allRowChecked"
    @dt-uncheck-all="allRowUnchecked"
    @dt-check="rowChecked"
    @dt-uncheck="rowUnchecked"
    @dt-check-state-changed="dtCheckStateChanged">
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              columns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'},
                {field: 'note', name: 'Note', componentId: 'note-component'}
              ],
              data: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'}
              ]
            },
            table1Setting: {
              mutiSelect: true
            }
        };
      },
      methods: {
        // 回调函数
        rowChecked: function (rowId) {
          console.log('dt-check--rowId = ' + rowId);
        },
        rowUnchecked: function (rowId) {
          console.log('dt-uncheck--rowId = ' + rowId);
        },
        allRowUnchecked: function () {
          console.log('dt-uncheck-all');
        },
        allRowChecked: function () {
          console.log('dt-check-all');
        },
        dtCheckStateChanged: function () {
          console.log('dt-check-state-changed');
        },

        checkAll: function () {
          this.$refs.multipleTable.checkAll();
        },
        uncheckAll: function () {
          this.$refs.multipleTable.uncheckAll();
        },
        toggleAllChecked: function () {
          this.$refs.multipleTable.toggleAllChecked();
        },
        getChecked: function () {
          var arr = this.$refs.multipleTable.getChecked();
          if (arr.length > 0) {
            alert('第一个勾选行对应的数据中的name属性值为：\n' + arr[0].name);
          } else {
            alert('没有勾选任何行！');
          }
        },
        getCheckedRowIds: function () {
          var arr = this.$refs.multipleTable.getCheckedRowIds();
          if (arr.length > 0) {
            alert('第一个勾选行对应的数据中的行号为：\n' + arr[0]);
          } else {
            alert('没有勾选任何行！');
          }
        },
        checkRow: function () {
          this.$refs.multipleTable.checkRow(1);
        },
        uncheckRow: function () {
          this.$refs.multipleTable.uncheckRow(1);
        },
        toggleCheckedBy: function () {
          this.$refs.multipleTable.toggleCheckedBy(1);
        }
      }
  };
</script>
```
:::

### Select Table

:::demo 需要传入is-selectable来设置是否显示复选框

```html
<div class="form-row">
    <button @click="selectRow" class="button button--action">选中第二行</button>
    <button @click="unselectRow" class="button button--action">取消选中</button>
    <button @click="getSelectedRowId" class="button button--action">获取当前选中行序号</button>
    <button @click="getSelected" class="button button--action">获取当前选中行</button>
  </div>
  <t-table
    ref="selectTable"
    :columns="defaultTable.columns"
    :table-data="defaultTable.data"
    :is-selectable="table1Setting.isSelectable"
    @dt-select="rowSelected"
    @dt-unselect="rowUnselected">
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              columns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'},
                {field: 'note', name: 'Note', componentId: 'note-component'}
              ],
              data: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'}
              ]
            },
            table1Setting: {
              isSelectable: true
            }
        };
      },
      methods: {
        // 回调函数
        rowSelected: function (rowId) {
          console.log('dt-select--rowId = ' + rowId);
        },
        rowUnselected: function (rowId) {
          console.log('dt-unselect--rowId = ' + rowId);
        },

        selectRow: function () {
          this.$refs.selectTable.selectRow(1);
        },
        unselectRow: function () {
          this.$refs.selectTable.unselectRow();
        },
        getSelectedRowId: function () {
          var selectedRowId = this.$refs.selectTable.getSelectedRowId();
          if (selectedRowId === -1) {
            alert('没有选中任何行！');
          } else {
            alert('selectedRowId = ' + selectedRowId);
          }
        },
        getSelected: function () {
          var data = this.$refs.selectTable.getSelected();
          if (data === null) {
            alert('你没有选中任何行！');
          } else {
            alert('当前选中行对应数据的name属性值为：' + data.name);
          }
        }
      }
  };
</script>
```
:::

### Subscriptions Table

:::demo 需要传入detail-row-component来设置自定义下拉内容

```html
<div class="form-row">
    <button @click="toggleBoxBy" class="button button--action">展开或收起第二行</button>
  </div>
  <t-table
    ref="subsTable"
    :expandable="true"
    detail-row-component="my-box-partial"
    :columns="defaultTable.columns"
    :table-data="defaultTable.data"
    @dt-toggle-expanded="toggleExpanded">
  </t-table>
  <script>
  import {TTable, TButton} from 'ai-taurus-desktop';
  let dataTableTemplate = ' <div class="container data-table--without-pagination"> '+
                          '       <div class="border--bottom clear padding-whole box--greyed header-grey"> '+
                          '         <div class="grid-row"><h2 class="col-md-6 text-size--19 text-light">{{rowData.subTableTitle}}</h2> '+
                          '           <div class="col-md-6 text--right"> '+
                          '             <div class="mobile-trailer--small display--inline-block mobile-display--block"></div> '+
                          '             <button class="button button--default button--small stretch-mobile toleft--small mobile-toleft--none" '+
                          '                     type="button" @click="toggle(index)"><span class="button__text">Toggle all</span></button> '+
                          '           </div> '+
                          '         </div> '+
                          '       </div> '+
                          '       <div class="dataTables_wrapper no-footer"> '+
                          '         <table  class="table table--without-hover" role="grid"> '+
                          '           <thead> '+
                          '           <tr role="row"> '+
                          '             <th>Account</th> '+
                          '             <th>EAN</th> '+
                          '             <th>Acc.</th> '+
                          '             <th>Payer</th> '+
                          '             <th>Address</th> '+
                          '           </tr> '+
                          '           </thead> '+
                          '           <tbody> '+
                          '           <tr v-for="item in dataList"> '+
                          '             <td>{{item.account}}</td> '+
                          '             <td>{{item.ean}}</td> '+
                          '             <td>{{item.acc}}</td> '+
                          '             <td>{{item.payer}}</td> '+
                          '             <td>{{item.address}}</td> '+
                          '           </tr> '+
                          '           </tbody> '+
                          '         </table> '+
                          '       </div> '+
                          '     </div> ';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              columns: [
                {field: 'name', name: 'Name'},
                {field: 'age', name: 'Age'},
                {field: 'note', name: 'Note', componentId: 'note-component'}
              ],
              data: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'}
              ]
            }
        };
      },
      created: function () {
        var vm = this;
        Vue.component('my-box-partial', {
          template: '#self-partial-template',
          props: ['rowData', 'index'],
          data: function () {
            return {
              dataList: vm.defaultTable.data
            };
          },
          methods: {
            toggle: function (rowId) {
              vm.defaultTable.data[rowId].expanded = false;
            }
          },
          watch: {
            'rowData.expanded': function (expanded) {
              if (expanded === true) {
                this.dataList = [
                  {account: 1, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 2, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 3, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 4, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'},
                  {account: 5, ean: 'hello', acc: '000', payer: 'lalala', address: 'asia'}
                ];
              }
            }
          }
        });
        Vue.component('note-component', {
          template: '<div><t-button text="button" class="button--action" size="small" @click="onclick(rowData,index)"></t-button><p>This is a note</p><span class="text-size--13"><a href="#">#18988027892</a></span></div>',
          props: ['rowData', 'index'],
          components: {
            TButton
          },
          methods: {
            onclick: function (rowData, rowIndex) {
              alert('rowData:' + JSON.stringify(rowData) + 'rowindex:' + rowIndex);
            }
          }
        });
      },
      methods: {
        // 回调函数
        toggleExpanded: function (rowId, expanded) {
          console.log('触发toggle自定义区事件');
        },

        toggleBoxBy: function () {
          this.$refs.subsTable.toggleBoxBy(1);
        }
      }
  };
</script>
```
:::

### Fixed Table

:::demo 需要传入is-selectable来设置是否显示复选框

```html
<t-table
    ref="dataTable"
    :columns="defaultTable.scrollColumns"
    :table-data="defaultTable.data">
  </t-table>
  <script>
  import {TTable} from 'ai-taurus-desktop';
  export default {
    components: {
        TTable
      },
      data: function () {
        return {
            defaultTable: {
              scrollColumns: [
                {field: 'name', name: 'Name', fixed: 'left'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'age', name: 'Age'},
                {field: 'note', name: 'Note', componentId: 'note-component', fixed: 'right'}
              ],
              data: [
                {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
                {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'}
              ]
            }
        };
      },
      methods: {
        // 回调函数
        dtFixedTableEdit: function (data) {
          console.log('edit');
        },
        dtFixedTableDelete: function (data) {
          console.log('delete');
        }
      }
  };
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| tableData | Array | Yes  |  | 表格数据实例数组|
| columns | Array | Yes |  | 表格列名数组 其中fixed=true时表明该列为需要固定的列|
| detailRowComponent | String| No |  | 自定义Partial的id |
| withPagination | Boolean| No | false | 是否带分页功能 |
| pageNumber | Number| No | 1 | 当前页数 |
| pageSize | Number| No | 5 | 每页显示的数据行数 |
| localPage | Boolean| No | false | 是否为前端本地分页 |
| dataCount | Number| No | 0 |
实际数据总数，在localPage为false的时候必须设置这个属性 |
| showHeader | Boolean| No | true | 是否显示表头 |
| zebra | Boolean | No | false | 是否需要表格内容有条纹间隔显示 |
| expandable | Boolean | No | false | 表格的每一行是否可以展开 |
| mutiSelect | Boolean| No | false | 是否显示复选框 |
| isSelectable | Boolean| No | false | 是否有行选中的效果和事件 默认关闭 |
| fixedOperate | Boolean| No | false | 是否有操作按钮 默认关闭 |
| isShowExpandIcon | Boolean| No | true | 是否有显示展开按钮 默认开启 |
| line | Boolean | No | false | 表格每一行底部是否显示横线 |
| size | String | No | default | 组件尺寸，small或者default |
| type | String | No | default | 表格类型，settings或者default |

### Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| dt-page-changed | | 翻页时触发|
| dt-check-all | | 全部勾选时触发 |
| dt-uncheck-all | | 取消全部勾选时触发 |
| dt-check | | 勾选时触发 |
| dt-uncheck | | 取消勾选时触发 |
| dt-check-state-changed | | 全部勾选,全部取消勾选,勾选,取消勾选时触发 |
| dt-select | | 选择行时触发 |
| dt-unselect | | 取消选择行时触发 |
| dt-toggle-expanded | | 切换储物箱的展开或收起状态时触发 |
| dt-row-click | | 行点击时触发 |

### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| changePage | pageNumber, pageSize | 切换页面到某一页,pageNumber(Number):当前页数,pageSize(Number):列每页显示的数据行数号|
| toggleBoxBy | rowId | 切换储物箱的展开或收起状态,rowId(Number):行Id|
| toggleSortBy | columnIndex | 按指定列排序，该方法将会在升序和降序之间来回切换,columnIndex(Number):列序号|
| sortBy | sortKey, sortOrder | 按指定列排序，该方法将会在升序和降序之间来回切换,sortKey(String):列code,sortOrder(Number):排序顺序，1为升序；-1为降序|
| toggleAllChecked | | 切换勾选所有复选框勾选状态|
| toggleCheckedBy | rowId | 切换某行复选框勾选状态,rowId(Number):行Id|
| checkAll | fireEvent | 勾选所有显示行,fireEvent(Boolean/undefined):是否触发事件，为true表示触发事件，否则不触发|
| uncheckAll | fireEvent | 勾选所有显示行,fireEvent(Boolean/undefined):是否触发事件，为true表示触发事件，否则不触发|
| checkRow | rowId, fireEvent | 勾选行,rowId(Number):行Id,ireEvent(Boolean/undefined):是否触发事件，为true表示触发事件，否则不触发|
| uncheckRow | rowId, fireEvent | 取消勾选行,rowId(Number):行Id,ireEvent(Boolean/undefined):是否触发事件，为true表示触发事件，否则不触发|
| selectRow | rowId, fireEvent | 选择行,rowId(Number):行Id,ireEvent(Boolean/undefined):是否触发事件，为true表示触发事件，否则不触发|
| unselectRow | rowId, fireEvent | 取消选中行,rowId(Number):行Id,ireEvent(Boolean/undefined):是否触发事件，为true表示触发事件，否则不触发|
| getSelectedRowId | | 获得当前选中行序号|
| getSelected | | 获得选中行数据|
| getChecked | | 获得勾选行数据|
| getCheckedRowIds | | 获得勾选行的行Id|

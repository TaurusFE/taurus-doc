<script>
  import {TDataTable} from 'ai-taurus-desktop';

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
      TDataTable
    },
    data: function () {
      return {
        defaultTable: {
          columns: [
            {field: 'name', name: 'Name'},
            {field: 'age', name: 'Age'},
            {field: 'note', name: 'Note', componentId: 'note-component'}
          ],
          scrollColumns: [
            {field: 'name', name: 'Name', isFixed: true},
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
            {field: 'note', name: 'Note', componentId: 'note-component', isFixed: true}
          ],
          data: [
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
          scrollMutiSelect: false,
          withPagination: true,
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
      Vue.component('note-component', {
        template: '<div><button @click="onclick(rowData,index)">button</button><p>This is a note</p><span class="text-size--13"><a href="#">#18988027892</a></span></div>',
        props: ['rowData', 'index'],
        methods: {
          onclick: function (rowData, rowIndex) {
            alert('rowData:' + JSON.stringify(rowData) + 'rowindex:' + rowIndex);
          }
        }
      });
    },
    methods: {
      setData: function () {
        var data = [
          {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
          {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
          {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
          {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
          {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
          {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
        ];
        this.defaultTable.data = data;
      },
      sortSecondColumn: function () {
        this.$refs.myDataTable.sortBy('age');
      },
      selectedRowId: function () {
        var selectedRowId = this.$refs.myDataTable.selectedRowId();
        if (selectedRowId === -1) {
          alert('没有选中任何行！');
        } else {
          alert('selectedRowId = ' + selectedRowId);
        }
      },
      toggleExpanded: function (rowId, expanded) {
        console.log('触发toggle自定义区事件');
      },
      rowSelected: function (rowId) {
        console.log('dt-select--rowId = ' + rowId);
      },
      rowUnselected: function (rowId) {
        console.log('dt-unselect--rowId = ' + rowId);
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
      pageChanged: function (pageNumber, pageSize) {
        console.log('dt-page-changed--pageNumber = ' + pageNumber + ' ; pageSize = ' + pageSize);
      },
      getChecked: function () {
        var arr = this.$refs.myDataTable.getChecked();
        if (arr.length > 0) {
          alert('第一个勾选行对应的数据中的name属性值为：\n' + arr[0].name);
        } else {
          alert('没有勾选任何行！');
        }
      },
      removeRow: function () {
        var data = this.$refs.myDataTable.tableDataCache;
        if (data.length > 0) {
          data.pop();
        }
      },
      dtFixedTableEdit: function (data) {
        console.log('edit');
      },
      dtFixedTableDelete: function (data) {
        console.log('delete');
      },
      rowClick: function (data) {
        console.log('click');
      }
    }
  };
</script>

## Data-Table

表格组件

### Data Table

:::demo 需要传入table-data来设置表格数据，columns来设置表格的列

```html
    <div class="form-row">
      <button @click="sortSecondColumn" class="button button--action">第二列排序</button>
      <button @click="getChecked" class="button button--action">获得勾选项数据</button>
      <button @click="removeRow" class="button button--action">删除当前页最后一行</button>
      <button @click="setData" class="button button--action">加载数据</button>
    </div>
    <t-data-table
      ref="myDataTable"
      :columns="defaultTable.columns"
      :table-data="defaultTable.data"
      :muti-select="table1Setting.mutiSelect"
      :with-pagination="table1Setting.withPagination"
      :data-count="table1Setting.dataCount"
      :page-size="table1Setting.pageSize"
      :local-page="table1Setting.localPage"
      :fixed-operate="table1Setting.fixedOperate"
      @dt-check-all="allRowChecked"
      @dt-uncheck-all="allRowUnchecked"
      @dt-check="rowChecked"
      @dt-uncheck="rowUnchecked"
      @dt-page-changed="pageChanged"
      @dt-select="rowSelected"
      @dt-unselect="rowUnselected"
      @dt-row-click="rowClick"
      v-on:dt-fixed-table-edit="dtFixedTableEdit"
      v-on:dt-fixed-table-delete="dtFixedTableDelete">
    </t-data-table>
  <script>
    import {TDataTable} from 'ai-taurus-desktop';
  export default {
    components: {
      TDataTable
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
            {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
            {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
            {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
            {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
          ]
        },
        table1Setting: {
          mutiSelect: true,
          scrollMutiSelect: false,
          withPagination: true,
          dataCount: 6,
          pageSize: 3,
          localPage: true,
          fixedOperate: true,
          fixColumn: 'note',
          isShowExpandIcon: false
        }
      };
    },
    methods: {
      setData: function () {
        var data = [
          {name: '<a>Aaron</a>', age: '17', note: 'This is a note', phoneNumber: '#18988027892', subTableTitle: 'Sub Table T1', account: '123412341', ean: '55555551', acc: 'Account-1', payer: 'Payer of Account-1', address: '324235345 Philadelfia'},
          {name: 'Marcus', age: '25', note: 'This is a note.', subTableTitle: 'Sub Table T2', account: '123412', ean: '55555552', acc: 'Account-2', payer: 'Payer of Account-2', address: '2000000 Philadelfia'},
          {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
          {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
          {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
          {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
        ];
        this.defaultTable.data = data;
      },
      sortSecondColumn: function () {
        this.$refs.myDataTable.sortBy('age');
      },
      rowSelected: function (rowId) {
        console.log('dt-select--rowId = ' + rowId);
      },
      rowUnselected: function (rowId) {
        console.log('dt-unselect--rowId = ' + rowId);
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
      pageChanged: function (pageNumber, pageSize) {
        console.log('dt-page-changed--pageNumber = ' + pageNumber + ' ; pageSize = ' + pageSize);
      },
      getChecked: function () {
        var arr = this.$refs.myDataTable.getChecked();
        if (arr.length > 0) {
          alert('第一个勾选行对应的数据中的name属性值为：\n' + arr[0].name);
        } else {
          alert('没有勾选任何行！');
        }
      },
      removeRow: function () {
        var data = this.$refs.myDataTable.tableDataCache;
        if (data.length > 0) {
          data.pop();
        }
      },
      dtFixedTableEdit: function (data) {
        console.log('edit');
      },
      dtFixedTableDelete: function (data) {
        console.log('delete');
      },
      rowClick: function (data) {
        console.log('click');
      }
    }
  };

  </script>
```
:::

### Scroll Table

:::demo 当列数足够多时会出现滚动条

```html
    <t-data-table
          ref="myDataTable"
          :columns="defaultTable.scrollColumns"
          :table-data="defaultTable.data"
          :muti-select="table1Setting.scrollMutiSelect"
          :with-pagination="table1Setting.withPagination"
          :data-count="table1Setting.dataCount"
          :page-size="table1Setting.pageSize"
          :local-page="table1Setting.localPage"
          :fixed-operate="table1Setting.fixedOperate"
          @dt-check-all="allRowChecked"
          @dt-uncheck-all="allRowUnchecked"
          @dt-check="rowChecked"
          @dt-uncheck="rowUnchecked"
          @dt-page-changed="pageChanged"
          @dt-select="rowSelected"
          @dt-unselect="rowUnselected"
          @dt-row-click="rowClick"
          v-on:dt-fixed-table-edit="dtFixedTableEdit"
          v-on:dt-fixed-table-delete="dtFixedTableDelete">
        </t-data-table>
<script>
    import {TDataTable} from 'ai-taurus-desktop';

     export default {
         components: {
           TDataTable
         },
         data: function () {
           return {
             defaultTable: {
               scrollColumns: [
                 {field: 'name', name: 'Name', isFixed: true},
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
                 {field: 'note', name: 'Note', componentId: 'note-component', isFixed: true}
               ],
               data: [
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
               scrollMutiSelect: false,
               withPagination: true,
               dataCount: 6,
               pageSize: 3,
               localPage: true,
               fixedOperate: true,
               fixColumn: 'note',
               isShowExpandIcon: false
             }
           };
         },
         methods: {
           rowSelected: function (rowId) {
             console.log('dt-select--rowId = ' + rowId);
           },
           rowUnselected: function (rowId) {
             console.log('dt-unselect--rowId = ' + rowId);
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
           pageChanged: function (pageNumber, pageSize) {
             console.log('dt-page-changed--pageNumber = ' + pageNumber + ' ; pageSize = ' + pageSize);
           },
           getChecked: function () {
             var arr = this.$refs.myDataTable.getChecked();
             if (arr.length > 0) {
               alert('第一个勾选行对应的数据中的name属性值为：\n' + arr[0].name);
             } else {
               alert('没有勾选任何行！');
             }
           },
           removeRow: function () {
             var data = this.$refs.myDataTable.tableDataCache;
             if (data.length > 0) {
               data.pop();
             }
           },
           dtFixedTableEdit: function (data) {
             console.log('edit');
           },
           dtFixedTableDelete: function (data) {
             console.log('delete');
           },
           rowClick: function (data) {
             console.log('click');
           }
         }
       };
</script>
```
:::

### Subscriptions Table

:::demo 变量dataTableTemplate也可以用<template id="data-table-template">标签或者<script type="text/x-template" id="data-table-template">替代，入参传入'#data-table-template'即可。

```html
    <t-data-table
          ref="mySubsTable"
          :expandable="true"
          detail-row-component="my-box-partial"
          :muti-select="false"
          :columns="defaultTable.columns"
          :table-data="defaultTable.data"
          :fixed-operate="table1Setting.fixedOperate"
          @dt-toggle-expanded="toggleExpanded">
        </t-data-table>
<script>
    import {TDataTable} from 'ai-taurus-desktop';

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
          TDataTable
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
                {name: 'Edison (Error!)', age: '38', error: true, subTableTitle: 'Sub Table T3', account: '1234123', ean: '55555553', acc: 'Account-3', payer: 'Payer of Account-3', address: '30000 Philadelfia'},
                {name: 'Hiram', age: '41', note: 'This is a note.', phoneNumber: '#18900000000', subTableTitle: 'Sub Table T4', account: '12', ean: '55555554', acc: 'Account-4', payer: 'Payer of Account-4', address: '400000 Philadelfia'},
                {name: 'Aaron', age: '16', expanded: true, subTableTitle: 'Sub Table T5', account: '1234', ean: '55555555', acc: 'Account-5', payer: 'Payer of Account-5', address: '500000 Philadelfia'},
                {name: 'Carter', age: '99', subTableTitle: 'Sub Table T6', account: '123412340', ean: '55555556', acc: 'Account-6', payer: 'Payer of Account-6', address: '600000 Philadelfia'}
              ]
            },
            table1Setting: {
              mutiSelect: true,
              scrollMutiSelect: false,
              withPagination: true,
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
          Vue.component('note-component', {
            template: '<div><button @click="onclick(rowData,index)">button</button><p>This is a note</p><span class="text-size--13"><a href="#">#18988027892</a></span></div>',
            props: ['rowData', 'index'],
            methods: {
              onclick: function (rowData, rowIndex) {
                alert('rowData:' + JSON.stringify(rowData) + 'rowindex:' + rowIndex);
              }
            }
          });
        },
        methods: {
          toggleExpanded: function (rowId, expanded) {
            console.log('触发toggle自定义区事件');
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
| dataCount | Number| No | 0 | 实际数据总数，在localPage为false的时候必须设置这个属性 |
| zebra | Boolean | No | false | 是否需要表格内容有条纹间隔显示 |
| expandable | Boolean | No | false | 表格的每一行是否可以展开 |
| mutiSelect | Boolean| No | true | 是否显示复选框 |
| isSelectable | Boolean| No | false | 是否有行选中的效果和事件 默认关闭 |
| fixedOperate | Boolean| No | false | 是否有操作按钮 默认关闭 |
| isShowExpandIcon | Boolean| No | true | 是否有显示展开按钮 默认关闭 |

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
| dt-fixed-table-edit | | 操作区域点击编辑按钮时触发 |
| dt-fixed-table-delete | | 操作区域点击删除按钮时触发 |

### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| pageChanged | pageNumber, pageSize | 切换页面到某一页,pageNumber(Number):当前页数,pageSize(Number):列每页显示的数据行数号|
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
| selectedRowId | | 获得当前选中行序号|
| getSelectedCount | | 获得当前选中行总数|
| getSelected | | 获得选中行数据|
| getCheckedCount | | 获得勾选行总数|
| getChecked | | 获得勾选行数据|
| checkedRowIds | | 获得勾选行的行Id|

<script>
import {TTree} from 'ai-taurus-desktop';

new Vue({
  components: {
    TTree
  },
  data: {
    return {
        treeData: [
          {
            'id': '1',
            'name': 'Work Group1',
            'code': '10',
            'iconClassName': 'icon-acrobat',
            'children': [
              {
                'name': 'Agent Group',
                'code': '11'
              },
              {
                'name': 'Skill Group',
                'code': '12',
                'children': [
                  {
                    'name': '管理员',
                    'code': '121'
                  },
                  {
                    'name': 'CEO',
                    'code': '122'
                  },
                  {
                    'name': 'CFO',
                    'code': '123'
                  },
                  {
                    'name': 'COO',
                    'code': '124',
                    'checked': true
                  },
                  {
                    'name': '普通人',
                    'code': '124'
                  }
                ]
              },
              {
                'name': 'Marketing Group',
                'code': '13'
              }
            ]
          },
          {
            'id': '2',
            'name': 'Work Group2',
            'code': ''
          },
          {
            'id': '3',
            'name': 'Trouble Ticket Group',
            'code': '30',
            'children': [
              {
                'name': 'Trouble Ticket1',
                'code': '31'
              },
              {
                'name': 'Trouble Ticket2',
                'code': '32',
                'children': []
              }
            ]
          },
          {
            'id': '4',
            'name': 'Data Group',
            'code': '',
            'children': []
          }
        ],
        loadData: [
          {
            'id': '1',
            'name': 'Work Group1',
            'code': '10'
          },
          {
            'id': '2',
            'name': 'Work Group2',
            'code': ''
          },
          {
            'id': '3',
            'name': 'Trouble Ticket Group',
            'code': '30'
          },
          {
            'id': '4',
            'name': 'Data Group',
            'code': '',
            'children': []
          }
        ]
    };
  },
  methods: {
    loadNode: function (node, resolve) {
      var hasChild = Math.random() > 0.5;
      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [{
            'name': 'load node',
            'code': ''
          }, {
            'name': 'load node',
            'code': ''
          }];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    }
  }
});
</script>

## Tree

树组件

### Tree

:::demo 需要传入tree-data来设置表格数据

```html
<t-tree :tree-data="treeData"></t-tree>
<script>
import {TTree} from 'ai-taurus-desktop';

new Vue({
  components: {
    TTree
  },
  data: {
    return {
        treeData: [
          {
            'id': '1',
            'name': 'Work Group1',
            'code': '10',
            'iconClassName': 'icon-acrobat',
            'children': [
              {
                'name': 'Agent Group',
                'code': '11'
              },
              {
                'name': 'Skill Group',
                'code': '12',
                'children': [
                  {
                    'name': '管理员',
                    'code': '121'
                  },
                  {
                    'name': 'CEO',
                    'code': '122'
                  },
                  {
                    'name': 'CFO',
                    'code': '123'
                  },
                  {
                    'name': 'COO',
                    'code': '124',
                    'checked': true
                  },
                  {
                    'name': '普通人',
                    'code': '124'
                  }
                ]
              },
              {
                'name': 'Marketing Group',
                'code': '13'
              }
            ]
          },
          {
            'id': '2',
            'name': 'Work Group2',
            'code': ''
          },
          {
            'id': '3',
            'name': 'Trouble Ticket Group',
            'code': '30',
            'children': [
              {
                'name': 'Trouble Ticket1',
                'code': '31'
              },
              {
                'name': 'Trouble Ticket2',
                'code': '32',
                'children': []
              }
            ]
          },
          {
            'id': '4',
            'name': 'Data Group',
            'code': '',
            'children': []
          }
        ],
        loadData: [
          {
            'id': '1',
            'name': 'Work Group1',
            'code': '10'
          },
          {
            'id': '2',
            'name': 'Work Group2',
            'code': ''
          },
          {
            'id': '3',
            'name': 'Trouble Ticket Group',
            'code': '30'
          },
          {
            'id': '4',
            'name': 'Data Group',
            'code': '',
            'children': []
          }
        ]
    };
  }
});
</script>
```
:::

### Asynchronism Tree

:::demo 异步树,传入load的方法，lazy设置为true

```html
<t-tree :tree-data="loadData" :load="loadNode" lazy></t-tree>
<script>
import {TTree} from 'ai-taurus-desktop';

new Vue({
  components: {
    TTree
  },
  data: {
    return {
        treeData: [
          {
            'id': '1',
            'name': 'Work Group1',
            'code': '10',
            'iconClassName': 'icon-acrobat',
            'children': [
              {
                'name': 'Agent Group',
                'code': '11'
              },
              {
                'name': 'Skill Group',
                'code': '12',
                'children': [
                  {
                    'name': '管理员',
                    'code': '121'
                  },
                  {
                    'name': 'CEO',
                    'code': '122'
                  },
                  {
                    'name': 'CFO',
                    'code': '123'
                  },
                  {
                    'name': 'COO',
                    'code': '124',
                    'checked': true
                  },
                  {
                    'name': '普通人',
                    'code': '124'
                  }
                ]
              },
              {
                'name': 'Marketing Group',
                'code': '13'
              }
            ]
          },
          {
            'id': '2',
            'name': 'Work Group2',
            'code': ''
          },
          {
            'id': '3',
            'name': 'Trouble Ticket Group',
            'code': '30',
            'children': [
              {
                'name': 'Trouble Ticket1',
                'code': '31'
              },
              {
                'name': 'Trouble Ticket2',
                'code': '32',
                'children': []
              }
            ]
          },
          {
            'id': '4',
            'name': 'Data Group',
            'code': '',
            'children': []
          }
        ],
        loadData: [
          {
            'id': '1',
            'name': 'Work Group1',
            'code': '10'
          },
          {
            'id': '2',
            'name': 'Work Group2',
            'code': ''
          },
          {
            'id': '3',
            'name': 'Trouble Ticket Group',
            'code': '30'
          },
          {
            'id': '4',
            'name': 'Data Group',
            'code': '',
            'children': []
          }
        ]
    };
  },
  methods: {
    loadNode: function (node, resolve) {
      var hasChild = Math.random() > 0.5;
      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [{
            'name': 'load node',
            'code': ''
          }, {
            'name': 'load node',
            'code': ''
          }];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    }
  }
});
</script>
```
:::

### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| treeData | Array | Yes  |  | 树数据实例数组|
| lazy | Boolean| No | false | 是否为懒加载 |
| load | Function| No |  | 当为懒加载时要传入的加载方法 |
| allExpandable | Boolean | No | false | 是否加载时全部展开 |

<script>
import {TTree} from 'ai-taurus-desktop';

export default {
  components: {
    TTree
  },
  data: function () {
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
};
</script>
<style>
ul {
 list-style: none;
}
.icon-base {
 display: inline-block;
 background-repeat: no-repeat;
 vertical-align: middle;
}
i.icon{
 width: 22px;
 height: 22px;
}
i.subscribe-icon{
 background-repeat: no-repeat;
 vertical-align: middle;
}
.node-label-container{
  display: inline-block;
  padding: 2px 5px;
}
.node-label-container:hover{
  background: #F5F5F5;
  border-radius: 2px;
}
.node-label-container-select{
  display: inline-block;
  padding: 2px 5px;
  background: #038cd6;
  border-radius: 2px;
}

.child-node {
  padding-left: 15px;
  overflow: hidden;
  max-height: 9999px;
}
div .container-loading {
  width: 15px;
  height: 18px;
}
.slide-enter-active, .slide-leave-active {
  -moz-transition: max-height 0.3s ease;
  -ms-transition: max-height 0.3s ease;
  -o-transition: max-height 0.3s ease;
  -webkit-transition: max-height 0.3s ease;
  transition: max-height 0.3s ease;
}
.slide-enter, .slide-leave-active {
  max-height: 0;
}

/**
 *
 * All animations must live in their own file
 * in the animations directory and be included
 * here.
 *
 */
/**
 * Styles shared by multiple animations
 */
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg); }

  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }

  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg); }

  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

.ball-clip-rotate > div {
  background-color: #fff;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  border: 2px solid #038cd6;
  border-bottom-color: transparent;
  height: 15px;
  width: 15px;
  background: transparent !important;
  display: inline-block;
  -webkit-animation: rotate 0.75s 0s linear infinite;
          animation: rotate 0.75s 0s linear infinite; }

</style>
## Tree

树组件

### Tree

:::demo 需要传入tree-data来设置表格数据

```html
<t-tree :tree-data="treeData"></t-tree>
<script>
import {TTree} from 'ai-taurus-desktop';

 export default {
  components: {
    TTree
  },
  data: function () {
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
};
</script>
```
:::

### Asynchronism Tree

:::demo 异步树,传入load的方法，lazy设置为true

```html
<t-tree :tree-data="loadData" :load="loadNode" lazy></t-tree>
<script>
import {TTree} from 'ai-taurus-desktop';

 export default {
  components: {
    TTree
  },
  data: function () {
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
};
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

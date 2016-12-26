<script>
  import {TPager} from 'ai-taurus-desktop';
  export default {
    components: {
      TPager
    },
    data: function () {
      return {
        currentPageNumber: 1,
        currentPageSize: 5,
        currentDataCount: 90
      };
    },
    methods: {
      changeDataCount: function () {
        this.currentDataCount += 10;
      },
      changePageSize: function () {
        this.currentPageSize = (this.currentPageSize === 5 ? 8 : 5);
      },
      pageChanged: function (pageNumber, pageSize) {
        this.currentPageNumber = pageNumber;
        console.log('page-changed事件被触发, 当前页号为: ' + pageNumber + '; 每页显示记录数为: ' + pageSize);
      },
      gotoPage7: function () {
        // this.$refs.myPager.activatePage(7); // 也可以使用这个方法
        this.currentPageNumber = 7;
      },
      prev: function () {
        // this.$refs.myPager.prev(); // 也可以使用这个方法
        if (this.currentPageNumber > 0) {
          this.currentPageNumber--;
        }
      },
      next: function () {
        // this.$refs.myPager.next(); // 也可以使用这个方法
        if (this.currentPageNumber < Math.ceil(this.currentDataCount / this.currentPageSize) + 1) {
          this.currentPageNumber++;
        }
      }
    }
  };
</script>

## pager

pager组件，用于数据分页

### 基本用法

:::demo  需要传入page-number来设置当前页数，page-size来设置每页显示条数，data-count来设置数据总数

```html
    <div class="form-row">
      <button v-on:click="changePageSize" class="button button--action">每页记录数改为{{currentPageSize === 5 ? 8 : 5}}条</button>
      <button v-on:click="gotoPage7" class="button button--action">跳转到第7页</button>
      <button v-on:click="changeDataCount" class="button button--action">增加10条记录</button>
      <button v-on:click="prev" class="button button--action">前一页</button>
      <button v-on:click="next" class="button button--action">后一页</button>
    </div>
    <div class="form-row">
      <t-pager v-on:page-changed="pageChanged" :page-size="currentPageSize"
               :page-number="currentPageNumber" :data-count="currentDataCount" ref="myPager"></t-pager>
    </div>
    <div class="form-row">
      <span>共{{currentDataCount}}条记录 ; 每页记录数为{{currentPageSize}}条 ; 当前是第 {{currentPageNumber}} 页</span>
    </div>

<script>
    import {TPager} from 'ai-taurus-desktop';
      export default {
        components: {
          TPager
        },
        data: function () {
          return {
            currentPageNumber: 1,
            currentPageSize: 5,
            currentDataCount: 90
          };
        },
        methods: {
          changeDataCount: function () {
            this.currentDataCount += 10;
          },
          changePageSize: function () {
            this.currentPageSize = (this.currentPageSize === 5 ? 8 : 5);
          },
          pageChanged: function (pageNumber, pageSize) {
            this.currentPageNumber = pageNumber;
            console.log('page-changed事件被触发, 当前页号为: ' + pageNumber + '; 每页显示记录数为: ' + pageSize);
          },
          gotoPage7: function () {
            // this.$refs.myPager.activatePage(7); // 也可以使用这个方法
            this.currentPageNumber = 7;
          },
          prev: function () {
            // this.$refs.myPager.prev(); // 也可以使用这个方法
            if (this.currentPageNumber > 0) {
              this.currentPageNumber--;
            }
          },
          next: function () {
            // this.$refs.myPager.next(); // 也可以使用这个方法
            if (this.currentPageNumber < Math.ceil(this.currentDataCount / this.currentPageSize) + 1) {
              this.currentPageNumber++;
            }
          }
        }
      };
</script>
```
:::


### Props \(参数\)

| 名字 | 类型 | 是否必传 | 默认 | 描述 |
| --- | --- | --- | --- | --- |
| dataCount | Number| No | 0 | 数据总数 |
| pageSize | Number | No  | 5 | 每页数据条数|
| pageNumber | Number | No | 1 | 当前页数 |


### Events \(事件\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| page-changed |  | 当前页数变化时触发|

### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| prev | 无 | 上一页 |
| next | 无 | 下一页 |
| activatePage | pageNumber | 点击页数 |

## Infinite Scroll指令

Infinite Scroll指令可以是内容滚动到底部加载更多。

### 引入

```js
import {TSpinner} from 'ai-taurus-mobile';
```

### 用法

参见[InfiniteScroll指令Demo][infinite-scroll-demo]。

基础用法

Infinite Scroll指令定义在容器元素上，来操控滚动加载更多。

```html
<div class="page-infinite">
  <h1 class="page-title">Infinite Scroll</h1>
  <p class="page-infinite-desc">当即将滚动至列表底部时, 自动加载更多数据</p>
  <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
    <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
      <li v-for="item in list" class="page-infinite-listitem">{{ item }}</li>
    </ul>
    <p v-show="loading" class="page-infinite-loading">
      <TSpinner type="fading-circle"></TSpinner>
      加载中...
    </p>
  </div>
</div>
```
```js
  import {TSpinner} from 'ai-taurus-mobile';

  export default {
    components: {
      TSpinner
    },
    data () {
      return {
        list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0
      };
    },
    methods: {
      loadMore () {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    },

    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    }
  };
```

[infinite-scroll-demo]: /static/mobile-demo/examples/index.html#/infinite-scroll

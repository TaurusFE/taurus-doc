## Pull Down组件

Pull Down可以在列表顶端, 按住 - 下拉 - 释放可以获取更多数据。

### 引入

```js
import { TPullDown } from 'ai-taurus-mobile';
```

### 用法

参见[TPullDown组件Demo][pull-down-demo]。

基础用法

Pull Down组件支持传入自定义对象来定制属性。

```html
<div class="page-loadmore">
    <h1 class="page-title">Pull down</h1>
    <p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>
    <p class="page-loadmore-desc">此例请使用手机查看</p>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <t-load-more :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="top" class="taurus-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <t-spinner type="snake"></t-spinner>
          </span>
        </div>
      </t-load-more>
    </div>
</div>
```
```js
   import {TLoadMore, TSpinner} from 'taurus';

    export default {
      components: {
        TLoadMore,
        TSpinner
      },
      data () {
        return {
          list: [],
          topStatus: '',
          wrapperHeight: 0
        };
      },
  
      methods: {
        handleTopChange (status) {
          this.topStatus = status;
        },
  
        loadTop () {
          setTimeout(() => {
            let firstValue = this.list[0];
            for (let i = 1; i <= 10; i++) {
              this.list.unshift(firstValue - i);
            }
            this.$refs.loadmore.onTopLoaded();
          }, 1500);
        }
      },
  
      created () {
        for (let i = 1; i <= 20; i++) {
          this.list.push(i);
        }
      },
  
      mounted () {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
      }
    };
```


### Attributes


[pull-down-demo]: /static/mobile-demo/examples/index.html#/pull-down

<script>
  import 'aii-taurus';

  export default {
    methods: {
      gotoMyTag: function (event) {
        var el = document.getElementById('myTag');
        this.$scrollTo(el, 500); // 滚动到id为myTag的元素处
      },
      gotoTop: function (event) {
        this.$scrollTo(0, 500); // 滚动到页面顶端
      },
      goto910: function (event) {
        this.$scrollTo(910); // 滚动到距页面顶端910px处
      }
    }
  };
</script>

## scroll-to

scroll-to插件，用于页面滚动

### 基本用法

:::demo 调用$scollTo方法来滚动页面

```html
  <div class="form-row">
    <button v-on:click="gotoMyTag" class="button button--action">滚动到"我的位置"</button>
    <button v-on:click="goto910" class="button button--action">滚动到距页面顶端910px处</button>
  </div>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题1</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题2</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题3</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题4</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题5</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题6</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题7<a href="#" v-on:click="gotoTop">(点我回到顶端)</a></h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题8</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题9</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题10</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small" id="myTag">我的位置<a href="#" v-on:click="gotoTop">(点我回到顶端)</a></h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题11</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题12</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题13</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="block__header leader--large trailer--large">
    <h2 class="title--small">标题14</h2>
  </div>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <p>这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。这是一段长文本。</p>
  <div class="form-row"></div>
<script>
  import 'aii-taurus';

  export default {
    methods: {
      gotoMyTag: function (event) {
        var el = document.getElementById('myTag');
        this.$scrollTo(el, 500); // 滚动到id为myTag的元素处
      },
      gotoTop: function (event) {
        this.$scrollTo(0, 500); // 滚动到页面顶端
      },
      goto910: function (event) {
        this.$scrollTo(910); // 滚动到距页面顶端910px处
      }
    }
  };
</script>
```
:::


### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| $scollTo | $scollTo\(el,duration,callback,context\) |插件页面滚动 |

#### 注: 参数详解

##### el : 滚动到目标地址(可以是DOM元素,也可以是整数单位:px)

##### duration : 动画间隔时间

##### callback : 滚动结束后回调

##### context : 上下文对象(如果传入必须为原生DOM对象，默认为window)

## TSwipe组件

TSwipe是一个图像滑块，支持自定义间隔和动画持续时间。

### 引入

```js
import { TSwipe } from 'ai-taurus-mobile';
```

### 用法

参见[TSwipe组件Demo][swipe-demo]。

基础用法

TSwipe组件支持传入自定义属性来展现不同形态, 需要配合TSwipeItem来使用。

```html
<div class="page-swipe">
  <h1 class="page-title">Swipe</h1>
  <p class="page-swipe-desc">基础用法</p>
  <t-swipe :auto="4000">
    <t-swipe-item class="slide1">1</t-swipe-item>
    <t-swipe-item class="slide2">2</t-swipe-item>
    <t-swipe-item class="slide3">3</t-swipe-item>
  </t-swipe>

  <p class="page-swipe-desc">隐藏 indicators</p>
  <t-swipe :show-indicators="false">
    <t-swipe-item class="slide1">1</t-swipe-item>
    <t-swipe-item class="slide2">2</t-swipe-item>
    <t-swipe-item class="slide3">3</t-swipe-item>
  </t-swipe>

  <p class="page-swipe-desc">取消自动播放</p>
  <t-swipe :auto="0">
    <t-swipe-item class="slide1">1</t-swipe-item>
    <t-swipe-item class="slide2">2</t-swipe-item>
    <t-swipe-item class="slide3">3</t-swipe-item>
  </t-swipe>

  <p class="page-swipe-desc">设置默认显示页</p>
  <t-swipe :auto="0" :default-index="1">
    <t-swipe-item class="slide1">1</t-swipe-item>
    <t-swipe-item class="slide2">2</t-swipe-item>
    <t-swipe-item class="slide3">3</t-swipe-item>
  </t-swipe>

  <p class="page-swipe-desc">单个幻灯片</p>
  <t-swipe :show-indicators="false">
    <t-swipe-item class="slide1">SINGLE SLIDE</t-swipe-item>
  </t-swipe>
</div>
```
```js
 import {TSwipe, TSwipeItem} from 'taurus';

 export default {
   components: {
     TSwipe,
     TSwipeItem
   }
 };
```


### Attributes

TSwipe组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| speed | 动效的持续时间，以毫秒为单位 | Number | - | 300 |
| auto | 自动播放的间隔时间，以毫秒为单位 | Number | - | 3000 |
| defaultIndex | 开始显示滑块的下标 | Number | - | 0 |
| continuous | 无限滑动滑块创建的时候是否不需要结束点 | Boolean | - | true |
| showIndicators | 是否展示加载指示符 | Boolean | - | true |
| prevent | 是否阻止触摸事件的默认行为，对安卓低版本<4.2有作用 | Boolean | - | false |

[swipe-demo]: /static/mobile-demo/examples/index.html#/swipe

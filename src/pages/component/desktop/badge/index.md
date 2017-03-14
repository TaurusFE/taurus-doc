<script>
import {TBadge} from 'ai-taurus-desktop';

export default {
  components: {
    TBadge
  }
};
</script>

<style>
.badge {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}
.badge-count, .badge-dot {
    background: #f50;
    z-index: 10;
    box-shadow: 0 0 0 1px #fff;
}
.badge-count {
  position: absolute;
  -ms-transform: translateX(50%);
  transform: translateX(50%);
  top: -10px;
  right: 0;
  height: 20px;
  border-radius: 10px;
  min-width: 20px;
  border: 1px solid transparent;
  color: #fff;
  line-height: 18px;
  padding: 0 6px;
  font-size: 12px;
  white-space: nowrap;
  -ms-transform-origin: -10% center;
 transform-origin: -10% center;
}
.badge-dot {
  position: absolute;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  -ms-transform-origin: 0 center;
  transform-origin: 0 center;
  top: -4px;
  right: -8px;
  height: 8px;
  width: 8px;
  border-radius: 100%;
}
  .demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
  .demo-badge-alone{
    left: 30px;
    background: #5cb85c !important;
  }
</style>

## TBadge组件

徽章组件。

### 基本用法

:::demo

```html
<t-badge count="3">
  <a href="#" class="demo-badge"></a>
</t-badge>

<script>
import {TBadge} from 'ai-taurus-desktop';

export default {
  components: {
    TBadge
  }
};
</script>
<style scoped>
  .demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
</style>
```
:::

### 小红点

:::demo

```html
<t-badge dot>
  <a href="#" class="demo-badge"></a>
</t-badge>
<t-badge dot>
  <i class="icon-veris"></i>
</t-badge>
<t-badge dot>
  <a href="#">可以是一个链接</a>
</t-badge>

<script>
import {TBadge} from 'ai-taurus-desktop';

export default {
  components: {
    TBadge
  }
};
</script>
```
:::

### 封顶数字

:::demo

```html
<t-badge count="100">
  <a href="#" class="demo-badge"></a>
</t-badge>
<t-badge count="1000" overflow-count="999">
  <a href="#" class="demo-badge"></a>
</t-badge>

<script>
import {TBadge} from 'ai-taurus-desktop';

export default {
  components: {
    TBadge
  }
};
</script>
```
:::

### 独立使用及自定义样式

:::demo

```html
<t-badge count="10"></t-badge>
<t-badge count="20" class="demo-badge-alone"></t-badge>

<script>
import {TBadge} from 'ai-taurus-desktop';

export default {
  components: {
    TBadge
  }
};
</script>
<style scoped>
  .demo-badge-alone{
    left: 30px;
    background: #5cb85c !important;
  }
</style>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| closable | 日历事件 | Boolean | true/false | false |
| type | 标签的样式类型 | String | -/border/dot | - |
| color | 标签颜色 | String | -/blue/green/red/yellow | - |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| on-close | 点击关闭按钮是触发该事件 |  |

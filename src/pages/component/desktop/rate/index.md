<script>
import {TRate} from 'ai-taurus-desktop';

export default {
 components: {
    TRate
  },
  data () {
    return {
      value1: null,
      value2: null,
      value3: null,
      value5: 3.7
    };
  }
};
</script>

<style>
.rate {
	height: 20px;
	line-height: 1
}

.rate__item {
	font-size: 0;
	vertical-align: middle
}

.rate__icon,.rate__item {
	display: inline-block;
	position: relative
}

.rate__icon {
	font-size: 18px;
	margin-right: 6px;
	color: #bfcbd9;
	transition: .3s
}

.rate__icon .path2 {
	position: absolute;
	left: 0;
	top: 0
}

.rate__icon.hover {
	transform: scale(1.15)
}

.rate__decimal {
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	overflow: hidden
}

.rate__text {
	font-size: 14px;
	vertical-align: middle
}
</style>

## TRate组件

评分组件。

### 基本用法

:::demo

```html
<div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <t-rate v-model="value1"></t-rate>
</div>
<div class="block">
  <span class="demonstration">区分颜色</span>
  <t-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </t-rate>
</div>

<script>
import {TRate} from 'ai-taurus-desktop';

export default {
  components: {
    TRate
  },
  data () {
      return {
        value1: null,
        value2: null
      };
   }
};
</script>
```
:::

### 辅助文字

:::demo

```html
<t-rate
  v-model="value"
  show-text>
</t-rate>

<script>
import {TRate} from 'ai-taurus-desktop';

export default {
  components: {
    TRate
  },
  data () {
      return {
        value: null
      };
   }
};
</script>
```
:::

### 只读

:::demo

```html
<t-rate
  v-model="value"
  disabled
  show-text
  text-color="#ff9900"
  text-template="{value}">
</t-rate>

<script>
import {TRate} from 'ai-taurus-desktop';

export default {
  components: {
    TRate
  },
  data () {
      return {
        value: 3.7
      };
   }
};
</script>
```
:::

### Attributes

max	最大分值	number	—	5
disabled	是否为只读	boolean	—	false
allow-half	是否允许半选	boolean	—	false
low-threshold	低分和中等分数的界限值，值本身被划分在低分中	number	—	2
high-threshold	高分和中等分数的界限值，值本身被划分在高分中	number	—	4
colors	icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色	array	—	['#F7BA2A', '#F7BA2A', '#F7BA2A']
void-color	未选中 icon 的颜色	string	—	#C6D1DE
disabled-void-color	只读时未选中 icon 的颜色	string	—	#EFF2F7
icon-classes	icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名	array	—	['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']
void-icon-class	未选中 icon 的类名	string	—	el-icon-star-off
disabled-void-icon-class	只读时未选中 icon 的类名	string	—	el-icon-star-on
show-text	是否显示辅助文字	boolean	—	false
text-color	辅助文字的颜色	string	—	1F2D3D
texts	辅助文字数组	array	—	['极差', '失望', '一般', '满意', '惊喜']
text-template	只读时的辅助文字模板	string	—	{value}

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| max | 最大分值 | number | — | 5 |
| disabled | 是否为只读 | boolean | — | false |
| allow-half | 是否允许半选 | boolean | — | false |
| low-threshold | 低分和中等分数的界限值，值本身被划分在低分中 | number | — | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中 | number | — | 4 |
| colors | icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色 | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| void-color | 未选中 icon 的颜色 | string | — | #C6D1DE |
| disabled-void-color | 只读时未选中 icon 的颜色 | string | — | #EFF2F7 |
| icon-classes | icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名 | array | — | ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on'] |
| void-icon-class | 未选中 icon 的类名 | string | — | el-icon-star-off |
| disabled-void-icon-class | 只读时未选中 icon 的类名 | string | — | el-icon-star-on |
| show-text | 是否显示辅助文字 | boolean | — | false |
| text-color | 辅助文字的颜色 | string | — | 1F2D3D |
| texts | 辅助文字数组 | array | — | ['极差', '失望', '一般', '满意', '惊喜'] |
| text-template | 只读时的辅助文字模板 | string | — | {value} |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| on-change | 分值改变时触发 | val |

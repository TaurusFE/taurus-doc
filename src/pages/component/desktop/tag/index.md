<script>
import {TTag, TButton} from 'ai-taurus-desktop';

export default {
  components: {
    TTag,
    TButton
  },
  data () {
    return {
      show: true,
      count: 3
    };
  },
  methods: {
    handleClose () {
      this.show = false;
      this.count--;
    },
    tagAdd () {
      this.count++;
    }
  }
};
</script>
<style>
.tag {
    display: inline-block;
    height: 22px;
    line-height: 22px;
    margin: 2px 4px 2px 0;
    padding: 0 8px;
    border: 1px solid #e3e8ee;
    border-radius: 3px;
    background: #f7f7f7;
    font-size: 12px;
    vertical-align: middle;
    opacity: 1;
    overflow: hidden;
    cursor: pointer;
}
.tag .tag-text {

}
.tag .tag-close {
    font-size: 12px;
    -ms-transform: scale(1.42857143) rotate(0);
    transform: scale(1.42857143) rotate(0);
    cursor: pointer;
    margin-left: 8px;
    color: #666;
    opacity: .66;
    position: relative;
    top: -1px;
}
.tag-border {
    height: 24px;
    line-height: 24px;
    border: 1px solid #e3e8ee!important;
    color: #657180!important;
    background: #fff!important;
    position: relative;
}
.tag-dot {
    height: 32px;
    line-height: 32px;
    border: 1px solid #e3e8ee!important;
    color: #657180!important;
    background: #fff!important;
    padding: 0 12px;
}
.tag-blue, .tag-green, .tag-red, .tag-yellow {
    border: 0;
    color: white;
}
.tag-blue{
    background: #39f;
}
.tag-border.tag-blue .tag-close{
    color: #39f;
}
.tag-green{
    background: #0c6;
}
.tag-border.tag-green .tag-close{
    color: #0c6;
}
.tag-red{
    background: #f50;
}
.tag-border.tag-red .tag-close{
    color: #f50;
}
.tag-yellow{
    background: #f90;
}
.tag-border.tag-yellow .tag-close{
    color: #f90;
}

.tag-border.tag-blue {
    color: #39f!important;
    border: 1px solid #39f!important;
}
.tag-border.tag-green {
    color: #0c6!important;
    border: 1px solid #0c6!important;
}
.tag-border.tag-red {
    color: #f50!important;
    border: 1px solid #f50!important;
}
.tag-border.tag-yellow {
    color: #f90!important;
    border: 1px solid #f90!important;
}
</style>

## TTag组件

标签组件。

### 基本用法

:::demo

```html
<t-tag>标签一</t-tag>
<t-tag>标签二</t-tag>
<t-tag v-if="show" closable @on-close="handleClose">标签三</t-tag>

<script>
import {TTag} from 'ai-taurus-desktop';

export default {
  components: {
    TTag
  },
  data () {
    return {
      show: true
    };
  },
  methods: {
    handleClose () {
      this.show = false;
    }
  }
};
</script>
```
:::

### 样式类型

:::demo

```html
<t-tag type="border">标签三</t-tag>
<t-tag type="border" closable>标签四</t-tag>
<t-tag type="dot">标签一</t-tag>
t-tag type="dot" closable>标签二</t-tag>

<script>
import {TTag} from 'ai-taurus-desktop';

export default {
  components: {
    TTag
  }
};
</script>
```
:::

### 样式类型

:::demo

```html
<t-tag closable color="blue">标签一</t-tag>
<t-tag closable color="green">标签二</t-tag>
<t-tag closable color="red">标签三</t-tag>
<t-tag closable color="yellow">标签四</t-tag>
<br><br>
<t-tag type="border" closable color="blue">标签一</t-tag>
<t-tag type="border" closable color="green">标签二</t-tag>
<t-tag type="border" closable color="red">标签三</t-tag>
<t-tag type="border" closable color="yellow">标签四</t-tag>
<br><br>
<t-tag type="dot" closable color="blue">标签一</t-tag>
<t-tag type="dot" closable color="green">标签二</t-tag>
<t-tag type="dot" closable color="red">标签三</t-tag>
<t-tag type="dot" closable color="yellow">标签四</t-tag>

<script>
import {TTag} from 'ai-taurus-desktop';

export default {
  components: {
    TTag
  }
};
</script>
```
:::

### 动态添加和删除

:::demo

```html
<t-tag v-for="item in count" closable @on-close="handleClose">标签{{ item }}</t-tag>
<t-button class="button--default" text="添加标签" size="small" @btn-click="tagAdd"></t-button>

<script>
import {TTag, TButton} from 'ai-taurus-desktop';

export default {
  components: {
    TTag,
    TButton
  },
  data () {
    return {
      show: true,
      count: 3
    };
  },
  methods: {
    handleClose () {
      this.show = false;
      this.count--;
    },
    tagAdd () {
      this.count++;
    }
  }
};
</script>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| closable | 日历事件 | Boolean | true/false | false |
| type | 标签的样式类型 | String  | -/border/dot | - |
| color | 标签颜色 | String | -/blue/green/red/yellow | - |

### Events

| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| on-close | 点击关闭按钮是触发该事件 |  |

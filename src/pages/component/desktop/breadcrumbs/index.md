<script>
import { TBreadcrumbs } from 'ai-taurus-desktop';
export default {
  components: {
    TBreadcrumbs
  },
  data () {
    return {
      breadcrumbs: [{
        link: '#/',
        text: 'home'
      }, {
        link: '#/',
        text: 'mobiler'
      }, {
        link: '#/',
        text: 'apple'
      }]
    };
  }
};
</script>

## Breadcrumbs组件

Breadcrumbs组件提供了导航功能。

### 基本用法

:::demo

```html
<template>
  <div class="section--negative box--blue" style="background:#004773">
    <t-breadcrumbs :crumbs="breadcrumbs"></t-breadcrumbs>
  </div>
</template>
<script>
import { TBreadcrumbs } from 'ai-taurus-desktop';
export default {
  components: {
    TBreadcrumbs
  },
  data () {
    return {
      breadcrumbs: [{
        link: '#/',
        text: 'home'
      }, {
        link: '#/',
        text: 'mobiler'
      }, {
        link: '#/',
        text: 'apple'
      }]
    };
  }
};
</script>
```

:::
### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| crumbs | 组件初始化所需的数据| Array | - | [] |

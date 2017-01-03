<script>
import { TBreadcrumbs } from 'ai-taurus-desktop';
export default {
  components: {
    TBreadcrumbs
  },
  data () {
    return {
      links: [{
        link: '#home',
        text: 'home'
      }, {
        link: '#mobile',
        text: 'mobile'
      }, {
        link: 'http://www.baidu.com',
        text: 'baidu'
      }]
    };
  },
  methods: {
    navTo (link) {
      console.log('导航到: ' + link);
    }
  }
};
</script>

## Breadcrumbs组件

Breadcrumbs组件提供了导航功能。

### 基本用法

#### **在本窗口或页签打开链接 (默认)**

:::demo

```html
<template>
  <div class="form-row">
    <t-breadcrumbs :crumbs="links"></t-breadcrumbs>
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
      links: [{
        link: '#home',
        text: 'home'
      }, {
        link: '#mobile',
        text: 'mobile'
      }, {
        link: 'http://www.baidu.com',
        text: 'baidu'
      }]
    };
  }
};
</script>
```

#### **在新窗口或页签打开链接**

:::demo

```html
<template>
  <div class="form-row">
    <t-breadcrumbs :crumbs="links" :link-to-blank="true"></t-breadcrumbs>
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
      links: [{
        link: '#home',
        text: 'home'
      }, {
        link: '#mobile',
        text: 'mobile'
      }, {
        link: 'http://www.baidu.com',
        text: 'baidu'
      }]
    };
  }
};
</script>
```

#### **自定义跳转逻辑**

:::demo

```html
<template>
  <div class="form-row">
    <t-breadcrumbs :crumbs="links" :nav="false" @breadcrumbs-nav="navTo"></t-breadcrumbs>
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
      links: [{
        link: '#home',
        text: 'home'
      }, {
        link: '#mobile',
        text: 'mobile'
      }, {
        link: 'http://www.baidu.com',
        text: 'baidu'
      }]
    };
  },
  methods: {
    navTo (link) {
      console.log('导航到: ' + link);
    }
  }
};
</script>
```

:::
### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| crumbs | 组件初始化所需的数据| Array | - | [] |
| nav | 是否使用默认导航方式，默认导航方式将在当前页或页签内跳转链接 | Boolean | true\|false | true |
| linkToBlank | 当`nav`为true时，是否在新窗口或页签内打开当前链接 | Boolean | true\|false | false |

### Events

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| breadcrumbs-nav  | 在导航链接上点击触发 | 当前链接字符串 |

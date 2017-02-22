<script>
import 'ai-taurus-desktop';
export default {
  data () {
    return {
      tipTitle: 'Title',
      tipText: 'this is a tip!',
      errorTitle: 'Error Title',
      errorText: 'this is error text',
      longTipMessage: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！',
      formTipTitle: 'Title',
      formTipText: 'content text...'
    };
  },
  methods: {
    changeTitle: function () {
      this.formTipTitle = 'Title' + parseInt((Math.random() * 10000), 10);
    }
  }
};
</script>

## Tooltip指令

Tooltip指令提供了鼠标悬停提示功能。

### 指令用法

:::demo

```html
<template>
  <div class="container">
    <h1>标准提示</h1>
    <p class="icon-error tooltip__trigger" v-tooltip:blue="'value by straight string'"></p>
    <h1>标准长内容提示</h1>
    <p class="icon-error tooltip__trigger" v-tooltip="longTipMessage">
    </p>
    <h1>带标题和正文的提示</h1>
    <p class="icon-error tooltip__trigger" v-tooltip="{title: tipTitle, text: tipText}"></p>
    <h1>仅带标题的提示</h1>
    <p class="icon-error tooltip__trigger" v-tooltip="{title: tipTitle}"></p>
    <h1>仅带正文的提示</h1>
    <p class="icon-error tooltip__trigger" v-tooltip="{text: tipText}"></p>
    <h1>带标题和正文的错误提示</h1>
    <p class="icon-error tooltip__trigger" v-tooltip:error="{title: errorTitle, text: errorText}"></p>
    <h1>蓝色提示</h1>
    <p class="icon-error tooltip__trigger" v-tooltip:blue="tipText">
    </p>
    <h1>表单元素提示</h1>
    <div class="form-row">
      <button v-on:click="changeTitle" class="button button--action">修改提示内容</button>
    </div>
    <div class="form-row">
      <div class="form-item form-item--required form-item--error" style="max-width: 750px">
        <input id="form-field-simple-label-required" type="text" aria-describedby="floor-tooltip">
        <p class="icon-error tooltip__trigger" v-tooltip:error="{title: formTipTitle, text: formTipText}"></p>
      </div>
    </div>
  </div>
</template>
<script>
import 'ai-taurus-desktop';
export default {
  data () {
    return {
      tipTitle: 'Title',
      tipText: 'this is a tip!',
      errorTitle: 'Error Title',
      errorText: 'this is error text',
      longTipMessage: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！',
      formTipTitle: 'Title',
      formTipText: 'content text...'
    };
  },
  methods: {
    changeTitle: function () {
      this.formTipTitle = 'Title' + parseInt((Math.random() * 10000), 10);
    }
  }
};
</script>
```

:::
### 指令参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| arg | 指令类型 | - | error\|blue\|normal | normal |
| value | tips中的提示内容，其中title字段为tip标题，text为tip内容，传入字面量字符串，则当成text解析 | Object | - | - |
| modifiers | 是否传入literal以字面量形式传入参数 | - | - | - |

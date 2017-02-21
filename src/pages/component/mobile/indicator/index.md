## Indicator组件

Indicator是简单的加载指示符（展示进度条）组件。 支持自定义位置，时间和样式。

### 引入

```js
import { Indicator } from 'ai-taurus-mobile';
```

### 用法

参见[Indicator组件Demo][indicator-demo]。

基础用法

Indicator组件支持传入自定义对象来定制属性。

```html
<div>
    <h1 class="page-title">Indicator</h1>
    <div class="page-indicator-wrapper">
      <t-button @click.native="openIndicator" size="large">点击弹出 Indicator</t-button>
      <t-button @click.native="openIndicatorWithSpinner" size="large">可配置 spinner</t-button>
      <t-button @click.native="openIndicatorWithText" size="large">点击弹出带有文字的 Indicator</t-button>
    </div>
  </div>
```
```js
  import { TButton, Indicator } from 'ai-taurus-mobile';

  export default {
    components: {
      TButton
    },
    methods: {
      openIndicator () {
        Indicator.open();
        setTimeout(() => Indicator.close(), 2000);
      },

      openIndicatorWithSpinner () {
        Indicator.open({ spinnerType: 'fading-circle' });
        setTimeout(() => Indicator.close(), 2000);
      },

      openIndicatorWithText () {
        Indicator.open('加载中...');
        setTimeout(() => Indicator.close(), 2000);
      }
    },

    beforeDestroy () {
      Indicator.close();
    }
  };
```


### Attributes

Indicator组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| text | 当前显示的加载信息文本 | String | - | - |
| spinnerType | 进度条类型 | String | snake,fading-circle,double-bounce,triple-bounce | snake |

[indicator-demo]: /static/mobile-demo/examples/index.html#/indicator

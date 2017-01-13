## TProgress组件

TProgress是一个进度条组件。

### 引入

```js
import { TProgress } from 'ai-taurus-mobile';
```

### 用法

参见[TProgress组件Demo][progress-demo]。

基础用法

TProgress组件支持传入自定义属性来展现不同形态。

```html
<div class="page-progress">
  <h1 class="page-title">Progress</h1>
  <t-cell title="默认">
    <t-progress></t-progress>
  </t-cell>
  <t-cell title="设置 value">
    <t-progress :value="20"></t-progress>
  </t-cell>
  <t-cell title="左右文字">
    <t-progress :value="40">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </t-progress>
  </t-cell>
  <t-cell title="定义线宽">
    <t-progress :value="60" :bar-height="5"></t-progress>
  </t-cell>
  <div class="page-progress-wrapper">
    <t-button size="large" type="primary" @click.native="uploadFile">上传文件</t-button>
    <t-progress :value="value" v-if="progressVisible" transition="progress-fade">
      <div slot="end">{{ value }}%</div>
    </t-progress>
  </div>
</div>
```
```js
import { Toast, TButton, TProgress, TCell } from 'taurus';

export default {
  components: {
    TButton,
    TProgress,
    TCell
  },
  data () {
    return {
      progressVisible: false,
      value: 0,
      uploading: false,
      timer: null
    };
  },

  watch: {
    value (val) {
      if (val >= 100) {
        this.uploading = false;
        this.progressVisible = false;
        setTimeout(() => Toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
        clearTimeout(this.timer);
      }
    }
  },

  methods: {
    uploadFile () {
      if (!this.uploading) {
        this.value = 0;
        this.progressVisible = true;
        this.uploading = true;
        this.timer = setInterval(() => this.value++, 10);
      }
    }
  }
};
```


### Attributes

TProgress组件具有如下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value | 进度条的值（%） | Number | - | - |
| barHeight | 进度条的线宽（像素） | Number | - | 1 |

### Slot
| name | 描述 |
| ---- | ---- |
| start | 滑块左侧 DOM |
| end | 滑块右侧 DOM |

[progress-demo]: /static/mobile-demo/examples/index.html#/progress

<script>
import { TLoading } from 'ai-taurus-desktop';
export default {
  components: {
    TLoading
  },
  data () {
    return {
      loader: 'loader',
      isShow: true,
      enabled: true,
      lightColor: false,
      open: false
    };
  },
  methods: {
    showDefaultLoading () {
      this.$refs.defLoading.showLoading();
    },
    hideDefaultLoading () {
      this.$refs.defLoading.hideLoading();
    },
    showLightLoading () {
      this.$refs.lightLoading.showLoading();
    },
    hideLightLoading () {
      this.$refs.lightLoading.hideLoading();
    },
    showCircleLoading () {
      this.$refs.circleLoading.showLoading();
    },
    hideCircleLoading () {
      this.$refs.circleLoading.hideLoading();
    },
    showSpinnerLoading () {
      this.$refs.spinnerLargeLoading.showLoading();
      this.$refs.spinnerLoading.showLoading();
    },
    hideSpinnerLoading () {
      this.$refs.spinnerLargeLoading.hideLoading();
      this.$refs.spinnerLoading.hideLoading();
    },
    showFullScreenLoading () {
      this.open = true;
      setTimeout(() => {
        this.hideFullScreenLoading();
      }, 3000);
    },
    hideFullScreenLoading () {
      this.open = false;
    },
    onLoadingVisiable () {
      console.log('执行onLoadingVisiable回调');
    },
    onLoadingHidden () {
      console.log('执行onLoadingHidden回调');
    }
  }
};
</script>

## Loading组件

Loading组件是一个交互反馈可视组件，一般用来提醒用户操作正在进行。

### 基本用法

Loading组件具有多种风格。其中包括局部显示和整页显示两种显示模式。

#### **默认风格（局部显示）**

:::demo 注意：`<t-loading>`标记的容器需要脱离文档流（此例添加了`position: relative`样式）

```html
<template>
  <div id="loading-default">
    <div class="form-row myloading">
      <button @click="showDefaultLoading" class="button button--small button--action">显示</button>
      <button @click="hideDefaultLoading" class="button button--small button--action">隐藏</button>
    </div>
    <div style="width:100%;height: 140px;margin: 50px auto 0;position: relative;">
      <t-loading :enabled="true" load-type="loader" :light-color="false" @on-loading-visible="onLoadingVisiable" @on-loading-hidden="onLoadingHidden"
        ref="defLoading"></t-loading>
    </div>
  </div>
</template>
<script>
import { TLoading } from 'ai-taurus-desktop';
export default {
  el: '#loading-default',
  components: {
    TLoading
  },
  data () {
    return {
      loader: 'loader',
      isShow: true,
      enabled: true,
      lightColor: false
    };
  },
  methods: {
    showLoading () {
      this.$refs.myLoading.showLoading();
    },
    hideLoading () {
      this.$refs.myLoading.hideLoading();
    },
    onLoadingVisiable () {
      console.log('已执行onLoadingVisiable回调');
    },
    onLoadingHidden () {
      console.log('已执行onLoadingHidden回调');
    }
  }
};
</script>
```

:::
#### **亮色风格（局部显示）**

:::demo 在这个例子中，组件在背景为深灰色的区域以亮色显示。与默认风格不同的是只要将`light-color`属性设置为`true`组件就会展现为亮色风格。注意：`<t-loading>`标记的容器需要脱离文档流（此例添加了`position: relative`样式）

```html
<template>
  <div id="loading-light">
    <div class="form-row myloading">
      <button @click="showLightLoading" class="button button--small button--action">显示</button>
      <button @click="hideLightLoading" class="button button--small button--action">隐藏</button>
    </div>
    <div style="width:100%;height: 140px;margin: 50px auto 0;background-color: gray;position: relative;" class="loader-test border box--blue">
      <t-loading :enabled="true" load-type="loader" :light-color="true" @on-loading-visible="onLoadingVisiable" @on-loading-hidden="onLoadingHidden"
        ref="lightLoading"></t-loading>
    </div>
  </div>
</template>
<script>
import { TLoading } from 'ai-taurus-desktop';
export default {
  el: '#loading-light',
  components: {
    TLoading
  },
  data () {
    return {
      loader: 'loader',
      isShow: true,
      enabled: true,
      lightColor: false
    }
  },
  methods: {
    showLightLoading () {
      this.$refs.lightLoading.showLoading();
    },
    hideLightLoading () {
      this.$refs.lightLoading.hideLoading();
    },
    onLoadingVisiable () {
      console.log('已执行onLoadingVisiable回调');
    },
    onLoadingHidden () {
      console.log('已执行onLoadingHidden回调');
    }
  }
};
</script>
```

:::
#### **环形风格（局部显示）**

:::demo 将`load-type`属性设置为`circle`就可以将组件展现为环形风格。注意：`<t-loading>`标记的容器需要脱离文档流（此例添加了`position: relative`样式）

```html
<template>
  <div id="loading-circle">
    <div class="form-row myloading">
      <button @click="showCircleLoading" class="button button--small button--action">显示</button>
      <button @click="hideCircleLoading" class="button button--small button--action">隐藏</button>
    </div>
    <div style="height: 140px;margin: 50px auto 0;position: relative;">
      <t-loading :enabled="true" load-type="circle" @on-loading-visible="onLoadingVisiable" @on-loading-hidden="onLoadingHidden"
        ref="circleLoading"></t-loading>
    </div>
  </div>
</template>
<script>
import { TLoading } from 'ai-taurus-desktop';
export default {
  el: '#loading-circle',
  components: {
    TLoading
  },
  data () {
    return {
      enabled: true
    }
  },
  methods: {
    showCircleLoading () {
      this.$refs.circleLoading.showLoading();
    },
    hideCircleLoading () {
      this.$refs.circleLoading.hideLoading();
    },
    onLoadingVisiable () {
      console.log('执行onLoadingVisiable回调');
    },
    onLoadingHidden () {
      console.log('执行onLoadingHidden回调');
    }
  }
};
</script>
```

:::
#### **点状风格（局部显示）**

:::demo 将`load-type`属性设置为`spinner`就可以将组件展现为点状风格。注意：`<t-loading>`标记的容器需要脱离文档流（此例添加了`position: relative`样式）

```html
<template>
  <div id="loading-spinner">
    <div class="form-row myloading">
      <button @click="showSpinnerLoading" class="button button--small button--action">显示</button>
      <button @click="hideSpinnerLoading" class="button button--small button--action">隐藏</button>
    </div>
    <div style="width: 360px;height: 56px;margin: 50px auto 0;position: relative;">
      <t-loading :enabled="true" load-type="spinner" size="large" @on-loading-visible="onLoadingVisiable" @on-loading-hidden="onLoadingHidden"
        ref="spinnerLargeLoading"></t-loading>
    </div>
    <div style="width: 360px;height: 56px;margin: 50px auto 0;position: relative;">
      <t-loading :enabled="true" load-type="spinner" @on-loading-visible="onLoadingVisiable" @on-loading-hidden="onLoadingHidden"
        ref="spinnerLoading"></t-loading>
    </div>
  </div>
</template>
<script>
import { TLoading } from 'ai-taurus-desktop';
export default {
  el: '#loading-spinner',
  components: {
    TLoading
  },
  data () {
    return {
      enabled: true
    }
  },
  methods: {
    showSpinnerLoading () {
      this.$refs.spinnerLargeLoading.showLoading();
      this.$refs.spinnerLoading.showLoading();
    },
    hideSpinnerLoading () {
      this.$refs.spinnerLargeLoading.hideLoading();
      this.$refs.spinnerLoading.hideLoading();
    },
    onLoadingVisiable () {
      console.log('执行onLoadingVisiable回调');
    },
    onLoadingHidden () {
      console.log('执行onLoadingHidden回调');
    }
  }
};
</script>
```

:::
#### **全屏风格（全局显示）**

:::demo 将`load-type`属性设置为`spinner`就可以将组件展现为点状风格。注意：`<t-loading>`标记的容器需要脱离文档流（此例添加了`position: relative`样式）

```html
<template>
  <div id="loading-full-screen">
    <div class="form-row myloading">
      <button @click="showFullScreenLoading" class="button button--small button--action">显示</button>
      <button @click="hideFullScreenLoading" class="button button--small button--action">隐藏</button>
    </div>
    <t-loading :value="open" :full-screen='true' load-type="loader" :clickOverlayClose="true" @on-loading-visible="onLoadingVisiable" @on-loading-hidden="onLoadingHidden" ref="fullScreenLoading">Hello</t-loading>
  </div>
  </div>
</template>
<script>
import { TLoading } from 'ai-taurus-desktop';
export default {
  el: '#loading-full-screen',
  components: {
    TLoading
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    showFullScreenLoading () {
      this.open = true;
      setTimeout(() => {
        this.hideLoading();
      }, 3000);
    },
    hideFullScreenLoading () {
      this.open = false;
    },
    onLoadingVisiable () {
      console.log('执行onLoadingVisiable回调');
    },
    onLoadingHidden () {
      console.log('执行onLoadingHidden回调');
    }
  }
};
</script>
```

:::
### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| loadType | 类型 | String | 'loader'\|'spinner'\|'circle' | 'loader'|
| enabled | 组件是否显示，默认显示。| Boolean | true\|false | true |
| size | 大小，仅在loadType为'spinner'时有效 | String | 'large' | - |
| lightColor | 是否变成浅色，在深色背景时将其设置为true。仅'loader'支持。 | Boolean | true\|false | false |
| fullScreen | 是否全屏模式。true全屏，false不是全屏 | Boolean | true\|false | false |
| value | 此属性为true时，组件默认为显示状态，否则，组件默认为隐藏状态。此属性全屏模式下必传，非全屏模式下可不传 | Boolean | true\|false | false |

### Events

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| on-loading-visible  | 显示Loading时触发 | 一个布尔值，此值表示组件当前的可见状态，true为可见，false为不可见 |
| on-loading-hidden | 隐藏Loading时触发 |  |

### Methods

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| showLoading | 显示组件 |  |
| hideLoading | 隐藏组件 |  |

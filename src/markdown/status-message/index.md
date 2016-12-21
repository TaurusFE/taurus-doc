<script>
import { TStatusMessage } from 'aii-taurus';
export default {
  components: {
    TStatusMessage
  },
  methods: {
    info: function () {
      this.$message({
        type: 'info',
        closable: true,
        delay: 3000,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      }, function () {
        console.log('消息框关闭了');
      });
    },
    success: function () {
      this.$message({
        container: '#msgs',
        type: 'success',
        iconVisibled: true,
        closable: true,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      });
    },
    alert: function () {
      this.$message({
        type: 'alert',
        iconVisibled: false,
        closable: true,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      });
    },
    error: function () {
      this.$message({
        type: 'error',
        closable: true,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      });
    },
    showMsg () {
      this.$refs.msg.show();
    },
    hideMsg () {
      this.$refs.msg.hide();
    }
  }
};
</script>

## Status Message组件

Status Message组件是一个轻量级消息提示组件。它具有定时自动关闭功能。分组件和插件两种使用方式。

### 组件用法

#### **一般用法**

:::demo 这个例子通过javascript脚本控制组件API来显示和隐藏消息提示框。这个例子中的组件实例是永久性实例。

```html
<template>
  <div>
    <div class="form-row">
      <button @click="showMsg" class="button button--small button--action">显示</button>
      <button @click="hideMsg" class="button button--small button--action">隐藏</button>
    </div>
    <div class="form-row">
      <t-status-message content="我是永久实例!<a href='javascript:void(0);' data-role='closer'>OK</a>" :one-off="false" type="success" ref="msg"></t-status-message>
    </div>
  </div>
</template>
<script>
import { TStatusMessage } from 'aii-taurus';
export default {
  components: {
    TStatusMessage
  },
  methods: {
    showMsg () {
      this.$refs.msg.show();
    },
    hideMsg () {
      this.$refs.msg.hide();
    }
  }
};
</script>
```

:::
#### **一次性实例用法**

在需要频繁弹出多个提示信息的业务场景中，需要考虑到资源释放的问题，因此，这类场景需要使用到组件提供的一次性实例模式，在这种模式下，每一个提示框显示后将立即将自己的对象实例销毁以释放内存。

:::demo 第一个例子是定时销毁的一次性提示框实例，它在5秒后将消失！

```html
<template>
  <div>
    <t-status-message content="我是一次性显示的实例!5秒后再见!<a href='javascript:void(0);' data-role='closer'>OK</a>" type="info" :closable="false" :delay="5000"></t-status-message>
    <t-status-message content="我是<a href='javascript:void(0);'>一次性</a>显示的实例!<a href='javascript:void(0);' data-role='closer'>OK</a>" type="error"></t-status-message>
    <t-status-message content="我是一次性显示的实例!<a href='javascript:void(0);' data-role='closer'>OK</a>" type="success" :closable="false"></t-status-message>
    <t-status-message content="我是一次性显示的实例!<a href='javascript:void(0);' data-role='closer'>OK</a>" type="error" :closable="false"></t-status-message>
    <t-status-message content="我是一次性显示的实例!<a href='javascript:void(0);' data-role='closer'>OK</a>" type="alert" :closable="false"></t-status-message>
  </div>
</template>
<script>
import { TStatusMessage } from 'aii-taurus';
export default {
  components: {
    TStatusMessage
  }
};
</script>
```

:::
### 插件用法

通常，如果你需要在整个页面或者某个指定的容器内动态展现一些消息框就可以使用插件方式来调用消息框组件。

消息框插件有两个API：

#### 1. Vue.message

此方法为全局静态方法，你可以在任何地方调用。

此方法有两个参数

| 参数 |  描述 |
| --- | --- |
| options | 选项对象，可以将Props属性通过此对象传入，效果跟Props属性一致 |
| closeCallback | 关闭回调函数，此函数在通过关闭按钮关闭消息框时被回调。自动关闭动作不会回调它。 |

```js
// 显示一条info类型的消息提示
Vue.message({
  type: 'info',
  closable: true,
  delay: 5000,
  content: '这是一条消息文本。'
});

// 显示一条info类型的消息提示，在点击关闭按钮关闭消息框后输出一条日志
Vue.message({
  type: 'info',
  closable: true,
  delay: 5000,
  content: '这是一条消息文本。'
}, function () {
  console.log('再见!');
});
```

#### 2. this.$message

此方法为实例方法，你可以在所有Taurus组件实例内部调用它。

此方法与`Vue.message`方法的参数相同。

```js
// 显示一条info类型的消息提示
this.$message({
  type: 'info',
  closable: true,
  delay: 5000,
  content: '这是一条消息文本。'
});

// 显示一条info类型的消息提示，在点击关闭按钮关闭消息框后输出一条日志
this.$message({
  type: 'info',
  closable: true,
  delay: 5000,
  content: '这是一条消息文本。'
}, function () {
  console.log('再见!');
});
```

#### 例子

:::demo 这个例子演示了插件用法。通常，如果你需要在整个页面或者某个指定的容器内动态展现一些消息框就可以使用插件方式来调用消息框组件。

```html
<template>
  <div>
    <div class="form-row">
      <h1>全局提示（自动关闭）</h1>
      <button @click="info" class="button button--small button--action">Info</button>
      <h1>全局提示</h1>
      <button @click="alert" class="button button--small button--action">Alert</button>
      <button @click="error" class="button button--small button--action">Error</button>
    </div>
    <div class="form-row">
      <h1>局部提示（显示在下面的蓝色区域内）</h1>
      <button @click="success" class="button button--small button--action">Success</button>
    </div>
  </div>
  <div style='background-color:#336699; margin:0 50px 50px 50px; min-height:25px'>
    <div class="form-row" id='msgs'></div>
  </div>
</template>
<script>
import { TStatusMessage } from 'aii-taurus';
export default {
  components: {
    TStatusMessage
  },
  methods: {
    info: function () {
      this.$message({
        type: 'info',
        closable: true,
        delay: 5000,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      }, function () {
        console.log('消息框关闭了');
      });
    },
    success: function () {
      this.$message({
        container: '#msgs',
        type: 'success',
        iconVisibled: true,
        closable: true,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      });
    },
    alert: function () {
      this.$message({
        type: 'alert',
        iconVisibled: false,
        closable: true,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      });
    },
    error: function () {
      this.$message({
        type: 'error',
        closable: true,
        content: '好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！好好学习，天天向上！'
      });
    }
  }
};
</script>
```

:::
### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | 提示信息类型 | String | 'info'\|'success'\|'alert'\|'error' | 'info' |
| visibled | 组件是否显示 | Boolean  | true\|false | true |
| icon-visibled | 组件是否显示图标 | Boolean  | true\|false | true |
| closable | 组件是否显示关闭按钮 | Boolean | true\|false | true |
| one-off | 组件实例是否为一次性实例，如果是一次性实例，那么组件自动关闭后其实例将马上被销毁 | Boolean | true\|false | true |
| content | 组件中提示信息所显示的文字，此文字可以是html片段 | String | - | ' ' |
| delay | 消息提示框自动关闭延迟时间，单位是毫秒 | Number | 大于等于0的整数 | 0 |

### Events

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| message-closed | 消息框被关闭时触发此事件，特别的，如果消息框自动关闭不会触发这个事件！ | - |

### Methods
| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| show| 显示消息框 | - |
| hide| 隐藏消息框 | - |
| close | 关闭消息框，特别的，如果one-off属性为true，那么在调用此方法后组件实例将被马上销毁! | - |

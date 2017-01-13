<script>
import { TConfirm, TModal } from 'ai-taurus-desktop';
export default {
  components: {
    TConfirm,
    TModal
  },
  data () {
    return {
      showDefaultDialogState: false,
      showMoal1State: false,
      confirm: {
        show: false
      },
      confirm2: {
        show: false
      },
      loginModal: false,
      loginModel: {
        username: '',
        password: ''
      },
      showSpecialStateOne: false,
      showSpecialStateTwo: false,
      showFormState: false,
      fullStateOne: false,
      fullStateTwo: false
    };
  },
  methods: {
    showDefaultDialog () {
      this.showDefaultDialogState = true;
    },
    showMoal1 () {
      this.showMoal1State = true;
    },
    showConfirm (type) {
      this.confirm = {
        title: 'Remove Agreement',
        msg: '<p class="text--center">Are you sure you want to remove the agreement from your cart? <br> The atreement cleared</p>',
        show: true
      };
    },
    hdSure () {
      alert('点了确定');
      this.confirm.show = false;
    },
    hdCancel () {
      alert('点了取消');
      this.confirm.show = false;
    },
    showConfirm2 (type) {
      this.confirm2 = {
        title: 'Remove Agreement',
        msg: 'Are you sure you want to remove the agreement from your cart',
        show: true
      };
    },
    hdActionOne () {
      this.confirm2.show = false;
      alert('已点击按钮1');
    },
    hdActionTwo () {
      this.confirm2.show = false;
      alert('已点击按钮2');
    },
    customShow () {
      this.loginModal = true;
    },
    hdLogin () {
      alert(JSON.stringify(this.loginModel));
      this.loginModal = false;
    },
    showSpecialOne () {
      this.showSpecialStateOne = true;
    },
    showSpecialTwo () {
      this.showSpecialStateTwo = true;
    },
    hideSpecialOne () {
      this.showSpecialStateOne = false;
    },
    showForm () {
      this.showFormState = true;
    },
    formSend () {
      this.showFormState = false;
    },
    showFullOne () {
      this.fullStateOne = true;
    },
    showFullTwo () {
      this.fullStateTwo = true;
    },
    full0No () {
      this.fullStateOne = false;
    },
    full0Yes () {
      this.fullStateOne = false;
    },
    full1No () {
      this.fullStateTwo = false;
    },
    full1Yes () {
      this.fullStateTwo = false;
    }
  }
};
</script>

## Modal组件

Modal组件是模态对话框组件，它提供了高自由度的定制能力。

### 基本用法

:::demo

```html
<template>
  <div>
    <button  @click="showDefaultDialog" class="button button--small button--action">显示对话框</button>
    <t-modal title="" v-model="showDefaultDialogState" :hide-icon-close="false" :size="'lg'">
      <div class="text-size--28">知有儿童挑促织，夜深篱落一灯明</div>
      <div class="text-size--16">家中几个小孩还在兴致勃勃地斗蟋蟀呢！夜深人静了还亮着灯不肯睡眠。</div>
    </t-modal>
  </div>
</template>
<script>
import { TModal } from 'ai-taurus-desktop';
export default {
  components: {
    TModal
  },
  data () {
    return {
      showDefaultDialogState: false
    };
  },
  methods: {
    showDefaultDialog () {
      this.showDefaultDialogState = true;
    }
  }
};
</script>
```

:::
### 询问对话框

:::demo 注意：`<t-loading>`标记的容器需要脱离文档流（此例添加了`position: relative`样式）

```html
<template>
  <div>
    <div class="form-row">
      <h1>包含两个按钮的询问对话框</h1>
      <button @click="showConfirm" class="button button--small button--action">显示对话框</button>
      <t-confirm :title="confirm.title" @sure="hdSure" @cancel="hdCancel" type="info" v-model="confirm.show" :msg="confirm.msg">
      </t-confirm>
    </div>

    <div class="form-row">
      <h1>包含三个按钮的询问对话框</h1>
      <button @click="showConfirm2" class="button button--small button--action" >显示对话框</button>
      <t-confirm :title="confirm2.title" type="success" v-model="confirm2.show" :msg="confirm2.msg" :size="'lg'">
        <div slot="body">
          {{confirm2.msg}}
        </div>
        <button class="button button--default button-flex pull-right" slot="footer" @click="hdActionOne">按钮1</button>
        <button class="button button--default button-flex pull-right" slot="footer" @click="hdActionTwo">按钮2</button>
        <button class="button button--action button-flex pull-right" slot="footer">确定</button>
      </t-confirm>
    </div>
  </div>
</template>
<script>
import { TModal } from 'ai-taurus-desktop';
export default {
  components: {
    TModal
  },
  data () {
    return {
      confirm: {
        show: false
      },
      confirm2: {
        show: false
      }
    };
  },
  methods: {
    showConfirm (type) {
      this.confirm = {
        title: 'Remove Agreement',
        msg: '<p class="text--center">Are you sure you want to remove the agreement from your cart? <br> The atreement cleared</p>',
        show: true
      };
    },
    hdSure () {
      alert('点了确定');
      this.confirm.show = false;
    },
    hdCancel () {
      alert('点了取消');
      this.confirm.show = false;
    },
    showConfirm2 (type) {
      this.confirm2 = {
        title: 'Remove Agreement',
        msg: 'Are you sure you want to remove the agreement from your cart',
        show: true
      };
    },
    hdActionOne () {
      this.confirm2.show = false;
      alert('已点击按钮1');
    },
    hdActionTwo () {
      this.confirm2.show = false;
      alert('已点击按钮2');
    },
    customShow () {
      this.loginModal = true;
    }
  }
};
</script>
```

:::

### 表单对话框

:::demo 这个例子里对话框内容全部是表单元素。

```html
<template>
  <div class="form-row">
    <h1>登录对话框</h1>
    <button @click="customShow" class="button button--small button--action">显示对话框</button>
    <t-modal title="Login Modal" v-model="loginModal" :click-overlay-close="false">
      <div class="login-modal">
        <div class="form-item--multi form-row">
          <div class="form-item form-col--med">
            <input label="用户名" type="text" placeholder="User name" v-model="loginModel.username">
          </div>
          <div class="form-item">
            <input label="密码" type="text" placeholder="Password" v-model="loginModel.password" type="password">
          </div>
        </div>
      </div>
      <div class="block--col">
        <div class="float--right form-row">
          <button text="取消" slot="footer" class="button button--small button--default" @click="loginModal=false">取消</button>
          <button text="登录" slot="footer" class="button button--small button--action" @click="hdLogin" color="red">登录</button>
        </div>
      </div>
    </t-modal>
  </div>
  <div>
    <h1>数据搜集对话框</h1>
    <button @click="showForm" class="button button--small button--action" >显示对话框</button>
    <t-modal title="" v-model="showFormState" :hide-close="true" :hide-icon-close="false" :size="'lg'" :special="true">
      <div>
        <div class="border box--greyed padding-whole leader trailer">
            <div class="form-item form-item--required">
              <label>Label</label>
              <div class="rel leader--xsmall">
                  <input type="text">
              </div>
            </div>
            <div class="form-item form-item--required">
              <label>Email</label>
              <div class="rel leader--xsmall">
                <input type="text">
              </div>
            </div>
            <div class="form-item">
              <div class="form-checkbox form-checkbox--small">
                  <input type="checkbox" checked="" name="cbs-small-0" id="cbs-small-0" value="--some-value--">
                  <label class="text--small" for="cbs-inline-0">Yes, Telenor may contact me via email about the selected telephone.</label>
              </div>
            </div>
        </div>
        <div class="form-item text--right">
            <button type="submit" class="button button--action" name="subscribe" data-submit="true" data-component="button">
                <span class="button__label padding-toleft padding-toright" @click="formSend">Send</span>
            </button>
        </div>
      </div>
    </t-modal>
  </div>
</template>
<script>
import { TModal } from 'ai-taurus-desktop';
export default {
  components: {
    TModal
  },
  data () {
    return {
      showFormState: false,
      loginModal: false,
      loginModel: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    showForm () {
      this.showFormState = true;
    },
    formSend () {
      this.showFormState = false;
    },
    hdLogin () {
      alert(JSON.stringify(this.loginModel));
      this.loginModal = false;
    }
  }
};
</script>
```

:::
### 个性化对话框 I

:::demo 这个例子里的对话框有背景图。

```html
<template>
  <div>
    <div class="form-row">
      <h1>个性化对话框1</h1>
      <button @click="showSpecialOne" class="button button--small button--action" >显示对话框</button>
      <t-modal title="" v-model="showSpecialStateOne" :hide-close="true" :hide-icon-close="false" :size="'lg'" :special="true" :pre-light="true">
        <div>
          <form>
            <div class="form-row">
              <div class="form-item form-item--required">
                <label class="pull-left">必填项</label>
                <div class="rel leader--xsmall">
                  <input type="text">
                </div>
              </div>
            </div>
            <div class="form-row">
              <button  @click="hideSpecialOne" class="button button--accept stretch-mobile toleft mobile-toleft--none">
                  关闭<span class="button__label icon--right icon-arrow-next"></span>
              </button>
            </div>
          </form>
        </div>
      </t-modal>
    </div>

    <div class="form-row">
      <h1>个性化对话框2</h1>
      <button @click="showSpecialTwo" class="button button--small button--action" >显示对话框</button>
      <t-modal title="发生了一个错误" v-model="showSpecialStateTwo" :hide-close="true" :hide-icon-close="false" :size="'lg'" :special="true" :pre-light="true">
        <div slot="header-icon">
          <span class="text-size--84 color-yellow icon-reject"></span>
        </div>
        <div>详细错误信息...</div>
      </t-modal>
    </div>
  </div>
</template>
<script>
import { TModal } from 'ai-taurus-desktop';
export default {
  components: {
    TModal
  },
  data () {
    return {
      showSpecialStateOne: false,
      showSpecialStateTwo: false
    };
  },
  methods: {
    showSpecialOne () {
      this.showSpecialStateOne = true;
    },
    showSpecialTwo () {
      this.showSpecialStateTwo = true;
    },
    hideSpecialOne () {
      this.showSpecialStateOne = false;
    }
  }
};
</script>
```

:::
### 个性化对话框 II

:::demo

```html
<template>
  <div>
    <div class="form-row">
      <h1>个性化对话框3</h1>
      <button @click="showFullOne" class="button button--small button--action" >显示对话框</button>
      <t-modal title="知有儿童挑促织，夜深篱落一灯明" v-model="fullStateOne" :hide-close="true" :hide-icon-close="false" :size="'lg'" :special="true" :full-button="true">
        <div >
          <div class="padding-whole">家中几个小孩还在兴致勃勃地斗蟋蟀呢！夜深人静了还亮着灯不肯睡眠。</div>
          <div class="grid-row--gutter-none mobile-padding-whole--xlarge text--center">
              <div class="col-md-6">
                  <a href="#" class="display--block button-right button button--default text-size--21 mobile-text-size--16 text-light" style="padding:20px;border-radius: 0;border:0;height:auto;" @click="full0No">No</a>
              </div>
              <div class="col-md-6">
                <a href="#" class="display--block button-right button button--action text-size--21 mobile-text-size--16 text-light" style="padding:20px;border-radius: 0;border:0;height:auto;" @click="full0Yes">Yes</a>
              </div>
          </div>
        </div>
      </t-modal>
    </div>
    <div class="form-row">
      <h1>个性化对话框4</h1>
      <button @click="showFullTwo" class="button button--small button--action" >显示对话框</button>
      <t-modal title="知有儿童挑促织，夜深篱落一灯明"  :hide-close="true" :hide-icon-close="false" :size="'lg'" :special="true" :full-header="true" v-model="fullStateTwo">
        <div >
          <div class="padding-whole">家中几个小孩还在兴致勃勃地斗蟋蟀呢！夜深人静了还亮着灯不肯睡眠。</div>
        </div>
      </t-modal>
    </div>
  </div>
</template>
<script>
import { TModal } from 'ai-taurus-desktop';
export default {
  components: {
    TModal
  },
  data () {
    return {
      fullStateOne: false,
      fullStateTwo: false
    };
  },
  methods: {
    showFullOne () {
      this.fullStateOne = true;
    },
    showFullTwo () {
      this.fullStateTwo = true;
    }
  }
};
</script>
```

:::
### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| v-model | 对话框是否可见，异步的 | Boolean | true\|false | false |
| title | 标题，常用于confirm配置 | String  | - | '' |
| msg | 详细描述，可以是字符串或者模板字符串，常用于confirm配置 | String | - | '' |
| size | 对话框大小 | String | 'sm'\|'lg' | 'sm' |
| clickOverlayClose | 点击遮罩层是否关闭弹框 | Boolean | true\|false | false |
| hideIconClose | 是否显示关闭按钮 | Boolean | true\|false | true |
| hideClose | 把底部插槽是否隐藏 | Boolean | true\|false | false |
| special | 弹框是否有渐变色的top边框 | Boolean  | true\|false | false |
| pre-light | 弹框背景是否为蓝色 | Boolean | true\|false | false |
| full-button | 按钮是否是充满按钮栏区域 | Boolean  | true\|false | false |
| full-header | 对话框头部文本是否是充满对话框内容区域 | Boolean  | true\|false | false |

以下属性仅支持Confirm类型对话框

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| type | Confirm类型 | String  | 'info'\|'success'\|'error'\|'question' | 'info' |

### Events

| 事件名称 | 说明 | 回调参数 |
| ------- | ---- | ------- |
| @sure/on-sure | Confirm非自定义的时候，点击Sure触发 | - |
| @cancel/on-cancel | Confirm非自定义的时候，点击Cancel触发 | - |

### Methods

| 方法名称 | 说明 | 方法参数 |
| ------- | ---- | ------- |
| close | 点击遮罩层或右上角叉或取消按钮的回调 | - |

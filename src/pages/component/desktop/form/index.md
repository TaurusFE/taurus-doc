<script>
    import { TForm, TFormItem, TButton, TInput, TBoxGroup, TSelect} from "ai-taurus-desktop"
    export default {
      components: {
        TForm,
        TFormItem,
        TButton,
        TInput,
        TBoxGroup,
        TSelect
      },
      data () {
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
          }
          setTimeout(() => {
            if (!Number.isInteger(value)) {
              callback(new Error('请输入数字值'));
            } else {
              if (value < 18) {
                callback(new Error('必须年满18岁'));
              } else {
                callback();
              }
            }
          }, 1000);
        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.registerModel.checkPass !== '') {
              this.$refs.registerForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.registerModel.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        var checkBand = (rule, value, callback) => {
          if (value.length === 0) {
            callback(new Error('请至少选择一个'));
          }
        };
        var checkPhone = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入手机号码'));
          } else if (!/^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/.test(value)) {
            callback(new Error('手机号码格式错误'));
          }
        };
        return {
          collapse: true,
          optionData: [{label: '+86', value: '+86'}, {label: '+87', value: '+87'}, {label: '+99', value: '+99'}],
          phoneSuffix: '',
          result: '',
          hobbyArray: 'apple,sony',
          hobbyLabels: 'Apple,Sony',
          bandArray: 'apple,sony,nokia',
          bandLabels: 'Apple,Sony,Nokia',
          ruleForm2: {
            pass: '',
            checkPass: '',
            age: '',
            hobby: ['sony'],
            band: []
          },
          registerModel: {
            email: '',
            pass: '',
            checkPass: '',
            nickname: '',
            hab: '',
            phone: '',
            cap: '',
            hobby: ['sony'],
            band: []
          },
          register: {
            pass: [
              { required: true, validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { required: true, validator: validatePass2, trigger: 'blur' }
            ],
            email: [
              {
                required: true, message: '请输入邮箱地址', trigger: 'blur'
              },
              {
                type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur, change'
              }
            ],
            phone: [
              { required: true, message: '请输入电话号码', trigger: 'blur' },
              { validator: checkPhone, message: '请输入正确的电话号码', trigger: 'blur, change' }
            ],
            band: [
              { required: true, validator: checkBand }
            ]
          },
          rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur, change' }
            ],
            band: [
              { required: true, validator: checkBand }
            ]
          }
        };
      },
      methods: {
        toggle () {
          let vm = this;
          setTimeout(() => {
            vm.collapse = !vm.collapse;
          }, 500);
          // setTimeout(function () {
          //   alert('ok');
          // }, 1000);
        },

        handleReset2 () {
          this.$refs.registerForm.resetFields();
        },
        handleSubmit2 (ev) {
          debugger;
          this.$refs.registerForm.validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        getFormValue () {
          this.result = this.$refs.ruleForm2.getFieldValue();
        }
      },
      computed: {
        hobbyChecked () {
          let checked = 'false, false'.split(',');
          let array = this.hobbyArray.split(',');
          for (let i in array) {
            if (array[i] === this.ruleForm2.hobby[0]) {
              checked[i] = true;
            }
          }
          return checked.join(',');
        },
        bandChecked () {
          let checked = 'false,false,false'.split(',');
          let array = this.bandArray.split(',');
          if (this.ruleForm2.band.length > 0) {
            let band = this.ruleForm2.band;
            for (let i in band) {
              for (let j in checked) {
                if (array[j] === band[i]) {
                  checked[j] = 'true';
                }
              }
            }
          }
          console.log(checked.join(','));
          return checked.join(',');
        }
      }
  };
</script>
<style scoped>
  .t-form--inline .t-input {
      width: 200px;
    }

    h2 {
      margin-bottom: 20px;
    }

    .login-form {
      max-width: 300px;
    }
    .login-form-forget {
      float: right;
    }

    ul.form-item {
      display: inline-block;
    }

    .register-form {
      max-width: 640px;
    }
    .register-form .t-input {
      width: 300px;
    }
    .t-input-group__prepend .form-select {
      margin: 0 -10px;
    }
    .collapse .seach-field:nth-of-type(n+7) {
      display: none;
    }
    .expand .seach-field:nth-of-type(n+7) {
      display: block;
    }
</style>
## Form 组件

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框等元素。

### 水平登录栏

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`on-text`属性与`off-text`属性来设置开关的文字描述。
```html
<template>
  <t-form :inline="true">
       <t-form-item>
         <t-input placeholder="Username">
           <i class="icon icon-user" slot="prepend"></i>
         </t-input>
       </t-form-item>
       <t-form-item>
         <t-input type="password" placeholder="Password">
           <i class="icon icon-locked" slot="prepend"></i>
         </t-input>
       </t-form-item>
       <t-form-item>
         <t-button text="Login" class="button button--action"></t-button>
       </t-form-item>
     </t-form>
</template>
<script>
  import {TSwitcher} from 'ai-taurus-desktop'
  export default {
    components: {
      TSwitcher
    },
    return {
        small: {
          'on': 'Yes',
          'off': 'No'
        }
      }
  };
</script>
```
:::
### 普通登录框

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```html
<template>
   <t-form class="login-form">
        <t-form-item>
          <t-input placeholder="Username">
            <i class="icon icon-user" slot="prepend"></i>
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-input type="password" placeholder="Password">
            <i class="icon icon-locked" slot="prepend"></i>
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-box-group type="checkbox" labels="Remember me" value="check" checked="true"></t-box-group>
          <a href="#" class="login-form-forget">forget password</a>
          <t-button text="Login" class="button button--action" :stretch="true"></t-button>
          <span>Or </span><a href="">register now!</a>
        </t-form-item>
      </t-form>
</template>
<script>
  import {TSwitcher} from 'ai-taurus-desktop'
  export default {
    data() {
      return {
        two: {
          'on': 'Y',
          'off': 'N',
          disabled: true
        },
      }
    },
    components: {
      TSwitcher
    }
  };
</script>
```
:::
### 注册新用户

:::demo 设置`wide`属性，接受一个`Boolean`，设置`true`即可使用加长状态。或者在标签上加上wide属性

```html
  <template>
     <t-form class="register-form" :model="registerModel" :rules="register" ref="registerForm" label-width="135px">
          <t-form-item label="E-mail" prop="email">
            <t-input v-model="registerModel.email"></t-input>
          </t-form-item>
          <t-form-item label="Password" prop="pass">
            <t-input type="password" v-model="registerModel.pass">
            </t-input>
          </t-form-item>
          <t-form-item label="Confirm Password" prop="checkPass">
            <t-input type="password" v-model="registerModel.checkPass">
            </t-input>
          </t-form-item>
          <t-form-item label="Nickname" prop="nickname">
            <t-input>
            </t-input>
          </t-form-item>
          <t-form-item label="Habitual Residence" prop="hab">
            <t-input>
            </t-input>
          </t-form-item>
          <t-form-item label="Phone Number" prop="phone">
            <t-input v-model="registerModel.phone">
              <div slot="prepend">
                <t-select ref="select1" :options="optionData" :default-value="+86" v-model="phoneSuffix"  style="width:100px;"></t-select>
              </div>
              </div>
            </t-input >
          </t-form-item>
          <t-form-item label="Captcha" prop="cap">
            <t-input>
            </t-input>
            <t-button text="Get captcha" class="button button--default"></t-button>
          </t-form-item>
          <t-form-item label="兴趣" prop="hobby">
            <t-box-group type="radiobox" :labels="hobbyLabels" v-model="registerModel.hobby" :value="hobbyArray"
                         :checked="hobbyChecked" inline="true"></t-box-group>
          </t-form-item>
          <t-form-item label="品牌" prop="band">
            <t-box-group type="checkbox" :labels="bandLabels" v-model="registerModel.band" :value="bandArray"
                         :checked="bandChecked" inline="true"></t-box-group>
          </t-form-item>
          <t-form-item>
            <t-button text="Register" class="button button--action" @btn-click="handleSubmit2" ></t-button>
          </t-form-item>
        </t-form>
  </template>
  <script>
  import {TSwitcher} from 'ai-taurus-desktop'
  export default {
    data() {
      return {
        three: {
          'on': '开',
          'off': '关'
        }
      }
    },
    components: {
      TSwitcher
    }
  };
  </script>
```
:::

### 高级搜索
:::demo 只需要在`on-text`和`off-text`属性中设置`<i></i>`就可以使开关状态显示为图标
```html
  <template>
      <t-form :inline="true" :class="[collapse ? 'collapse' : 'expand' ]" ref="advanceSearch">
          <div class="grid-row " >
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 0" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 1" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 2" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 3" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 4" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 5" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 6" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 7" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 8" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
            <div class="col-md-4 seach-field">
              <t-form-item label="Field 9" label-width="80px">
                <t-input ></t-input>
              </t-form-item>
            </div>
          </div>
          <div class="grid-row">
            <div class="col-md-4 col-md-offset-8 text--center">
              <t-form-item>
                <t-button class="button button--action toright--small" text="Seach"></t-button>
                <t-button class="button button--default toright--small" text="Clear"></t-button>
                <a href="javascript:void(0)" @click="toggle">Collapse<i class="icon" :class="[ collapse ? 'icon-arrow-down' : 'icon-arrow-up']"></i></a>
              </t-form-item>
            </div>
          </div>
        </t-form>
  </template>
  <script>
  import {TSwitcher} from 'ai-taurus-desktop'
  export default {
    data() {
      return {
       four: {
          'on':'<i class="icon icon-add"></i>',
          'off': '<i class="icon icon-remove"></i>'
        }
      }
    },
    components: {
      TSwitcher
    }
  };
  </script>
```
:::
### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| wide  | 是否加宽    | boolean   | — | false |
| on-text  | switch 打开时的文字    | string   | — | ON |
| off-text  | switch 关闭时的文字    | string   | — | OFF |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| on-change  | switcher状态发生变化时的回调函数    | 新状态的布尔值 |


### Methods
| 方法名称      | 说明    | 方法参数      |
|---------- |-------- |---------- |
| toggle | 切换switcher的状态| — |
| getValue | 获取switcher的开关状态| — |
| setValue | 设置switcher的状态| `true`: open ,`false`:关闭 |
| disable | 设置switcher为禁用状态| — |
| enable | 设置switcher的为可用状态| — |

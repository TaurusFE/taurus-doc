<script>
  import {cookieHelper, taurus, taurusConstant} from 'ai-taurus-desktop';

  export default {
    data: function () {
      return {
        sec_auth_token_key: '--',
        sec_auth_tenant_key: '--',
        sec_auth_roletype_key: '--',
        sec_auth_zone_key: '--',
        bizInfoKey: {
          customer_id: 'CUSTOMER_ID',
          org_id: 'ORG_ID',
          role_type: 'ROLE_TYPE',
          product_type: 'PRODUCT_TYPE'
        },
        bizInfoValue: {
          customer_id: '',
          org_id: '',
          role_type: '',
          product_type: ''
        }
      };
    },
    methods: {
            writeCookie: function () {
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TOKEN_KEY, '7faf3df3d00c809b4e67b13f2778850e3f8d2fa241e143401d09c691fb6b5d5c');
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TENANT_KEY, '10');
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ROLETYPE_KEY, 'Operator');
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ZONE_KEY, '+0900');
              this.readCookie();
            },
            readCookie: function () {
              this.sec_auth_token_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_TOKEN_KEY);
              this.sec_auth_tenant_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_TENANT_KEY);
              this.sec_auth_roletype_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_ROLETYPE_KEY);
              this.sec_auth_zone_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_ZONE_KEY);
            },
            removeCookie: function () {
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TOKEN_KEY);
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TENANT_KEY);
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ROLETYPE_KEY);
              cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ZONE_KEY);
              this.sec_auth_token_key = '--';
              this.sec_auth_tenant_key = '--';
              this.sec_auth_roletype_key = '--';
              this.sec_auth_zone_key = '--';
            },
            writeBizCookie: function () {
              taurus.setBizInfo(this.bizInfoKey.customer_id, '201610178909');
              taurus.setBizInfo(this.bizInfoKey.org_id, '876829');
              taurus.setBizInfo(this.bizInfoKey.role_type, '1');
              taurus.setBizInfo(this.bizInfoKey.product_type, '21000');
              this.readBizCookie();
            },
            rewriteBizCookie: function () {
              taurus.setBizInfo(this.bizInfoKey.customer_id, '9999999999');
              taurus.setBizInfo(this.bizInfoKey.org_id, '88888');
              taurus.setBizInfo(this.bizInfoKey.role_type, '2');
              taurus.setBizInfo(this.bizInfoKey.product_type, '99000');
              this.readBizCookie();
            },
            readBizCookie: function () {
              this.bizInfoValue.customer_id = taurus.getBizInfo(this.bizInfoKey.customer_id);
              this.bizInfoValue.org_id = taurus.getBizInfo(this.bizInfoKey.org_id);
              this.bizInfoValue.role_type = taurus.getBizInfo(this.bizInfoKey.role_type);
              this.bizInfoValue.product_type = taurus.getBizInfo(this.bizInfoKey.product_type);
            },
            removeBizCookie: function () {
              taurus.removeBizInfo(this.bizInfoKey.customer_id);
              taurus.removeBizInfo(this.bizInfoKey.org_id);
              taurus.removeBizInfo(this.bizInfoKey.role_type);
              taurus.removeBizInfo(this.bizInfoKey.product_type);
              this.readBizCookie();
            }
          }
  };
</script>

## CookieHelper插件

CookieHelper插件提供了对cookie的读写操作能力。

### 基本用法

:::demo

```html
<div class="form-row">
  <button class="button button--small button--action" v-on:click="writeCookie">write cookie</button>
  <button class="button button--small button--action" v-on:click="readCookie">read cookie</button>
  <button class="button button--small button--action" v-on:click="removeCookie">remove cookie</button>
</div>
<div>
  <div><strong>SEC_AUTH_TOKEN_KEY: </strong>{{ sec_auth_token_key }}</div>
  <div><strong>SEC_AUTH_TENANT_KEY: </strong>{{ sec_auth_tenant_key }}</div>
  <div><strong>SEC_AUTH_ROLETYPE_KEY: </strong>{{ sec_auth_roletype_key }}</div>
  <div><strong>SEC_AUTH_ZONE_KEY: </strong>{{ sec_auth_zone_key }}</div>
</div>
<script>
    import {cookieHelper, taurus, taurusConstant} from 'ai-taurus-desktop';

    export default {
      data: function () {
        return {
          sec_auth_token_key: '--',
          sec_auth_tenant_key: '--',
          sec_auth_roletype_key: '--',
          sec_auth_zone_key: '--'
        };
      },
      methods: {
        writeCookie: function () {
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TOKEN_KEY, '7faf3df3d00c809b4e67b13f2778850e3f8d2fa241e143401d09c691fb6b5d5c');
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TENANT_KEY, '10');
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ROLETYPE_KEY, 'Operator');
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ZONE_KEY, '+0900');
          this.readCookie();
        },
        readCookie: function () {
          this.sec_auth_token_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_TOKEN_KEY);
          this.sec_auth_tenant_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_TENANT_KEY);
          this.sec_auth_roletype_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_ROLETYPE_KEY);
          this.sec_auth_zone_key = cookieHelper.readCookie(taurusConstant.SEC_AUTH_ZONE_KEY);
        },
        removeCookie: function () {
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TOKEN_KEY);
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_TENANT_KEY);
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ROLETYPE_KEY);
          cookieHelper.writeCookie(taurusConstant.SEC_AUTH_ZONE_KEY);
          this.sec_auth_token_key = '--';
          this.sec_auth_tenant_key = '--';
          this.sec_auth_roletype_key = '--';
          this.sec_auth_zone_key = '--';
        }
    };
</script>
```
:::

### 业务自定义Cookie操作演示

:::demo

```html
<div class="form-row">
  <button class="button button--small button--action" v-on:click="writeBizCookie">write cookie</button>
  <button class="button button--small button--action" v-on:click="rewriteBizCookie">rewrite cookie</button>
  <button class="button button--small button--action" v-on:click="readBizCookie">read cookie</button>
  <button class="button button--small button--action" v-on:click="removeBizCookie">remove cookie</button>
</div>
<div>
  <div><strong>CUSTOMER_ID: </strong>{{ bizInfoValue.customer_id }}</div>
  <div><strong>ORG_ID: </strong>{{ bizInfoValue.org_id }}</div>
  <div><strong>ROLE_TYPE: </strong>{{ bizInfoValue.role_type }}</div>
  <div><strong>PRODUCT_TYPE: </strong>{{ bizInfoValue.product_type }}</div>
</div>
<script>
  import {cookieHelper, taurus, constant} from 'ai-taurus-desktop';

  export default {
    data: function () {
      return {
        bizInfoKey: {
          customer_id: 'CUSTOMER_ID',
          org_id: 'ORG_ID',
          role_type: 'ROLE_TYPE',
          product_type: 'PRODUCT_TYPE'
        },
        bizInfoValue: {
          customer_id: '',
          org_id: '',
          role_type: '',
          product_type: ''
        }
      };
    },
    methods: {
      writeBizCookie: function () {
        taurus.setBizInfo(this.bizInfoKey.customer_id, '201610178909');
        taurus.setBizInfo(this.bizInfoKey.org_id, '876829');
        taurus.setBizInfo(this.bizInfoKey.role_type, '1');
        taurus.setBizInfo(this.bizInfoKey.product_type, '21000');
        this.readBizCookie();
      },
      rewriteBizCookie: function () {
        taurus.setBizInfo(this.bizInfoKey.customer_id, '9999999999');
        taurus.setBizInfo(this.bizInfoKey.org_id, '88888');
        taurus.setBizInfo(this.bizInfoKey.role_type, '2');
        taurus.setBizInfo(this.bizInfoKey.product_type, '99000');
        this.readBizCookie();
      },
      readBizCookie: function () {
        this.bizInfoValue.customer_id = taurus.getBizInfo(this.bizInfoKey.customer_id);
        this.bizInfoValue.org_id = taurus.getBizInfo(this.bizInfoKey.org_id);
        this.bizInfoValue.role_type = taurus.getBizInfo(this.bizInfoKey.role_type);
        this.bizInfoValue.product_type = taurus.getBizInfo(this.bizInfoKey.product_type);
      },
      removeBizCookie: function () {
        taurus.removeBizInfo(this.bizInfoKey.customer_id);
        taurus.removeBizInfo(this.bizInfoKey.org_id);
        taurus.removeBizInfo(this.bizInfoKey.role_type);
        taurus.removeBizInfo(this.bizInfoKey.product_type);
        this.readBizCookie();
      }
    }
  }
</script>
```

:::

### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| writeCookie |  (key, value, options) | 将key为value的键值对写入cookie |
| readCookie |  (key, converter) | 根据key读取cookie，如果指定了converter则使用它对key对应的值进行处理 |
| removeCookie | (key, options) | 根据key删除cookie中的值 |

以上`options`可选项如下：

| 选项名 | 描述 |
| ----- | ---- |
| expires | 失效时间，是一个数字，单位为毫秒 |
| path | cookie所在的目录 |
| domain | 设置cookie所在的域 |
| secure | 仅用于https协议。它表示创建的cookie只能在https连接中被浏览器传递到服务器端进行会话验证 |

<script>
  import {cookieHelper, taurus, constant, localStorage} from 'aii-taurus';

  export default {
    ready () {
      this.bizInfoValue.customer_name = localStorage.get(this.bizInfoKey.customer_name);
      this.bizInfoValue.address = localStorage.get(this.bizInfoKey.address);
    },
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
          product_type: 'PRODUCT_TYPE',
          customer_name: 'CUSTOMER_NAME',
          address: 'ADDRESS'
        },
        bizInfoValue: {
          customer_id: '',
          org_id: '',
          role_type: '',
          product_type: '',
          customer_name: '',
          address: ''
        }
      };
    },
    methods: {
            writeCookie: function () {
              debugger;
              cookieHelper.writeCookie(constant.SEC_AUTH_TOKEN_KEY, '7faf3df3d00c809b4e67b13f2778850e3f8d2fa241e143401d09c691fb6b5d5c');
              cookieHelper.writeCookie(constant.SEC_AUTH_TENANT_KEY, '10');
              cookieHelper.writeCookie(constant.SEC_AUTH_ROLETYPE_KEY, 'Operator');
              cookieHelper.writeCookie(constant.SEC_AUTH_ZONE_KEY, '+0900');
              this.readCookie();
            },
            readCookie: function () {
              this.sec_auth_token_key = cookieHelper.readCookie(constant.SEC_AUTH_TOKEN_KEY);
              this.sec_auth_tenant_key = cookieHelper.readCookie(constant.SEC_AUTH_TENANT_KEY);
              this.sec_auth_roletype_key = cookieHelper.readCookie(constant.SEC_AUTH_ROLETYPE_KEY);
              this.sec_auth_zone_key = cookieHelper.readCookie(constant.SEC_AUTH_ZONE_KEY);
            },
            removeCookie: function () {
              cookieHelper.writeCookie(constant.SEC_AUTH_TOKEN_KEY);
              cookieHelper.writeCookie(constant.SEC_AUTH_TENANT_KEY);
              cookieHelper.writeCookie(constant.SEC_AUTH_ROLETYPE_KEY);
              cookieHelper.writeCookie(constant.SEC_AUTH_ZONE_KEY);
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
            },
            writeLocalStorage () {
              localStorage.set(this.bizInfoKey.customer_name, 'Wendy');
              localStorage.set(this.bizInfoKey.address, 'Nanjing');
              this.readLocalStorage();
            },
            rewriteLocalStorage () {
              localStorage.set(this.bizInfoKey.customer_name, 'Teemo');
              localStorage.set(this.bizInfoKey.address, 'Home');
              this.readLocalStorage();
            },
            readLocalStorage () {
              this.bizInfoValue.customer_name = localStorage.get(this.bizInfoKey.customer_name);
              this.bizInfoValue.address = localStorage.get(this.bizInfoKey.address);
            },
            removeLocalStorage () {
              localStorage.remove(this.bizInfoKey.customer_name);
              localStorage.remove(this.bizInfoKey.address);
              this.readLocalStorage();
            }
          }
  };
</script>

## Cookie-Helper

cookie-helper 封装了cookie的读写等操作

### Cookie操作演示

:::demo

```html
      <div class="form-row">
        <button class="button button--action" v-on:click="writeCookie">write cookie</button>
        <button class="button button--action" v-on:click="readCookie">read cookie</button>
        <button class="button button--action" v-on:click="removeCookie">remove cookie</button>
      </div>
      <div>
        <div><strong>SEC_AUTH_TOKEN_KEY: </strong>{{ sec_auth_token_key }}</div>
        <div><strong>SEC_AUTH_TENANT_KEY: </strong>{{ sec_auth_tenant_key }}</div>
        <div><strong>SEC_AUTH_ROLETYPE_KEY: </strong>{{ sec_auth_roletype_key }}</div>
        <div><strong>SEC_AUTH_ZONE_KEY: </strong>{{ sec_auth_zone_key }}</div>
      </div>
<script>
    import {cookieHelper, taurus, constant, localStorage} from 'aii-taurus';

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
          cookieHelper.writeCookie(constant.SEC_AUTH_TOKEN_KEY, '7faf3df3d00c809b4e67b13f2778850e3f8d2fa241e143401d09c691fb6b5d5c');
          cookieHelper.writeCookie(constant.SEC_AUTH_TENANT_KEY, '10');
          cookieHelper.writeCookie(constant.SEC_AUTH_ROLETYPE_KEY, 'Operator');
          cookieHelper.writeCookie(constant.SEC_AUTH_ZONE_KEY, '+0900');
          this.readCookie();
        },
        readCookie: function () {
          this.sec_auth_token_key = cookieHelper.readCookie(constant.SEC_AUTH_TOKEN_KEY);
          this.sec_auth_tenant_key = cookieHelper.readCookie(constant.SEC_AUTH_TENANT_KEY);
          this.sec_auth_roletype_key = cookieHelper.readCookie(constant.SEC_AUTH_ROLETYPE_KEY);
          this.sec_auth_zone_key = cookieHelper.readCookie(constant.SEC_AUTH_ZONE_KEY);
        },
        removeCookie: function () {
          cookieHelper.writeCookie(constant.SEC_AUTH_TOKEN_KEY);
          cookieHelper.writeCookie(constant.SEC_AUTH_TENANT_KEY);
          cookieHelper.writeCookie(constant.SEC_AUTH_ROLETYPE_KEY);
          cookieHelper.writeCookie(constant.SEC_AUTH_ZONE_KEY);
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
        <button class="button button--action" v-on:click="writeBizCookie">write cookie</button>
        <button class="button button--action" v-on:click="rewriteBizCookie">rewrite cookie</button>
        <button class="button button--action" v-on:click="readBizCookie">read cookie</button>
        <button class="button button--action" v-on:click="removeBizCookie">remove cookie</button>
      </div>
      <div>
        <div><strong>CUSTOMER_ID: </strong>{{ bizInfoValue.customer_id }}</div>
        <div><strong>ORG_ID: </strong>{{ bizInfoValue.org_id }}</div>
        <div><strong>ROLE_TYPE: </strong>{{ bizInfoValue.role_type }}</div>
        <div><strong>PRODUCT_TYPE: </strong>{{ bizInfoValue.product_type }}</div>
      </div>
<script>
    import {cookieHelper, taurus, constant, localStorage} from 'aii-taurus';

    export default {
      data: function () {
        return {
          bizInfoKey: {
            customer_id: 'CUSTOMER_ID',
            org_id: 'ORG_ID',
            role_type: 'ROLE_TYPE',
            product_type: 'PRODUCT_TYPE',
            customer_name: 'CUSTOMER_NAME',
            address: 'ADDRESS'
          },
          bizInfoValue: {
            customer_id: '',
            org_id: '',
            role_type: '',
            product_type: '',
            customer_name: '',
            address: ''
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

### localStorage操作演示

:::demo

```html
      <div class="form-row">
        <button class="button button--action" v-on:click="writeLocalStorage">write localStorage</button>
        <button class="button button--action" v-on:click="rewriteLocalStorage">rewrite localStorage</button>
        <button class="button button--action" v-on:click="readLocalStorage">read localStorage</button>
        <button class="button button--action" v-on:click="removeLocalStorage">remove localStorage</button>
      </div>
      <div>
        <div><strong>CUSTOMER_NAME: </strong>{{ bizInfoValue.customer_name }}</div>
        <div><strong>ADDRESS: </strong>{{ bizInfoValue.address }}</div>
      </div>
<script>
    import {cookieHelper, taurus, constant, localStorage} from 'aii-taurus';

    export default {
      ready () {
        this.bizInfoValue.customer_name = localStorage.get(this.bizInfoKey.customer_name);
        this.bizInfoValue.address = localStorage.get(this.bizInfoKey.address);
      },
      methods: {
        writeLocalStorage () {
          localStorage.set(this.bizInfoKey.customer_name, 'Wendy');
          localStorage.set(this.bizInfoKey.address, 'Nanjing');
          this.readLocalStorage();
        },
        rewriteLocalStorage () {
          localStorage.set(this.bizInfoKey.customer_name, 'Teemo');
          localStorage.set(this.bizInfoKey.address, 'Home');
          this.readLocalStorage();
        },
        readLocalStorage () {
          this.bizInfoValue.customer_name = localStorage.get(this.bizInfoKey.customer_name);
          this.bizInfoValue.address = localStorage.get(this.bizInfoKey.address);
        },
        removeLocalStorage () {
          localStorage.remove(this.bizInfoKey.customer_name);
          localStorage.remove(this.bizInfoKey.address);
          this.readLocalStorage();
        }
      }
    };
</script>
```
:::

### Methods \(方法\)

| 名字 | 参数 | 描述 |
| --- | --- | --- |
| writeCookie |  (key, value, options) | 写cookie |
| readCookie |  (key, value) | 读取cookie |
| removeCookie | (key, options) | 删除cookie |

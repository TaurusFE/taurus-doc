<script>
  import {localStorage} from 'ai-taurus-desktop';

  export default {
    ready () {
      this.bizInfoValue.customer_name = localStorage.get(this.bizInfoKey.customer_name);
      this.bizInfoValue.address = localStorage.get(this.bizInfoKey.address);
    },
    data: function () {
      return {
        bizInfoKey: {
          customer_name: 'CUSTOMER_NAME',
          address: 'ADDRESS'
        },
        bizInfoValue: {
          customer_name: '',
          address: ''
        }
      };
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

## 本地存储模块

localStorage模块提供了本地持久化存储能力。

### 基本用法

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
    import {localStorage} from 'ai-taurus-desktop';

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
| get | (key) | 根据key返回对应的值 |
| set |  (key, value) | 设置key对应的值 |
| remove | (key) | 删除key对应的值 |

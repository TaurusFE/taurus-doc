<script>
  import {TSteps} from "ai-taurus-desktop"
  export default {
    data () {
      return {
        current: 1
      }
    },
    methods: {
      next () {
        if (this.current === 3) {
          this.current = 0;
        } else {
          this.current++;
          }
        }
    },
    components: {
      TSteps,
      Step: TSteps.step
    }
  };
</script>
<style scoped>
  button {
    margin-top: 10px
  }
</style>
## Steps步骤条

引导用户按照流程完成任务的导航条。

### 基本用法

:::demo 简单的步骤条
```html
<template>
  <t-steps :current="1">
        <step title="已完成" desc="这里是该步骤的描述信息"></step>
        <step title="进行中" desc="这里是该步骤的描述信息"></step>
        <step title="待进行" desc="这里是该步骤的描述信息"></step>
        <step title="待进行" desc="这里是该步骤的描述信息"></step>
  </t-steps>
</template>
<script>
  import {TSteps} from 'ai-taurus-desktop'
  export default {
    components: {
      TSteps,
      Step: TSteps.Step
    }
  };
</script>
```
:::
### 迷你版

:::demo 迷你版的步骤条，通过设置`<t-steps size="small">`启用.

```html
<template>
   <t-steps :current="1" size="small">
        <step title="已完成"></step>
        <step title="进行中"></step>
        <step title="待进行"></step>
        <step title="待进行"></step>
      </t-steps>
</template>
<script>
 import {TSteps} from 'ai-taurus-desktop'
 export default {
   components: {
     TSteps,
     Step: TSteps.Step
   }
 };
</script>
```
:::
### 带图标的步骤条

:::demo 通过设置 step 的 icon 属性，可以启用自定义图标。

```html
  <template>
    <t-steps :current="1">
         <step title="注册" icon="user"></step>
         <step title="上传头像" icon="camera"></step>
         <step title="验证邮箱" icon="mail"></step>
       </t-steps>
  </template>
  <script>
  import {TSteps} from 'ai-taurus-desktop'
  export default {
    components: {
      TSteps,
      Step: TSteps.Step
    }
  };
  </script>
```
:::

### 步骤切换
:::demo 通常配合内容及按钮使用，表示一个流程的处理进度。
```html
  <template>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
       <t-steps :current="current">
         <step title="步骤1"></step>
         <step title="步骤2"></step>
         <step title="步骤3"></step>
         <step title="步骤4"></step>
       </t-steps>
       <button class="button button--action"
               @click="next">下一步</button>
  </template>
  <script>
   import {TSteps} from 'ai-taurus-desktop'
   export default {
     data () {
       return {
         current: 1
       }
     },
     methods: {
       next () {
         if (this.current === 3) {
           this.current = 0;
         } else {
           this.current++;
         }
       }
     },
     components: {
       TSteps,
       Step: TSteps.step
     }
    };
  </script>
```
:::

### 垂直方向的步骤条
:::demo 简单的竖直方向的步骤条
```html
  <template>
    <t-steps :current="2" direction="vertical">
      <step title="已完成" desc="这里是该步骤的描述信息"></step>
      <step title="已完成" desc="这里是该步骤的描述信息"></step>
      <step title="进行中" desc="这里是该步骤的描述信息"></step>
      <step title="待进行" desc="这里是该步骤的描述信息"></step>
    </t-steps>
  <template>
   <script>
    import {TSteps} from 'ai-taurus-desktop'
    export default {
      components: {
        TSteps,
        Step: TSteps.Step
      }
    };
    </script>
```
:::

### 步骤运行错误
:::demo 使用 t-steps 的 status 属性来指定当前步骤的状态。
```html
<template>
   <t-steps :current="1" status='error'>
     <step title="已完成" desc="这里是该步骤的描述信息">
     </step>
     <step title="进行中" desc="这里是该步骤的描述信息">
     </step>
     <step title="待进行" desc="这里是该步骤的描述信息">
     </step>
     <step title="待进行" desc="这里是该步骤的描述信息">
     </step>
   </t-steps>
</template>
 <script>
  import {TSteps} from 'ai-taurus-desktop'
  export default {
    components: {
      TSteps,
      Step: TSteps.Step
    }
  };
  </script>
```
:::

### Steps Props

整体步骤条。

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 `status` 属性覆盖状态 | Number | 0 |
| status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | String | process |
| size | 指定大小，目前支持普通（`default`）和迷你（`small`）| String | default |
| direction | 指定步骤条方向。目前支持水平（`horizontal`）和竖直（`vertical`）两种方向 | String | horizontal  |

### Steps.Step  Props

步骤条内的每一个步骤。

| 参数      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| status | 指定状态。当不配置该属性时，会使用 Steps 的 `current` 来自动指定状态。可选：`wait` `process` `finish` `error` | String | wait |
| title | 标题 | String | -     |
| description | 步骤的详情描述，可选 | String | -  |
| icon | 步骤图标的类型，可选 | String | - |


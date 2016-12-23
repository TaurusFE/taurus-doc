<template>
  <div class="taurus-spinner-double-bounce" :style="{
      width: spinnerSize,
      height: spinnerSize
    }">
    <div class="taurus-spinner-double-bounce-bounce1" :style="{ backgroundColor: spinnerColor }"></div>
    <div class="taurus-spinner-double-bounce-bounce2" :style="{ backgroundColor: spinnerColor }"></div>
  </div>
</template>
<script>
  import common from './common.vue';

  export default {
    name: 't-spinner-double-bounce',
    mixins: [common]
  };
</script>

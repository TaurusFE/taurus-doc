<template>
  <div class="taurus-spinner-snake" :style="{
    'border-top-color': spinnerColor,
    'border-left-color': spinnerColor,
    'border-bottom-color': spinnerColor,
    'height': spinnerSize,
    'width': spinnerSize
    }">
  </div>
</template>

<script>
  import common from './common.vue';

  export default {
    name: 't-spinner-snake',

    mixins: [common]
  };
</script>

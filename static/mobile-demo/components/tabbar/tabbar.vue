<template>
  <div class="taurus-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-tabbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>



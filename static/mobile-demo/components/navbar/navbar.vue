<template>
  <div class="taurus-navbar" :class="{ 'is-fixed': fixed }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-navbar',

  props: {
    fixed: Boolean,
    value: {}
  }
};
</script>



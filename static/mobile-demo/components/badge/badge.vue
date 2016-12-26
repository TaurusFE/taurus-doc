<template>
  <span
    class="taurus-badge"
    :style="{ backgroundColor: color }"
    :class="['is-' + type, 'is-size-' + size]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 't-badge',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
};
</script>


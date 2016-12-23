<template>
  <div
    v-show="$parent.swiping || id === $parent.currentActive"
    class="taurus-tab-container-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 't-tab-container-item',
  props: ['id']
};
</script>


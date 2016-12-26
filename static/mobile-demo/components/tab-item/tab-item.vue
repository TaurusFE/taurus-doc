<template>
  <a class="taurus-tab-item"
    @click="$parent.$emit('input', id)"
    :class="{ 'is-selected': $parent.value === id }">
    <div class="taurus-tab-item-icon"><slot name="icon"></slot></div>
    <div class="taurus-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 't-tab-item',
  props: ['id']
};
</script>



<template>
  <div class="taurus-progress">
    <slot name="start"></slot>
    <div class="taurus-progress-content">
      <div class="taurus-progress-runway" :style="{ height: barHeight + 'px' }"></div>
      <div class="taurus-progress-progress" :style="{ width: value + '%', height: barHeight + 'px' }"></div>
    </div>
    <slot name="end"></slot>
  </div>
</template>

<script>
  export default {
    name: 't-progress',

    props: {
      value: Number,
      barHeight: {
        type: Number,
        default: 3
      }
    }
  };
</script>



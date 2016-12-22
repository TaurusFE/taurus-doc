<template>
  <header
    class="taurus-header"
    :class="{ 'is-fixed': fixed }">
    <div class="taurus-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="taurus-header-title" v-text="title"></h1>
    <div class="taurus-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 't-header',

  props: {
    fixed: Boolean,
    title: String
  }
};
</script>



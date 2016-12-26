<template>
  <label class="taurus-switch">
    <input class="taurus-switch-input" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="taurus-switch-core"></span>
    <div class="taurus-switch-label"><slot></slot></div>
  </label>
</template>

<script>
export default {
  name: 't-switch',

  props: {
    value: Boolean
  },

  data () {
    return {
      currentValue: this.value
    };
  },

  watch: {
    value (val) {
      this.currentValue = val;
    },

    currentValue (val) {
      this.$emit('input', val);
    }
  }
};
</script>



<template>
  <div class="taurus-radiolist" @change="$emit('change', currentValue)">
    <label class="taurus-radiolist-title" v-text="title"></label>
    <t-cell v-for="option in options">
      <label class="taurus-radiolist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="taurus-radio">
          <input
            class="taurus-radio-input"
            type="radio"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="taurus-radio-core"></span>
        </span>
        <span class="taurus-radio-label" v-text="option.label || option"></span>
      </label>
    </t-cell>
  </div>
</template>

<script>
import TCell from '../cell/cell.vue';
export default {
  name: 't-radio',
  props: {
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: String
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
  },

  components: {
    TCell
  }
};
</script>



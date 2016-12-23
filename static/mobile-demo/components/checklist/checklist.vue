<template>
  <div @change="$emit('change', currentValue)" class="taurus-checklist" :class="{ 'is-limit': max <= currentValue.length }">
    <label class="taurus-checklist-title" v-text="title"></label>
    <t-cell v-for="option in options">
      <label class="taurus-checklist-label" slot="title">
        <span
          :class="{'is-right': align === 'right'}"
          class="taurus-checkbox">
          <input
            class="taurus-checkbox-input"
            type="checkbox"
            v-model="currentValue"
            :disabled="option.disabled"
            :value="option.value || option">
          <span class="taurus-checkbox-core"></span>
        </span>
        <span class="taurus-checkbox-label" v-text="option.label || option"></span>
      </label>
    </t-cell>
  </div>
</template>

<script>
import TCell from '../cell/cell.vue';

export default {
  name: 't-checklist',

  props: {
    max: Number,
    title: String,
    align: String,
    options: {
      type: Array,
      required: true
    },
    value: Array
  },

  components: { TCell },

  data () {
    return {
      currentValue: this.value
    };
  },

  computed: {
    limit () {
      return this.max < this.currentValue.length;
    }
  },

  watch: {
    value (val) {
      this.currentValue = val;
    },

    currentValue (val) {
      if (this.limit) val.pop();
      this.$emit('input', val);
    }
  }
};
</script>



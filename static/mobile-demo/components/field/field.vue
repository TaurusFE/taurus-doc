<template>
  <t-cell
    class="taurus-field"
    :title="label"
    v-clickoutside="doCloseActive"
    :class="[{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }]">
    <textarea
      @change="$emit('change', currentValue)"
      ref="textarea"
      class="taurus-field-core"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue">
    </textarea>
    <input
      @change="$emit('change', currentValue)"
      ref="input"
      class="taurus-field-core"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput">
    <div
      @click="handleClear"
      class="taurus-field-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active">
      <i class="mintui mintui-field-error"></i>
    </div>
    <span class="taurus-field-state" v-if="state" :class="['is-' + state]">
      <i class="mintui" :class="['mintui-field-' + state]"></i>
    </span>
    <div class="taurus-field-other">
      <slot></slot>
    </div>
  </t-cell>
</template>

<script>
import TCell from '../cell/cell.vue';

export default {
  name: 't-field',

  data () {
    return {
      active: false,
      currentValue: this.value
    };
  },

  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },

  components: { TCell },

  methods: {
    doCloseActive () {
      this.active = false;
    },

    handleInput (evt) {
      this.currentValue = evt.target.value;
    },

    handleClear () {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },

  watch: {
    value (val) {
      this.currentValue = val;
    },

    currentValue (val) {
      this.$emit('input', val);
    },

    attr: {
      immediate: true,
      handler (attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  }
};
</script>


<template>
  <div class="taurus-search">
    <div class="taurus-searchbar">
      <div class="taurus-searchbar-inner">
        <i class="mintui mintui-search" v-show="visible"></i>
        <input
        ref="input"
        @click="visible = true"
        type="search"
        v-model="currentValue"
        :placeholder="visible ? placeholder : ''"
        class="taurus-searchbar-core">
      </div>
      <a
        class="taurus-searchbar-cancel"
        @click="visible = false, currentValue = ''"
        v-show="visible"
        v-text="cancelText">
      </a>
      <label
        @click="visible = true, $refs.input.focus()"
        class="taurus-searchbar-placeholder"
        v-show="!visible">
        <i class="mintui mintui-search"></i>
        <span class="taurus-searchbar-text" v-text="placeholder"></span>
      </label>
    </div>
    <div class="taurus-search-list" v-show="show || currentValue">
      <div class="taurus-search-list-warp">
        <slot>
          <t-cell v-for="(item, index) in result" :key="index" :title="item"></t-cell>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import TCell from '../cell/cell.vue';

export default {
  name: 't-search',

  data () {
    return {
      visible: false,
      currentValue: this.value
    };
  },

  components: { TCell },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },

    value (val) {
      this.currentValue = val;
    }
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    cancelText: {
      default: '取消'
    },
    placeholder: {
      default: '搜索'
    },
    result: Array
  },

  mounted () {
    this.autofocus && this.$refs.input.focus();
  }
};
</script>


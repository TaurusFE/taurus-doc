<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="taurus-actionsheet">
      <ul class="taurus-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '5px' : '0' }">
        <li v-for="item in actions" class="taurus-actionsheet-listitem" @click.stop="itemClick(item)">{{ item.name }}</li>
      </ul>
      <a class="taurus-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>

<script type="text/babel">
  import Popup from 'vue-popup';

  export default {
    name: 't-action-sheet',
    mixins: [Popup],
    props: {
      modal: {
        default: true
      },

      modalFade: {
        default: false
      },

      lockScroll: {
        default: false
      },

      closeOnClickModal: {
        default: true
      },

      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        currentValue: false
      };
    },

    watch: {
      currentValue (val) {
        this.$emit('input', val);
      },

      value (val) {
        this.currentValue = val;
      }
    },

    methods: {
      itemClick (item) {
        if (item.method && typeof item.method === 'function') {
          item.method();
        }
        this.currentValue = false;
      }
    },

    mounted () {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>



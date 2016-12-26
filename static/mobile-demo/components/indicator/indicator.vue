<template>
  <transition name="taurus-indicator">
    <div class="taurus-indicator" v-show="visible">
      <div class="taurus-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
        <t-spinner class="taurus-indicator-spin" :type="convertedSpinnerType" :size="32"></t-spinner>
        <span class="taurus-indicator-text" v-show="text">{{ text }}</span>
      </div>
      <div class="taurus-indicator-mask" @touchmove.stop.prevent></div>
    </div>
  </transition>
</template>

<script type="text/babel">
  import TSpinner from '../spinner/spinner';
  export default {
    data () {
      return {
        visible: false
      };
    },

    components: {
      TSpinner
    },

    computed: {
      convertedSpinnerType () {
        switch (this.spinnerType) {
          case 'double-bounce':
            return 1;
          case 'triple-bounce':
            return 2;
          case 'fading-circle':
            return 3;
          default:
            return 0;
        }
      }
    },

    props: {
      text: String,
      spinnerType: {
        type: String,
        default: 'snake'
      }
    }
  };
</script>



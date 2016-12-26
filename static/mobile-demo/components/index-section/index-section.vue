<template>
  <li class="taurus-indexsection">
    <p class="taurus-indexsection-index">{{ index }}</p>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>



<script type="text/babel">
  export default {
    name: 't-index-section',
    props: {
      index: {
        type: String,
        required: true
      }
    },

    mounted () {
      this.$parent.sections.push(this);
    },

    beforeDestroy () {
      let index = this.$parent.sections.indexOf(this);
      if (index > -1) {
        this.$parent.sections.splice(index, 1);
      }
    }
  };
</script>

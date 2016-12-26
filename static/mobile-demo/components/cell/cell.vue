<template>
  <a class="taurus-cell" :href="href">
    <span class="taurus-cell-mask" v-if="isLink"></span>
    <div class="taurus-cell-left">
      <slot name="left"></slot>
    </div>
    <div class="taurus-cell-wrapper">
      <div class="taurus-cell-title">
        <slot name="icon">
          <i v-if="icon" class="mintui" :class="'mintui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="taurus-cell-text" v-text="title"></span>
          <span v-if="label" class="taurus-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="taurus-cell-value" :class="{ 'is-link' : isLink }">
        <slot>
          <span v-text="value"></span>
        </slot>
      </div>
    </div>
    <div class="taurus-cell-right">
      <slot name="right"></slot>
    </div>
    <i v-if="isLink" class="taurus-cell-allow-right"></i>
  </a>
</template>

<script>
export default {
  name: 't-cell',

  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },

  computed: {
    href () {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.path;
      }
      return this.to;
    }
  },

  methods: {
    handleClick ($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>


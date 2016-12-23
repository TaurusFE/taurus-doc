<template>
  <t-cell
    v-clickoutside:touchstart="swipeMove"
    @click.native="swipeMove()"
    @touchstart.native="startDrag"
    @touchmove.native="onDrag"
    @touchend.native="endDrag"
    class="taurus-cell-swipe"
    :title="title"
    :icon="icon"
    :label="label"
    :to="to"
    :is-link="isLink"
    ref="cell"
    :value="value">
    <div
      slot="right"
      class="taurus-cell-swipe-buttongroup"
      ref="right">
      <a
        class="taurus-cell-swipe-button"
        v-for="btn in right"
        :style="btn.style"
        @click.stop="btn.handler && btn.handler(), swipeMove()"
        v-html="btn.content"></a>
    </div>
    <div
      slot="left"
      class="taurus-cell-swipe-buttongroup"
      ref="left">
      <a
        class="taurus-cell-swipe-button"
        v-for="btn in left"
        :style="btn.style"
        @click.stop="btn.handler && btn.handler(), swipeMove()"
        v-html="btn.content"></a>
    </div>
    <slot></slot>
    <span
      v-if="$slots.title"
      slot="title">
      <slot name="title"></slot>
    </span>
    <span
      v-if="$slots.icon"
      slot="icon">
      <slot name="icon"></slot>
    </span>
  </t-cell>
</template>

<script>
import { once } from 'wind-dom/src/event';
import TCell from '../cell/cell.vue';

export default {
  name: 't-cell-swipe',
  components: {
    TCell
  },
  props: {
    to: String,
    left: Array,
    right: Array,
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  data () {
    return {
      start: { x: 0, y: 0 }
    };
  },
  mounted () {
    this.wrap = this.$refs.cell.$el.querySelector('.taurus-cell-wrapper');
    this.leftElm = this.$refs.left;
    this.rightElm = this.$refs.right;
    this.leftWrapElm = this.leftElm.parentNode;
    this.rightWrapElm = this.rightElm.parentNode;
    this.leftWidth = this.leftElm.getBoundingClientRect().width;
    this.rightWidth = this.rightElm.getBoundingClientRect().width;

    this.leftDefaultTransform = this.translate3d(-this.leftWidth - 1);
    this.rightDefaultTransform = this.translate3d(this.rightWidth);

    this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
    this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
  },
  methods: {
    translate3d (offset) {
      return `translate3d(${offset}px, 0, 0)`;
    },

    swipeMove (offset = 0) {
      this.wrap.style.webkitTransform = this.translate3d(offset);
      this.rightWrapElm.style.webkitTransform = this.translate3d(this.rightWidth + offset);
      this.leftWrapElm.style.webkitTransform = this.translate3d(-this.leftWidth + offset);
      this.swiping = true;
    },

    swipeLeaveTransition (direction) {
      setTimeout(() => {
        this.swipeLeave = true;

        // left
        if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.4) {
          this.swipeMove(-this.rightWidth);
          this.swiping = false;
          this.opened = true;
          return;
        // right
        } else if (direction < 0 && this.offsetLeft > this.leftWidth * 0.4) {
          this.swipeMove(this.leftWidth);
          this.swiping = false;
          this.opened = true;
          return;
        }

        this.swipeMove(0);
        once(this.wrap, 'webkitTransitionEnd', _ => {
          this.wrap.style.webkitTransform = '';
          this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
          this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
          this.swipeLeave = false;
          this.swiping = false;
        });
      }, 0);
    },

    startDrag (evt) {
      evt = evt.changedTouches ? evt.changedTouches[0] : evt;
      this.dragging = true;
      this.start.x = evt.pageX;
      this.start.y = evt.pageY;
    },

    onDrag (evt) {
      if (this.opened) {
        !this.swiping && this.swipeMove(0);
        this.opened = false;
        return;
      }
      if (!this.dragging) return;
      let swiping;
      const e = evt.changedTouches ? evt.changedTouches[0] : evt;
      const offsetTop = e.pageY - this.start.y;
      const offsetLeft = this.offsetLeft = e.pageX - this.start.x;

      if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
        (offsetLeft > 0 && offsetLeft > this.leftWidth) ||
        (offsetLeft > 0 && !this.leftWidth) ||
        (offsetLeft < 0 && !this.rightWidth)) {
        return;
      }

      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);

      swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
      if (!swiping) return;
      evt.preventDefault();

      this.swipeMove(offsetLeft);
    },

    endDrag () {
      if (!this.swiping) return;
      this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1);
    }
  }
};
</script>



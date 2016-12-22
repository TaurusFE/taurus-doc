<template>
  <div class="taurus-indexlist">
    <ul class="taurus-indexlist-content" ref="content" :style="{ 'height': currentHeight + 'px', 'margin-right': navWidth + 'px'}">
      <slot></slot>
    </ul>

    <div class="taurus-indexlist-nav" @touchstart="handleTouchStart" ref="nav">
      <ul class="taurus-indexlist-navlist">
        <li class="taurus-indexlist-navitem" v-for="section in sections">{{ section.index }}</li>
      </ul>
    </div>

    <div class="taurus-indexlist-indicator" v-if="showIndicator" v-show="moving">{{ currentIndicator }}</div>
  </div>
</template>

<script>
  export default {
    name: 't-index-list',

    props: {
      height: Number,
      showIndicator: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        sections: [],
        navWidth: 0,
        indicatorTime: null,
        moving: false,
        firstSection: null,
        currentIndicator: '',
        currentHeight: this.height
      };
    },

    watch: {
      sections () {
        this.init();
      }
    },

    methods: {
      init () {
        this.$nextTick(() => {
          this.navWidth = this.$refs.nav.clientWidth;
        });
        let listItems = this.$refs.content.getElementsByTagName('li');
        if (listItems.length > 0) {
          this.firstSection = listItems[0];
        }
      },

      handleTouchStart (e) {
        if (e.target.tagName !== 'LI') {
          return;
        }
        this.scrollList(e.changedTouches[0].clientY);
        if (this.indicatorTime) {
          clearTimeout(this.indicatorTime);
        }
        this.moving = true;
        window.addEventListener('touchmove', this.handleTouchMove);
        window.addEventListener('touchend', this.handleTouchEnd);
      },

      handleTouchMove (e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
      },

      handleTouchEnd () {
        this.indicatorTime = setTimeout(() => {
          this.moving = false;
          this.currentIndicator = '';
        }, 500);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchend', this.handleTouchEnd);
      },

      scrollList (y) {
        let currentItem = document.elementFromPoint(document.body.clientWidth - 10, y);
        if (!currentItem || !currentItem.classList.contains('taurus-indexlist-navitem')) {
          return;
        }
        this.currentIndicator = currentItem.innerText;
        let targets = this.sections.filter(section => section.index === currentItem.innerText);
        let targetDOM;
        if (targets.length > 0) {
          targetDOM = targets[0].$el;
          this.$refs.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
        }
      }
    },

    mounted () {
      if (!this.currentHeight) {
        this.currentHeight = document.documentElement.clientHeight - this.$refs.content.getBoundingClientRect().top;
      }
      this.init();
    }
  };
</script>



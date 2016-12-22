<template>
  <div class="taurus-palette-button" :class="{ expand: expanded, 'taurus-palette-button-active': transforming }"
    @animationend="onMainAnimationEnd" @webkitanimationend="onMainAnimationEnd" @mozanimationend="onMainAnimationEnd">
    <div class="taurus-sub-button-container">
      <slot></slot>
    </div>
    <div @touchstart="toggle" class="taurus-main-button" :style="mainButtonStyle">
      {{content}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 't-palette-button',
    data: function () {
      return {
        transforming: false,    // 是否正在执行动画
        expanded: false           // 是否已经展开子按钮
      };
    },
    props: {
      content: {
        type: String,
        default: ''
      },
      offset: {
        type: Number,           // 扇面偏移角，默认是四分之π，配合默认方向lt
        default: Math.PI / 4
      },
      direction: {
        type: String,
        default: 'lt'           // lt t rt this.radius rb b lb l 取值有8个方向，左上、上、右上、右、右下、下、左下、左，默认为左上
      },
      radius: {
        type: Number,
        default: 90
      },
      mainButtonStyle: {
        type: String,           // 应用到 taurus-main-button 上的 class
        default: ''
      }
    },
    methods: {
      toggle (event) {
        if (!this.transforming) {
          if (this.expanded) {
            this.collapse(event);
          } else {
            this.expand(event);
          }
        }
      },
      onMainAnimationEnd (event) {
        this.transforming = false;
        this.$emit('expanded');
      },
      expand (event) {
        this.expanded = true;
        this.transforming = true;
        this.$emit('expand', event);
      },
      collapse (event) {
        this.expanded = false;
        this.$emit('collapse', event);
      }
    },
    mounted () {
      this.slotChildren = [];
      for (let i = 0; i < this.$slots.default.length; i++) {
        if (this.$slots.default[i].elm.nodeType !== 3) {
          this.slotChildren.push(this.$slots.default[i]);
        }
      }

      let css = '';
      let directionArc = Math.PI * (3 + Math.max(['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'].indexOf(this.direction), 0)) / 4;
      for (let i = 0; i < this.slotChildren.length; i++) {
        var arc = (Math.PI - this.offset * 2) / (this.slotChildren.length - 1) * i + this.offset + directionArc;
        var x = Math.cos(arc) * this.radius;
        var y = Math.sin(arc) * this.radius;
        var itemCss = '.expand .palette-button-' + this._uid + '-sub-' + i + '{transform:translate(' + x + 'px,' + y + 'px) rotate(720deg);transition-delay:' + 0.03 * i + 's}';
        css += itemCss;

        this.slotChildren[i].elm.className += (' palette-button-' + this._uid + '-sub-' + i);
      }

      this.styleNode = document.createElement('style');
      this.styleNode.type = 'text/css';
      this.styleNode.rel = 'stylesheet';
      this.styleNode.title = 'palette button style';
      this.styleNode.appendChild(document.createTextNode(css));
      document.getElementsByTagName('head')[0].appendChild(this.styleNode);
    },
    destroyed () {
      if (this.styleNode) {
        this.styleNode.parentNode.removeChild(this.styleNode);
      }
    }
  };
</script>



<template>
  <div class="page-wrapper">
    <template v-if='unhome'>
      <d-header></d-header>
    </template>
    <div  :class="{'main-wrapper': unhome}">
      <div class="main-content">
        <transition name='fade' mode='out-in'>
          <router-view></router-view>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>
// import markdown from './markdown/switcher/'
import DHeader from './components/Header/'
export default {
  computed: {
    unhome () {
      return this.$route.name !== 'home'
    }
  },
  components: {
    DHeader
  }
}
</script>
<style lang="scss" >
  body {
    width: 100% !important;
    min-width: auto;
  }
  .page-wrapper {
    background: #fbfbfb;
    .main-wrapper {
      padding-top: 110px;
      .main-content {
        background: #fff;
        width: 92%;
        margin: 0 auto;
      }
    }
    h2 {
      font-size: 28px;
      color: #1f2d3d;
      margin: 0
    }

    h3 {
      font-size: 22px
    }

    h2, h3, h4, h5 {
      font-weight: 400;
      color: #1f2f3d
    }

    h2 a, h3 a, h4 a, h5 a {
      float: left;
      margin-left: -20px;
      opacity: 0;
      cursor: pointer
    }

    h2 a:hover, h2:hover a, h3 a:hover, h3:hover a, h4 a:hover, h4:hover a, h5 a:hover, h5:hover a {
      opacity: .4
    }

    p {
      font-size: 14px;
      color: #5e6d82
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease
  }
  .fade-enter, .fade-leave-active {
     opacity: 0
  }
</style>

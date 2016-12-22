<template>
  <div class="doc-wrapper">
    <template v-if='unhome'>
      <d-header :list='list' ></d-header>
    </template>
    <div  :class="{'doc-main': unhome}">
      <div :class="{'doc-container': unhome}">
        <transition name='fade' mode='out-in'>
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import DHeader from './components/Header/'
import menuList from './config/main.json'
export default {
  data () {
  },
  computed: {
    unhome () {
      return this.$route.name !== 'home'
    },
    list () {
      let base = this.$route.fullPath.startsWith('/desktop') ? 'desktop' : 'mobile'
      return menuList[base]
    }
  },
  components: {
    DHeader
  }
}
</script>
<style lang="css" >
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease
  }
  .fade-enter, .fade-leave-active {
     opacity: 0
  }
</style>

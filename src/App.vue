<template>
  <div class="doc-wrapper">
    <template v-if='unhome && statusPage'>
      <d-header :list='list'></d-header>
    </template>
    <template v-if='unhome && statusPage'>
      <div  class="doc-main">
        <div class="doc-container">
          <transition name='fade' mode='out-in'>
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </template>
    <template v-else>
      <transition name='fade' mode='out-in'>
        <router-view></router-view>
      </transition>
    </template>
    <template v-if='unhome && statusPage'>
      <d-footer></d-footer>
    </template>
  </div>
</template>

<script>
import DHeader from './components/Header/'
import menuList from './config/main.json'
import DFooter from './components/Footer/'
export default {
  computed: {
    unhome () {
      return this.$route.fullPath !== '/'
    },
    statusPage () {
      return this.$route.name !== '404'
    },
    list () {
      let base = /^\/desktop/.test(this.$route.fullPath) ? 'desktop' : 'mobile'
      this.base = base
      return menuList[base]
    }
  },
  components: {
    DHeader, DFooter
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

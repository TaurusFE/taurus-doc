<template>
  <div class="doc-wrapper">
    <template v-if='unhome'>
      <d-header></d-header>
    </template>
    <div  :class="{'doc-main': unhome}">
      <div :class="{'doc-container': unhome}">
        <transition name='fade' mode='out-in'>
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <template v-if='unhome'>
      <d-footer></d-footer>
    </template>
  </div>
</template>

<script>
import DHeader from './components/Header/'
import DFooter from './components/Footer/'
export default {
  computed: {
    unhome () {
      return this.$route.name !== 'home'
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

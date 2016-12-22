<template>
  <div>
    <nav-list :base='base' :list='list'></nav-list>
    <div class="doc-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang='scss'>
</style>
<script>
  import NavList from '../../components/navList'
  import list from '../../config/router.json'
  export default {
    data () {
      let base = this.$route.fullPath.startsWith('/desktop') ? 'desktop' : 'mobile'
      return {
        base: '/' + base + '/case',
        list: list.desktop.case
      }
    },
    components: {
      NavList
    }
  }
</script>

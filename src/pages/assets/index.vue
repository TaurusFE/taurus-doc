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
  import NavList from '../../components/navList/'
  import list from '../../config/router.json'
  export default {
    data () {
      return {
        base: '/assets',
        list: list.assets
      }
    },
    components: {
      NavList
    }
  }

</script>

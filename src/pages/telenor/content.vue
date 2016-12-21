<template>
    <div>
      <page-frame :url='url'></page-frame>
    </div>
</template>
<style>

</style>
<script>
  import pageFrame from '../../components/iframe'
  export default {
    data () {
      return {
        url: this.$route.query.url
      }
    },
    watch: {
      '$route' (to, from) {
        this.url = to.query.url
      }
    },
    components: {
      pageFrame
    }
  }
</script>

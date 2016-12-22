<template>
  <div>
    <nav-list :base='base' :list='list'></nav-list>
    <div class="doc-content">
      <router-view class='content'></router-view>
    </div>
  </div>
</template>
<style lang='scss'>
  .doc-content .content {
    margin-left: -1px
  }

  .doc-content .content > h3 {
    margin: 45px 0 15px
  }

  .doc-content .content > p {
    margin-top: 14px
  }

  .doc-content .content > table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    margin-bottom: 45px
  }

  .doc-content .content > table strong {
    font-weight: 400
  }

  .doc-content .content > table th {
    text-align: left;
    border-top: 1px solid #eaeefb;
    background-color: #eff2f7;
    white-space: nowrap
  }

  .doc-content .content > table td, .doc-content .content > table th {
    border-bottom: 1px solid #eaeefb;
    padding: 10px;
    max-width: 250px
  }

  .doc-content .content > table td:first-child, .doc-content .content > table th:first-child {
    padding-left: 10px
  }

  .doc-content {
    padding-bottom: 95px;
    box-sizing: border-box
  }

  .doc-content .content {
    margin-left: -1px
  }

  .doc-content .content > h3 {
    margin: 45px 0 15px
  }

  .doc-content .content > table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    margin-bottom: 45px
  }

  .doc-content .content > table strong {
    font-weight: 400
  }

  .doc-content .content > table th {
    text-align: left;
    border-top: 1px solid #eaeefb;
    background-color: #eff2f7;
    white-space: nowrap
  }

  .doc-content .content > table td, .doc-content .content > table th {
    border-bottom: 1px solid #eaeefb;
    padding: 10px;
    max-width: 250px
  }

  .doc-content .content > table td:first-child, .doc-content .content > table th:first-child {
    padding-left: 10px
  }
</style>
<script>
  import NavList from '../../components/navList/'
  import list from '../../config/router.json'
  export default {
    data () {
      return {
        base: '/component',
        list: list.desktop.component
      }
    },
    components: {
      NavList
    }
  }

</script>

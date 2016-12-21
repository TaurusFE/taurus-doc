<template>
  <div>
    <nav-list :base='base' :list='list'></nav-list>
    <div class="doc-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang='scss'>
  @import "css/doc.css";
  .component-container {
    display: -webkit-flex;
    display: flex;
  }
  .side-catalog {
    background: #fbfbfb;
    min-width: 190px;
    padding-top: 30px;
    margin-right: 50px;
    ul {
      display: block;
      li {
        text-align: left;
      }
    }

  }
  .side-content {
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    border-radius: 2px;
    flex: 1;
    max-width: 1060px;
  }
  .content-wrapper {
    padding: 30px 30px 95px 30px;
    box-sizing: border-box

  }

  .content-wrapper .content {
    margin-left: -1px
  }

  .content-wrapper .content>h3 {
    margin: 45px 0 15px
  }
  .content-wrapper .content>p {
    margin-top: 14px
  }

  .content-wrapper .content>table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    margin-bottom: 45px
  }

  .content-wrapper .content>table strong {
    font-weight: 400
  }

  .content-wrapper .content>table th {
    text-align: left;
    border-top: 1px solid #eaeefb;
    background-color: #eff2f7;
    white-space: nowrap
  }

  .content-wrapper .content>table td,.content-wrapper .content>table th {
    border-bottom: 1px solid #eaeefb;
    padding: 10px;
    max-width: 250px
  }

  .content-wrapper .content>table td:first-child,.content-wrapper .content>table th:first-child {
    padding-left: 10px
  }

  .content-wrapper {
    padding-bottom: 95px;
    box-sizing: border-box
  }

  .content-wrapper .content {
    margin-left: -1px
  }

  .content-wrapper .content>h3 {
    margin: 45px 0 15px
  }

  .content-wrapper .content>table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    color: #5e6d82;
    font-size: 14px;
    margin-bottom: 45px
  }

  .content-wrapper .content>table strong {
    font-weight: 400
  }

  .content-wrapper .content>table th {
    text-align: left;
    border-top: 1px solid #eaeefb;
    background-color: #eff2f7;
    white-space: nowrap
  }

  .content-wrapper .content>table td,.content-wrapper .content>table th {
    border-bottom: 1px solid #eaeefb;
    padding: 10px;
    max-width: 250px
  }

  .content-wrapper .content>table td:first-child,.content-wrapper .content>table th:first-child {
    padding-left: 10px
  }
</style>
<script>
  import NavList from '../../components/navList'
  import list from '../../config/router.json'
  export default {
    data () {
      return {
        base: '/element',
        list: list.element
      }
    },
    components: {
      NavList
    }
  }

</script>

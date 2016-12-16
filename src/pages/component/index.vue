<template>
  <div class="component-container">
    <div class="side-catalog">
      <nav-list :base='base' :list='list'></nav-list>
    </div>
    <div class="side-content">
      <div class="content-wrapper container">
<<<<<<< HEAD
        <router-view class='content'></router-view>
=======
        <router-view></router-view>
>>>>>>> origin/master
      </div>
    </div>
  </div>
</template>
<<<<<<< HEAD
<style lang='scss'>
=======
<style lang='scss' scoped>
>>>>>>> origin/master
  .component-container {
    display: -webkit-flex;
    display: flex;
  }
  .side-catalog {
    background: #fbfbfb;
    width: 190px;
    ul {
      display: block;
      li {
        text-align: left;
        padding: 10px;
      }
    }
<<<<<<< HEAD
    .side-content {
      -webkit-flex: 1;
      flex: 1;
    }
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
=======
  .side-content {
    -webkit-flex: 1;
    flex: 1;
  }
>>>>>>> origin/master
  }
</style>
<script>
  import NavList from '../../components/navList/'
  import list from '../../config/component.json'
  export default {
    data () {
      return {
        base: '/component',
        list: list
      }
    },
    components: {
      NavList
    }
  }
<<<<<<< HEAD

=======
>>>>>>> origin/master
</script>

<template>
  <div class="grid-row grid-row-lg--between">
    <div class="col-md-2 col-sm-12-col-xs-12 side-catalog">
      <ul>
        <li><router-link to='/design/princ'><span >Principle</span></router-link></li>
        <li><a><span>Work Flow</span></a></li>
      </ul>
    </div>
    <div class="col-md-10 col-sm-12-col-xs-12 side-content">
      <div class="content-wrapper">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .side-catalog {
    background: #fbfbfb;
    ul {
      display: block;
      li {
        text-align: center;
        padding: 10px;
      }
    }
  }
  .side-content {
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    border-radius: 2px;
    .content-wrapper {
      padding-left: 40px;
      padding-right: 40px;
    }

  }


</style>
<script>
    export default{
      data () {
        return {
          msg: 'hello vue'
        }
      }
    }

</script>

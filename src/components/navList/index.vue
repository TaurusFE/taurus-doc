<template>
  <div>
    <ul class="nav" v-for='group in list'>
      <li class="nav-item">
        <div class="nav-group__title">{{group.groupName}}</div>
        <ul class="nav-menu-list">
          <li v-for='item in group.list'>
            <template v-if='item.query' >
              <router-link :to="{path: base + item.path, query:{url:item.query}}"><span>{{item.title}}</span></router-link>
            </template>
            <template v-else>
              <router-link :to='base + item.path'><span>{{item.title}}</span></router-link>
            </template>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>
<style lang='scss' scoped>
  .nav {
    display: block;
    .nav-item {
      margin-bottom: 50px;
      .nav-group__title {
        font-family: Telenor-Bold;
        font-size: 16px;
        text-transform: uppercase;
        color: #B8B8B8;
        padding-bottom: 20px;
        line-height: 25px;
        font-weight: 400;
        margin-bottom: 15px;
        border-bottom: 1px solid #E8E8E8;
      }
      .nav-menu-list a {
        font-family: Telenor;
        font-size: 16px;
        color: #474747;
        line-height: 40px;
        span {
          display: block;
          line-height: 40px;
        }
      }
    }
  }
</style>
<script>
  export default {
    props: ['base', 'list']

  }
</script>

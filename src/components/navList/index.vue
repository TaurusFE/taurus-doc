<template>
  <nav class="doc-menu" >
    <dl :class="{'nav-overview': index === 0}" v-for='(group,index) in list'>
      <template v-if='group.groupName && group.href'>
        <dt><a :href="group.href" target="__blank"><span>{{group.groupName}}</span></a></dt>
      </template>
      <template v-else>
        <dt>{{group.groupName}}</dt>
      </template>
      <dd v-for='item in group.list'>
          <template v-if='item.query' >
            <router-link :to="{path: base + item.path, query:{url:item.query}}"><span>{{item.title}}</span></router-link>
          </template>
          <template v-else>
            <router-link :to='base + item.path'><span>{{item.title}}</span></router-link>
          </template>
      </dd>
    </dl>
  </nav>

</template>
<style lang='scss' scopd>
  .nav-overview {
    margin:0 0 20px 0 !important;
    a {
      color: #666;
    }

  }
</style>
<script>
  export default {
    props: ['base', 'list']

  }
</script>

<template>
  <nav class="doc-menu" >
    <dl v-for='group in list'>
      <template v-if='group.groupName'>
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
<script>
  export default {
    props: ['base', 'list']

  }
</script>

<template>
  <div>
    <iframe :src='url' style="width:100%;min-height:1020px;border:none"></iframe>
  </div>
</template>
<style>
</style>
<script>
   export default{
     props: ['url']
   }
</script>

<template>
  <div>
    <iframe :src='url'></iframe>
  </div>
</template>
<style>
</style>
<script>
   export default{
     props: ['url']
   }
</script>

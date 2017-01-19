<template>
  <div class="errpage">
    <div class="desc">
      <div class="msg">
        <div><h1 class="text-ligh">Oops!</h1></div>
        <div class="note text-ligh">Where are we?</div>
        <p class="note-desc">
          The page you are looking for was moved, removed,renamed or might never existed.
        </p>
        <router-link class='button button--action' to='/'>Back home</router-link>
      </div>
    </div>
    <div class="errbox">
      <img src="/static/img/status/404.png">
    </div>
  </div>
</template>
<style>

</style>
<script>
export default {
}
</script>

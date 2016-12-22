<template>
  <div class="doc-header">
    <header class="doc-container">
      <router-link to="/" class="doc-header-logo">
        <img class="doc-logo1" src="/static/img/taurus-logo.png">
        <img class="doc-logo2" src="/static/img/taurus-logo-noword.png">
      </router-link>
      <a class="doc-nav-show" @click="mobileNavToggle">
        <i class="icon icon-hamburger-menu"></i>
        <i class="icon icon-close"></i>
      </a>
      <div class="doc-title">component</div>
      <ul class="doc-header-nav">
        <li>
          <router-link  to='/design'><span>Design</span></router-link>
        </li>
        <li><router-link  to='/guide' ><span>Guide</span></router-link></li>
        <li><router-link  to='/element'><span>Element</span></router-link></li>
        <li>
          <router-link  to='/component' ><span>Component</span></router-link>
        </li>
        <li><router-link  to='/assets'><span>Assets</span></router-link></li>
        <li><router-link  to='/case'><span>Telenor</span></router-link></li>
        <li><router-link  to='/faq' ><span>FAQ</span></router-link></li>
      </ul>
  </header>
  </div>
</template>
<script>
  let isShowMobileNav = false
  export default {
    data () {
      return {
        active: ''
      }
    },
    mounted () {

    },
    methods: {
      mobileNavToggle: function () {
        if (isShowMobileNav) {
          document.body.className = document.body.className.replace(new RegExp('(\\s|^)' + 'show' + '(\\s|$)'), '')
        } else {
          document.body.className += ' ' + 'show'
        }
        isShowMobileNav = !isShowMobileNav
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>

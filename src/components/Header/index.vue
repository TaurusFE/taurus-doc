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
      <div class="doc-title">{{mobileNavTitle}}</div>
      <ul class="doc-header-nav" @click="changeNavTitle">
        <li v-for='item in list'>
          <router-link :to='item.path'><span>{{item.title}}</span></router-link>
        </li>
      </ul>
  </header>
  </div>
</template>
<script>
  let isShowMobileNav = false
  export default {
    data () {
      return {
        active: '',
        mobileNavTitle: ''
      }
    },
    props: ['list', 'base'],
    mounted () {
      this.$nextTick(function () {
        this.changeNavTitle()
      })
    },
    methods: {
      mobileNavToggle: function () {
        if (isShowMobileNav) {
          document.body.className = document.body.className.replace(new RegExp('(\\s|^)' + 'show' + '(\\s|$)'), '')
        } else {
          document.body.className += ' ' + 'show'
        }
        isShowMobileNav = !isShowMobileNav
      },
      changeNavTitle: function () {
        if (this.$route.matched.length > 0 && this.$route.matched[0].name) {
          this.mobileNavTitle = this.$route.matched[0].name.replace(/(\w)/, function (v) { return v.toUpperCase() })
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>

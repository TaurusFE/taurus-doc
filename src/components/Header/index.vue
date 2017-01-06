<template>
  <div class="doc-header">
    <header class="doc-container">
      <router-link to="/" class="doc-header-logo" :class="{'mobile-logo': mobile}">
        <img class="doc-logo1" :src="logoSrc">
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
      let flag = this.$route.fullPath.startsWith('/desktop')
      return {
        active: '',
        mobile: !flag,
        mobileNavTitle: '',
        logoSrc: flag ? '/static/img/taurus-logo.png' : '/static/img/taurus-mobile-logo.png'
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
        if (this.$route && this.$route.fullPath && this.$route.fullPath.split('/').length > 2) {
          this.mobileNavTitle = this.$route.fullPath.split('/')[2].replace(/(\w)/, function (v) { return v.toUpperCase() })
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mobile-logo {
    width: 213px;
  }
</style>

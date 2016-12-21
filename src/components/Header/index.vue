<template>
  <div class="doc-header">
    <header class="doc-container">
      <router-link to="/" class="doc-header-logo">
        <img class="doc-logo1" src="/static/img/taurus-logo.png">
        <img class="doc-logo2" src="/static/img/taurus-logo-noword.png">
      </router-link>
      <a class="doc-nav-show">
        <i class="icon icon-hamburger-menu"></i>
        <i class="icon icon-close"></i>
      </a>
      <div class="doc-title">component</div>
      <ul class="doc-header-nav">
        <li>
          <router-link active-class="active" to='/design'><span>Design</span></router-link>
        </li>
        <li><router-link active-class="active" to='/guide' ><span>Guide</span></router-link></li>
        <li><router-link active-class="active" to='/element'><span>Element</span></router-link></li>
        <li>
          <router-link active-class="active" to='/component' ><span>Component</span></router-link>
        </li>
        <li><router-link active-class="active" to='/assets'><span>Assets</span></router-link></li>
        <li><router-link active-class="active" to='/case'><span>Telenor</span></router-link></li>
        <li><router-link active-class="active" to='/faq' ><span>FAQ</span></router-link></li>
      </ul>
  </header>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: ''
      }
    },
    mounted () {
      $(window).resize(() => {
        var dropDown = this.$refs.dropdown
        var header = this.$refs.header
        if (header.clientWidth > '1108') { // 当窗口大于1108px时隐藏dropdown
          $(dropDown).removeAttr('style')
        }
      })
    },
    methods: {
      toggle (e) {
        e.preventDefault()
        var dropDown = this.$refs.dropdown
        // 当dropDown没有加display=‘block’样式或者style属性为空时，点击按钮显示下拉菜单，反之隐藏
        if ($(dropDown).attr('style') !== undefined && $(dropDown).attr('style') !== '') {
          $(dropDown).slideUp(() => {
            $(dropDown).removeAttr('style')
          })
        } else {
          $(dropDown).slideDown(() => {
            console.log($(this))
            $(dropDown).addClass('block')
          })
        }
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>

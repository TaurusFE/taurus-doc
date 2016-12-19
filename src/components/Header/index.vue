<template>
  <div class="fix-header">
    <header class="header" ref='header'>
        <router-link to='/' class="header-logo">
          <img src="/static/img/taurus-logo.png">
        </router-link>
      <a class='button button-default collapse' @click='toggle'><i class='icon icon-hamburger-menu'></i></a>
      <div class="">
        <div class="menu-dropdown" ref='dropdown'>
          <ul class="home-nav">
            <!--<li class="home-nav-item__active"><a href="/patterns/index.html"><span>Home</span></a></li>-->
            <li>
              <router-link active-class="active" to='/' exact><span>Home</span></router-link>
            </li>
            <li>
              <router-link active-class="active" to='/design'><span>Design</span></router-link>
            </li>
            <li><a href="/document/guides/index.html"><span>Guide</span></a></li>
            <li><a href="/elements/index.html"><span>Elements</span></a></li>
            <li>
              <router-link active-class="active" to='/component' ><span>Component</span></router-link>
            </li>
            <li><a href="/asset/index.html"><span>Assets</span></a></li>
            <li><a href="/case/index.html"><span>Telenor</span></a></li>
            <li><a href="/faqs/index.html"><span>FAQ</span></a></li>
          </ul>
        </div>
      </div>
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
<style lang="scss" scoped>
  .fix-header {
    position: fixed;
    width: 100%;
    height: 70px;
    z-index: 1000;
    border-bottom: 1px solid #eee;
    background: #fff;
    transition: opacity 0.5s;
    .header {
      display: flex;
      margin: 0 auto;
      width: 1300px;
      justify-content: space-between;
    }
    .header-logo {
      line-height: 70px;
      height: 70px;
      display: block;
      img {
        padding-top: 8.5px;
      }
    }
    .collapse {
      display: none;
      .icon .icon {
        margin-right: 0px
      }
    }
    .home-nav>li {
      display: inline-block;
      color: white;
      position: relative;
      line-height: 70px;
      padding-right: 20px;
      padding-left: 20px;
      &:last-child {
        padding-right: 0px;
      }
    }
    .home-nav a {
      display: block;
      font-size: 16px;
      color: #333;
      line-height: 70px;
      &:hover {
        text-decoration: none;
        color: #108eec;
        font-weight: boldl
      }
      &.active::before {
            content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #108ee9;
      }
    }

    @media (max-width: 1108px) {
      .collapse {
        position: absolute;
        top: 22px;
        right: 0px;
        display: block;
      }
      .menu-dropdown {
        position: absolute;
        top: 70px;
        width: 415px;
        display: none;
        right: 5px;
        height: auto;
        background: #fff;
        border: 1px solid #e8e8e8;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
        .home-nav {
          display: block;
        }
        .home-nav>li {
          display: block;
          text-align: center;
          padding: 10px;
        }
        .home-nav>li:last-child {
          padding-right: 0px
        }
        .home-nav>li.home-nav-item__active {
          background: #e7f4fd;
          & > a {
            color: #108ee9;
            font-weight: bold;
            border-bottom: none;
          }
        }

        .home-nav a {
          display: block;
          font-size: 14px;
          line-height: 40px;
          color: #666;
          &:hover {
            text-decoration: none;
            color: #108eec;
            border-bottom: none;
          }
        }
      }
    }
    @media (max-width: 768px) {
      .menu-dropdown {
        width: 320px;
        right: -5px;
      }
    }
  }
</style>
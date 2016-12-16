<template>
  <div class="fix-header" ref='header'>
    <div class="grid-row">
      <div class="col-md-3 col-sm-12 col-xs-12">
        <a href="#" class="header-logo">
        <img src="/static/img/taurus-logo.png">
      </a>
      </div>
      <a class='button button-default collapse' @click='toggle'><i class='icon icon-hamburger-menu'></i></a>
      <div class="col-md-9 col-xs-12">
        <div class="menu-dropdown"  ref='dropdown'>
          <ul class="home-nav">
            <!--<li class="home-nav-item__active"><a href="/patterns/index.html"><span>Home</span></a></li>-->
            <li class="home-nav-item__active"><router-link to='/'><span>Home</span></router-link></li>
            <li><router-link to='/design'><span>Design</span></router-link></li>
            <li><a href="/document/guides/index.html"><span>Guide</span></a></li>
            <li><a href="/elements/index.html"><span>Elements</span></a></li>
            <li><router-link to='/component' ><span>Component</span></router-link></li>
            <li><a href="/asset/index.html"><span>Assets</span></a></li>
            <li><a href="/case/index.html"><span>Telenor</span></a></li>
            <li><a href="/faqs/index.html"><span>FAQ</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    $(window).resize(() => {
      var dropDown = this.$refs.dropdown
      var header = this.$refs.header
      debugger
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
    height: 80px;
    z-index: 1000;
    border-bottom: 1px solid #eee;
    background: #fff;
    transition: opacity 0.5s;
    padding: 0 4%;
    .header-logo {
      line-height: 80px;
      height: 80px;
      display: block;
      img {
        height: 80px;
        transform: scale(0.6);
        width: auto;
      }
    }
    .collapse {
      display: none;
    }
    .home-nav {
      display: inline-block;
      float: right;
    }
    .home-nav li {
      display: inline-block;
      color: white;
      line-height: 80px;
      padding: 0 20px;

    }
    .home-nav li.home-nav-item__active > a {
      color: #108ee9;
      font-weight: bold;
      border-bottom: 3px solid #108ee9;
    }
    .home-nav a {
      display: block;
      font-size: 1.188rem;
      line-height: 80px;
      color: #666;
      &:hover {
        text-decoration: none;
        color: #108eec;
        border-bottom: 3px solid #108ee9;
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
          float: none;
        }
        .home-nav li {
          display: block;
          text-align: center;
          padding: 10px;

        }
        .home-nav li.home-nav-item__active {
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
        top: -10px;
      }
    }
  }
</style>

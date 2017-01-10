<template>
  <div class="doc-header">
    <header class="doc-container">
      <router-link to="/" class="doc-header-logo" :class="{'mobile-logo': mobile}">
        <img class="doc-logo1" :src="logoSrc">
        <img class="doc-logo2" src="/static/img/taurus-logo-noword.png">
      </router-link>
      <div class="search-box" :class='{"search-box-mobile": mobile}' v-clickoutside='handleBlur'>
        <input class="search-box__input"
               v-model='search'
               @input="showResult"
               @focus="showResult"
               @keyup.up="highlight(highlightedIndex - 1)"
               @keyup.down="highlight(highlightedIndex + 1)"
               @keyup.enter.stop="select(highlightedIndex)"
               placeholder='Search Components...'>
        <div class="dropdown" :class='{none: !active}'>
          <ul ref='dropDown'>
            <li @click="searchClick(item)" :ref='"item-"　+index' :class='{active: highlightedIndex === index}'  v-for='(item, index) in componentArray' >
              <router-link :to='base + item.path' class="item" ><strong>{{item.title}}</strong> </router-link>
            </li>
          </ul>
        </div>
      </div>
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
  import menuList from '../../config/router.json'
  import Clickoutside from '../../directive/clickoutside.js'
  let isShowMobileNav = false
  export default {
    data () {
      let flag = /^\/desktop/.test(this.$route.fullPath)
      return {
        active: false,
        mobile: !flag,
        search: '',
        mobileNavTitle: '',
        highlightedIndex: -1,
        logoSrc: flag ? '/static/img/taurus-logo.png' : '/static/img/taurus-mobile-logo.png'
      }
    },
    directives: { Clickoutside },
    computed: {
      base () {
        let flag = this.mobile ? 'mobile' : 'desktop'
        return `/${flag}/component`
      },
      componentArray () {
        let data = menuList[this.mobile ? 'mobile' : 'desktop']
        let groups = data['component']
        let array = []
        for (let i = 0; i < groups.length; i++) {
          array = array.concat(groups[i].list)
        }
        return array.filter((item) => {
          return item.title.toUpperCase().indexOf(this.search.toUpperCase()) !== -1
        })
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
      },
      searchClick (item) {
        this.active = false
        this.search = item.title
      },
      handleBlur: function () {
        if (this.active) {
          this.active = false
        }
      },
      showResult: function () {
        this.active = true
      },
      hideResult: function () {
        this.active = false
      },
      highlight: function (index) {
        if (index < 0) {
          index = 0
        } else if (index > this.componentArray.length) {
          index = this.componentArray.length - 1
        }
        let dropDown = this.$refs.dropDown
        let currentLi = dropDown.children[index]
        let scrollTop = dropDown.scrollTop
        let offsetTop = currentLi.offsetTop
        if (offsetTop + currentLi.scrollHeight > (scrollTop + dropDown.clientHeight)) {
          dropDown.scrollTop += currentLi.scrollHeight
        }
        if (offsetTop < scrollTop) {
          dropDown.scrollTop -= currentLi.scrollHeight
        }
        this.highlightedIndex = index
      },
      select: function (index) {
        var currentAtag = this.$refs['item-' + index][0].children[0]
        currentAtag.click()
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mobile-logo {
      padding-top: 18px;
   }
  .search-box {
    display: inline-block;
    border-left: 1px solid #EBEDEE;
    height: 22px;
    line-height: 22px;
    padding-left: 30px;
    margin-top: 29px;
    margin-left: 120px;
  }
  .search-box-mobile {
    margin-left: 35px;
  }
  .search-box .dropdown {
    border: 0;
    top: 5px;
    border-radius: 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    z-index: 1050;
    background-color: #fff;
  }
  .search-box .none {
    display: none
  }
  .search-box .dropdown ul {
    max-height: 200px;
    overflow: auto;
  }
  .search-box .dropdown .item {
    padding: 7px 16px;
    color: rgba(0, 0, 0, 0.65);
    display: block;
  }
  .search-box .dropdown .item:hover {
    background-color: #ecf6fd;
  }
  .search-box .dropdown li.active {
    background-color: #ecf6fd;
  }
  .search-box__input {
    height: 100%;
    border: none;
  }
  .search-box__input:focus {
    outline: none
  }
  .search-box__input::-webkit-input-placeholder {
   color: #99a9bf
   }
  .search-box__input::-moz-placeholder {
   color: #99a9bf
  }
  .search-box__input:-ms-input-placeholder {
   color: #99a9bf
  }
  .search-box__input::placeholder {
   color: #99a9bf
  }
  .search-box__input::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
 }
 @media (max-width: 544px){
  .search-box {
    display: none;
  }
 }
</style>

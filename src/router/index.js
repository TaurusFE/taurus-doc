/**
 * Created by y1205 on 2016/12/15.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/home'
import Design from '../pages/design'
import Component from '../pages/component'
import Element from '../pages/element'
import Guide from '../pages/guide'
import Faq from '../pages/faq'
import Assets from '../pages/assets'
import Case from '../pages/telenor'
import { taurus } from '../config'
import navConfig from '../config/router.json'
var pageRouters = [
  { name: 'home', path: '/', component: Home },
  {
    name: 'design',
    path: '/design',
    redirect: '/design/principle',
    component: Design
  },
  {
    name: 'component',
    path: '/component',
    component: Component,
    redirect: '/component/switcher'
  },
  {
    name: 'element',
    path: '/element',
    component: Element,
    redirect: '/element/color'
  },
  {
    name: 'guide',
    path: '/guide',
    component: Guide,
    redirect: '/guide/developGuide'
  },
  {
    name: 'faq',
    path: '/faq',
    component: Faq,
    redirect: '/faq/developFAQ'
  },
  {
    name: 'assets',
    path: '/assets',
    redirect: '/assets/download',
    component: Assets
  },
  {
    name: 'case',
    path: '/case',
    component: Case,
    redirect: () => {
      return {
        path: '/case/sitemap',
        query: {
          url: 'http://10.19.18.95:48880/Wireframe/sitemap.html'
        }
      }
    }
  }
]
/**
 * 获取各个一级菜单下面的子菜单
 * @param navList 对应router.json中的一级数组.例如 ‘component’: []
 * @param name 对应router.json一级菜单的名字 'component
 * @return childrenRouters
 * */
function getChildRouter (navList, name) {
  let childrenRouters = {}
  childrenRouters[name] = []
  for (let i = 0; i < navList.length; i++) {
    let childrenList = navList[i].list
    for (let j = 0; j < childrenList.length; j++) {
      var childConf = childrenList[j]
      let child = {
        path: childConf.path.replace('/', ''),
        name: childConf.path.replace('/', ''),
        component: taurus[name][childConf.path.replace('/', '')]
      }
      childrenRouters[name].push(child)
    }
  }
  return childrenRouters
}
/**
 * 返回router.json中各个菜单在主菜单中的位置，用于将子菜单配置插入到主菜单数组中
 * @param pageRouters 主菜单数组
 * @name 主菜单名字
 * @return index
 * */
function getRootRouter (pageRouters, name) {
  for (let i = 0; i < pageRouters.length; i++) {
    if (pageRouters[i].name === name) {
      return i
    }
  }
}

for (let obj in navConfig) {
  let childRouters = getChildRouter(navConfig[obj], obj)
  console.log(childRouters)
  let index = getRootRouter(pageRouters, obj)
  pageRouters[index].children = childRouters[obj]
}

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: pageRouters
})

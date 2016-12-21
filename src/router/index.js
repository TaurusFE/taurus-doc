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
function addChildren (navConfig, type) {
  let list = navConfig[type]
  let childConfList = []
  for (let i = 0, len = list.length; i < len; i++) {
    let children = list[i].list
    for (let j = 0; j < children.length; j++) {
      let childConf = children[j]
      let child = {
        path: childConf.path.replace('/', ''),
        name: childConf.path.replace('/', ''),
        component: taurus[type][childConf.path.replace('/', '')]
      }
      childConfList.push(child)
    }
  }
  return childConfList
}
function registerRoute (routers, type, navConfig) {
  for (let i = 0; i < routers.length; i++) {
    if (routers[i].name === type) {
      routers[i].children = addChildren(navConfig, type)
    }
  }
  return routers
}
let routers = registerRoute(pageRouters, 'component', navConfig)
routers = registerRoute(routers, 'element', navConfig)
routers = registerRoute(routers, 'case', navConfig)
routers = registerRoute(routers, 'design', navConfig)
routers = registerRoute(routers, 'assets', navConfig)
debugger
console.log(pageRouters)
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})

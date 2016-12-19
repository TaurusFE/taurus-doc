/**
 * Created by y1205 on 2016/12/15.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../pages/home/'
import Design from '../pages/design/'
import Princ from '../pages/design/principle/'
import Component from '../pages/component/'
import { taurus } from '../markdown/'
import navConfig from '../config/router.json'
var pageRouters = [
  { name: 'home', path: '/', component: Home },
  {
    name: 'design',
    path: '/design',
    redirect: '/design/princ',
    component: Design,
    default: 'princ',
    children: [
      {
        name: 'princ',
        path: 'princ',
        component: Princ
      }
    ]
  },
  {
    name: 'component',
    path: '/component',
    component: Component,
    redirect: '/component/switcher'
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
        component: taurus[childConf.path.replace('/', '')]
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
let routes = registerRoute(pageRouters, 'component', navConfig)
console.log(routes)
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

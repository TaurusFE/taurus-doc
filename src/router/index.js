/**
 * Created by y1205 on 2016/12/15.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Taurus from 'ai-taurus-desktop'
Vue.use(Router)
Vue.use(Taurus)
let buildFlag = false
import component from '../config'
import navConfig from '../config/router.json'
function generate (type) {
  var pageRouters = [
    {
      path: `/${type}/design`,
      redirect: `/${type}/design/principle`,
      component: require('../pages/design')
    },
    {
      path: `/${type}/component`,
      component: require('../pages/component'),
      redirect: `/${type}/component/switcher`
    },
    {
      path: `/${type}/element`,
      component: require('../pages/element'),
      redirect: `/${type}/element/color`
    },
    {
      path: `/${type}/guide`,
      component: require('../pages/guide'),
      redirect: `/${type}/guide/developGuide`
    },
    {
      path: `/${type}/faqs`,
      component: require('../pages/faq'),
      redirect: `/${type}/faqs/developFAQ`
    },
    {
      path: `/${type}/assets`,
      component: require('../pages/assets'),
      redirect: `/${type}/assets/download`
    },
    {
      path: `/${type}/case`,
      component: require('../pages/telenor'),
      redirect: () => {
        return {
          path: `/${type}/case/sitemap`,
          query: {
            url: '/Wireframe/sitemap.html'
          }
        }
      }
    }
  ]

  if (type === 'mobile') {
    pageRouters[1].redirect = `/${type}/component/search`
  }

  return pageRouters
}
/**
 * 获取各个一级菜单下面的子菜单
 * @param navList 对应router.json中的一级数组.例如 ‘component’: []
 * @param name 对应router.json一级菜单的名字 'component
 * @return childrenRouters
 * */
function getChildRouter (navList, name, type) {
  let childrenRouters = {}
  childrenRouters[name] = []
  for (let i = 0; i < navList.length; i++) {
    let childrenList = navList[i].list
    for (let j = 0; j < childrenList.length; j++) {
      var childConf = childrenList[j]
      let child = {
        path: childConf.path.replace('/', ''),
        component: component[type][name][childConf.path.replace('/', '')]
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
    let path = pageRouters[i].path
    let menuName = path.substring(path.lastIndexOf('/') + 1, path.length)
    if (menuName === name) {
      return i
    }
  }
}
var route = []
for (let type in navConfig) {
  let parentRouter = generate(type)
  let menus = navConfig[type]
  for (let menu in menus) {
    let childRouters = getChildRouter(menus[menu], menu, type)
    let index = getRootRouter(parentRouter, menu)
    parentRouter[index].children = childRouters[menu]
    route = route.concat(parentRouter)
  }
}
var errorRoute = [
  {
    path: '/',
    component: require('../pages/home')
  },
  {
    path: '/*',
    component: require('../pages/notFound'),
    name: '404'
  },
  {
    path: '/503',
    component: require('../pages/underBuild'),
    name: '503'
  }
]
route = route.concat(errorRoute)
if (buildFlag) {
  for (let i = 0; i < route.length; i++) {
    if (route[i].path === '/') {
      route[i].component = require('../pages/underBuild')
      break
    }
  }
}
export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: route
})

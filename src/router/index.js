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
import {taurus} from '../markdown/'
/***
 * 待完善
 */
// const registerRoute = (navConfig) => {
//   let route = [];
//   Object.keys(navConfig).forEach((lang, index) => {
//     let navs = navConfig[lang];
//     route.push({
//       path: `/${ lang }/component`,
//       redirect: `/${ lang }/component/installation`,
//       component: require(`./pages/${ lang }/component.vue`),
//       children: []
//     });
//     navs.forEach(nav => {
//       if (nav.groups) {
//         nav.groups.forEach(group => {
//           group.list.forEach(nav => {
//             addRoute(nav, lang, index);
//           });
//         });
//       } else if (nav.children) {
//         nav.children.forEach(nav => {
//           addRoute(nav, lang, index);
//         });
//       } else {
//         addRoute(nav, lang, index);
//       }
//     });
//   });
//   function addRoute(page, lang, index) {
//     const component = page.path === '/changelog'
//       ? require(`./pages/${ lang }/changelog.vue`)
//       : require(`./docs/${ lang }${page.path}.md`);
//     let child = {
//       path: page.path.slice(1),
//       meta: {
//         title: page.title || page.name,
//         description: page.description,
//         lang
//       },
//       name: 'component-' + (page.title || page.name),
//       component: component.default || component
//     };
//
//     route[index].children.push(child);
//   }
//   return route;
// };

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  default: 'home',
  routes: [
    {name: 'home', path: '/', component: Home},
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
      redirect: '/component/switcher',
      children: [
        {
          name: 'switcher',
          path: 'switcher',
          component: taurus.switcher
        }
      ]
    }

  ]
})

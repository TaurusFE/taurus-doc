// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/CodeBlock/'
Vue.component('demo-block', demoBlock)
// 导入全局样式
import 'highlight.js/styles/github.css'
import 'github-markdown-css'
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

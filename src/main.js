// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'

Vue.config.productionTip = false

// 快速点击，消除延迟0.3秒
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// cd WEB\Vue\vuedemo-travel

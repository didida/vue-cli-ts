// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import './hooks'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// tslint:disable-next-line:no-unused-expression
new Vue({
  el: 'app',
  router,
  render: (h) => h(App)
})

Vue.config.devtools = true

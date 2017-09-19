import Vue from 'vue'
import Router from 'vue-router'

// 首页
import IndexPage from '../views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'IndexPage', component: IndexPage }
  ]
})

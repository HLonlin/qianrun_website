import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'indexPage',
    component: indexPage
  }]
})
//需要配置的路由路径写在此index.js里面

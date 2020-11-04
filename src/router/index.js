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
// 清除路由重复报错
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
//需要配置的路由路径写在此index.js里面

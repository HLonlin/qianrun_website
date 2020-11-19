import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'indexPage',
    component: resolve => require(['@/components/index'], resolve)
  }]
})
// 清除路由重复报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
//需要配置的路由路径写在此index.js里面

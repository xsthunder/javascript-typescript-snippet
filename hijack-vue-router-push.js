// 劫持router.push函数，转换simed的route，用于合并代码时，给子代码分配一个页面路由prefix，但不修改子代码页面跳转的参数路径
// 如果在"/simed/*"页面内尝试使用 this.$router.push({path:"/^(simed)/"})转跳 ，则重写path:加入simed前缀
// in main.js
import Router from 'vue-Router'
vue.use(Router)
const router = Router()
const originalPush = router.push
router.push = function(obj, ...params){
  const current = this.history.current
  // console.log(this, current)
  const currentPath = current.path
  const prefix = "/simed/"
  if(obj instanceof Object){
    let toPath = obj['path']
    if(toPath && currentPath.indexOf(prefix)==0 && toPath.indexOf(prefix) == -1){
      toPath = `/simed${toPath}`
      obj['path'] = toPath
    }
  }
  originalPush.call(this, obj, ...params) // see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/call
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

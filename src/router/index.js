import VueRouter from  'vue-router'
import Vue from 'vue'
import iView from 'iview'
import routes  from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    next()
})

// const LOGIN_PAGE_NAME = 'login'
// router.beforeEach((to, from, next) => {
//     iView.LoadingBar.start()
//     const token = getToken()
//     //未登录且要跳转的页面不是登录页
//     if(!token && to.name !== LOGIN_PAGE_NAME) {
//         next({
//             name: LOGIN_PAGE_NAME //跳转到登陆页
//         })
//     } else if (!token && to.name === LOGIN_PAGE_NAME) {
//         //未登录且要跳转的页面是登录页
//         next()  //跳转
//     } else if(token && to.name === LOGIN_PAGE_NAME) {
//         // 已登陆且要跳转的页面为登录页
//         next({
//             name: 'home' //跳转到home页面
//         })
//     } else {
//         store.dispatch('getUserInfo').then(user => {
//             // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限
//             if(canTurnTo(to.name, user.access, routes)) next() //有权限，可访问
//             else next({ replace: true, name: 'error_404' })  //无权限，重定向
//         })
//     }
// })

router.afterEach(to => {
    iView.LoadingBar.finish()
    window.scrollTo(0,0)
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/index'
import home from '@/view/home/home'
// import homeNoFooter from '@/view/home/homeNoFooter'
import Login from '@/view/user/Login'
import financeReport from '@/view/report/financeReport.vue'
import expenses from '@/view/expenses/expenses.vue'
import taskManage from '@/view/task/taskManage.vue'
import autobiography from '@/view/autobiography/autobiography.vue'
import passwordManage from '@/view/toolCase/passwordManage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          name: 'report',
          component: financeReport,
          meta:{
            hasFooter: true
          }
        },
        {
          path: '/report',
          name: 'report',
          component: financeReport,
          meta:{
            hasFooter: true
          }
        },
        {
          path: '/expenses',
          name: 'expenses',
          component: expenses,
          meta:{
            hasFooter: false
          }
        },
        {
          path: '/autobiography',
          name: 'autobiography',
          component: autobiography,
          meta:{
            hasFooter: false
          }
        },
        {
          path: '/passwordManage',
          name: 'passwordManage',
          component: passwordManage,
          meta:{
            hasFooter: false
          }
        },
        {
          path: '/taskManage',
          name: 'taskManage',
          component: taskManage,
          meta:{
            hasFooter: false
          }
        }
      ]
    }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// 全局路由守卫
router.beforeEach((to, from, next) => {
  let token =localStorage.getItem('token');
  if (!token){  //如果token不存在则进入登录页
    if(to.name === 'Login'){  //如果去的是登录页，则放行
      next()
    }else{
      router.push({
        name: 'Login',
      })
    }
  }else{
    if(to.name === 'Login'){  //如果去的是登录页，则跳转到首页
      next('/home')
    }
    next()
  }
})

export default router
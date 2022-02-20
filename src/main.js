import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import echarts from 'echarts'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'
Vue.use(less)
Vue.use(Element)
Vue.use(echarts)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.echarts = echarts
axios.defaults.timeout = 5000000;
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    console.log(response)
    //如果响应返回code-999则跳转到登录页
    if(response.data.status ===301){
        localStorage.setItem('token','')    //将token制空
        window.location.href='/login'
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

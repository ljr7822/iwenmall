import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
// import env from './env'

const mock = false;
if(mock){
  require('./mock/api')
}

Vue.config.productionTip = false

// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5f6f0151d94dae3ef99d173b/iwenmall';
axios.defaults.baseURL = '/api';
//axios.defaults.timeout = 8000;

// axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
    return Promise.reject(res);
  }
});

Vue.use(VueAxios,axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad,{
  location:'/imgs/loading-svg/loading-balls.svg'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

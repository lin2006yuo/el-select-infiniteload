import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import lodash from "lodash";
//vuex
import store from './store'  //不能大写
//mock
if(process.env.NODE_ENV !== 'production') require('./mock')
//iview
import iview from 'iview'
import 'iview/dist/styles/iview.css'

import Directive  from './directive/directive'
import './iconfont/iconfont.css'


Vue.use(Directive)
Vue.use(ElementUI)
Vue.use(iview)
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '_', { value: lodash });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

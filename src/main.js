import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

import Directive  from './directive/directive'
import './iconfont/iconfont.css'

Vue.use(Directive)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

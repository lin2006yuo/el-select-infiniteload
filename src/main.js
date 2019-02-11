import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import lodash from "lodash";
//vuex
import store from "./store"; //不能大写
//mock
if (process.env.NODE_ENV !== "production") require("./mock");
//iview
import iview from "iview";
import "iview/dist/styles/iview.css";
//指令
import Directive from "./directive/directive";
import SearchField from "./directive/search-field";
import "./iconfont/iconfont.css";
// plugin
import VueLoading from "@/plugin/loading";
//swiper
import 'swiper/dist/css/swiper.css'
//typedjs
import 'vue-typed-js/dist/vue-typed-js.css'


Vue.use(VueLoading);
Vue.use(Directive);
Vue.use(SearchField);
Vue.use(ElementUI);
Vue.use(iview);
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "_", { value: lodash });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

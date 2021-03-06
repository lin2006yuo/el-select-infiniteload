import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import tagsView from './module/tagsView'
//插件
import saveInLocal from './plugin/saveInLocal.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
    tagsView
  }
  // plugins: [saveInLocal]
})

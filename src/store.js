import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '',
    admin_role_id:'',
  },
  mutations: {
    setAccesstoken(state, token) {
      state.access_token = token;
    },
    adminID(state, admin_role_id) {
      state.admin_role_id = admin_role_id;
    }
  }
})

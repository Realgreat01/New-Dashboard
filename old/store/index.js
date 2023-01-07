import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  getters: {
    user:(state) => {
      return state.user;
    }
  },
  mutations: {
   user (state, user){
    state.user = user
   }
  },
  actions: {
   async fetchUser({commit}) {
      const admin_id = localStorage.getItem("admin_id")
      const response = await axios.get("http://34.192.182.160:8010/admin/user/"+admin_id, {
        headers: { 
          Authorization: "Bearer " + localStorage.getItem ("token")
        }
      });
      commit('user', response.data.data);
      return Promise.resolve();
   },
   user(context, user){
    context.commit("user", user)
   }
  },
  modules: {
  }
})

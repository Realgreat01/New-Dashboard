import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token:null
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    // isAuthenticated: state => !!state.user,    
    // StatePosts: state => state.posts,
    // StateUser: state => state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  LogOut(state){
      state.user = null
  },
  },
  actions: {
    async LogIn({commit}, User) {
      await axios.post('login', User)
      // await commit('setUser', User.get('username'))
    },
    async CreatePost({dispatch}, post) {
      await axios.post("post", post)
      await dispatch('GetPosts')
    },
    async LogOut({commit}){
      let user = null
      commit('logout', user)
    }    
  },
  modules: {
  }
})

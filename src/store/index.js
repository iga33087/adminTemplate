import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgMode:localStorage.bgMode
  },
  mutations: {
    bgMode(state, x) {
      localStorage.bgMode=x
      state.bgMode =localStorage.bgMode
    }
  },
  actions: {
  },
  modules: {
  }
})

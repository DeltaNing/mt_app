import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  position: '北京'
}

const mutations = {
  setPosition (state, value) {
    state.position = value
  }
}

const actions = {
  setPosition ({ commit }, value) {
    // 异步请求后端获取数据
    commit('setPostion', value)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

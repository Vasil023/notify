export default {
  state: {
    message: [],
    messageMain: []
  },
  mutations: {
    setMessage (state, payload) {
      state.message = payload
    },
    setMessageMain (state, payload) {
      state.messageMain = payload
    }
  },
  actions: {
    setMessage ({commit}, payload) {
      commit('setMessage', payload)
    },
    setMessageMain ({commit}, payload) {
      commit('setMessageMain', payload)
    }
  },
  getters: {
    getMessage (state) {
      return state.message
    },
    getMessageMain (state) {
      return state.messageMain
    }
  }
}
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  string: true,
  plugins: [createPersistedState()],
  state: {
    token: null,
    user: null,
    qoutes: null,
    notes: null,
    vocabulary: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },

    setQoutes (state, qoutes) {
      state.qoutes = qoutes
    },
    addQoute (state, payload) {
      state.qoutes.push(payload)
    },
    updateQoute (state, payload) {
      console.log(payload)
      state.qoutes[0] = Object.assign({}, payload)
      // Vue.set(state.qoutes[0], 'qoute', payload.qoute)
    },

    setNotes (state, payload) {
      state.notes = payload
    },
    addNote (state, payload) {
      state.notes.push(payload)
    },

    setVocabulary (state, payload) {
      state.vocabulary = payload
    },
    addWord (state, payload) {
      state.vocabulary.push(payload)
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },

    setQoutes ({commit}, payload) {
      commit('setQoutes', payload)
    },
    addQoute ({commit}, payload) {
      commit('addQoute', payload)
    },
    updateQoute ({commit}, payload) {
      commit('updateQoute', payload)
    },

    setNotes ({commit}, payload) {
      commit('setNotes', payload)
    },
    addNote ({commit}, payload) {
      commit('addNote', payload)
    },

    setVocabulary ({commit}, payload) {
      commit('setVocabulary', payload)
    },
    addWord ({commit}, payload) {
      commit('addWord', payload)
    }
  },
  getters: {
    isUserLoggedIn (state) {
      return state.isUserLoggedIn
    },
    user (state) {
      return state.user
    },
    token (state) {
      return state.token
    },
    qoutes (store) {
      return store.qoutes
    },
    notes (state) {
      return state.notes
    },
    vocabulary (state) {
      return state.vocabulary
    }
  }
})

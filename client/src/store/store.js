import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import Merge from 'lodash.merge'

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
    diary: null,
    publicDiary: null,

    isUserLoggedIn: false,
    additionalModal: false,
    currentPage: null,
    error: ''
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
    setAdditionalModal (state, payload) {
      state.additionalModal = !payload
    },
    setUser (state, user) {
      state.user = user
    },
    currentPage (state, payload) {
      state.currentPage = payload
    },

    setQoutes (state, payload) {
      state.qoutes = payload
    },
    addQoute (state, payload) {
      state.qoutes.push(payload)
    },
    updateQoute (state, payload) {
      Merge(state.qoutes.find(qoute => qoute._id === payload._id), payload)
    },

    setNotes (state, payload) {
      state.notes = payload
    },
    addNote (state, payload) {
      state.notes.push(payload)
    },
    updateNote (state, payload) {
      Merge(state.notes.find(note => note._id === payload._id), payload)
    },

    setVocabulary (state, payload) {
      state.vocabulary = payload
    },
    addVocabulary (state, payload) {
      state.vocabulary.push(payload)
    },
    updateVocabulary (state, payload) {
      Merge(state.vocabulary.find(word => word._id === payload._id), payload)
    },

    setDiary (state, payload) {
      state.diary = payload
    },
    addDiary (state, payload) {
      state.diary.push(payload)
    },
    updateDiary (state, payload) {
      Merge(state.diary.find(diaryNote => diaryNote._id === payload._id), payload)
    },
    setPublicDiary (state, payload) {
      state.publicDiary = payload
    },

    deleteItem (state, payload) {
      switch (payload.type) {
        case 'vocabulary':
          state.vocabulary = state.vocabulary.filter(word => word._id !== payload.id)
          break
        case 'qoutes':
          state.qoutes = state.qoutes.filter(qoute => qoute._id !== payload.id)
          break
        case 'diaries':
          state.diary = state.diary.filter(item => item._id !== payload.id)
          break
        case 'notes':
          state.notes = state.notes.filter(note => note._id !== payload.id)
          break
        default: console.log('invalid id of item')
      }
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    deleteItem ({commit}, payload) {
      commit('deleteItem', payload)
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
    setPublicDiary ({commit}, payload) {
      commit('setPublicDiary', payload)
    },

    setNotes ({commit}, payload) {
      commit('setNotes', payload)
    },
    addNote ({commit}, payload) {
      commit('addNote', payload)
    },
    updateNote ({commit}, payload) {
      commit('updateNote', payload)
    },

    setVocabulary ({commit}, payload) {
      commit('setVocabulary', payload)
    },
    addVocabulary ({commit}, payload) {
      commit('addVocabulary', payload)
    },
    updateVocabulary ({commit}, payload) {
      commit('updateVocabulary', payload)
    },

    setDiary ({commit}, payload) {
      commit('setDiary', payload)
    },
    addDiary ({commit}, payload) {
      commit('addDiary', payload)
    },
    updateDiary ({commit}, payload) {
      commit('updateDiary', payload)
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
    additionalModal (state) {
      return state.additionalModal
    },
    currentPage (state) {
      return state.currentPage
    },

    qoutes (state) {
      return state.qoutes.sort((itemA, itemB) => itemA.date < itemB.date)
    },
    notes (state) {
      return state.notes.sort((itemA, itemB) => itemA.date < itemB.date)
    },
    vocabulary (state) {
      return state.vocabulary.sort((itemA, itemB) => itemA.date < itemB.date)
    },
    diary (state) {
      return state.diary.sort((itemA, itemB) => itemA.date < itemB.date)
    },
    diaryItem (state) {
      return (diaryId) => state.diary.find(diaryNote => diaryNote._id === diaryId)
    },
    noteItem (state) {
      return (noteId) => state.notes.find(note => note._id === noteId)
    },
    publicDiaries (state) {
      return state.publicDiary
    },
    publicDiariesItem (state, getters) {
      return (diaryId) => getters.publicDiaries.find(diary => diary._id === diaryId)
    }
  }
})

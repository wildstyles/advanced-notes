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
    diary: null,
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

    setQoutes (state, payload) {
      state.qoutes = payload
    },
    addQoute (state, payload) {
      state.qoutes.push(payload)
    },
    updateQoute (state, payload) {
      const qoute = state.qoutes.find(qoute => qoute._id === payload._id)
      Vue.set(qoute, 'qoute', payload.qoute)
      Vue.set(qoute, 'author', payload.author)
      Vue.set(qoute, 'date', payload.date)
      Vue.set(qoute, 'public', payload.public)
    },

    setNotes (state, payload) {
      state.notes = payload
    },
    addNote (state, payload) {
      state.notes.push(payload)
    },
    updateNote (state, payload) {
      const note = state.notes.find(note => note._id === payload._id)
      Vue.set(note, 'title', payload.title)
      Vue.set(note, 'body', payload.body)
      Vue.set(note, 'date', payload.date)
    },

    setVocabulary (state, payload) {
      state.vocabulary = payload
    },
    addVocabulary (state, payload) {
      state.vocabulary.push(payload)
    },
    updateVocabulary (state, payload) {
      const word = state.vocabulary.find(word => word._id === payload._id)
      Vue.set(word, 'word', payload.word)
      Vue.set(word, 'translatedWord', payload.translatedWord)
      Vue.set(word, 'examples', payload.examples)
      Vue.set(word, 'date', payload.date)
    },

    setDiary (state, payload) {
      state.diary = payload
    },
    addDiary (state, payload) {
      state.diary.push(payload)
    },
    updateDiary (state, payload) {
      const diaryNote = state.diary.find(diaryNote => diaryNote._id === payload._id)
      Vue.set(diaryNote, 'title', payload.title)
      Vue.set(diaryNote, 'body', payload.body)
      Vue.set(diaryNote, 'date', payload.date)
      Vue.set(diaryNote, 'public', payload.public)
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

    qoutes (state) {
      return state.qoutes
    },
    notes (state) {
      return state.notes
    },
    vocabulary (state) {
      return state.vocabulary
    },
    diary (state) {
      return state.diary
    },
    diaryItem (state) {
      return (diaryId) => state.diary.find(diaryNote => diaryNote._id === diaryId)
    },
    noteItem (state) {
      return (noteId) => state.notes.find(note => note._id === noteId)
    }
  }
})

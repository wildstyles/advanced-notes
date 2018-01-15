import axios from 'axios'
import store from '@/store/store'

export const HTTP = axios.create({
  baseURL: `http://localhost:3000/`,
  headers: {
    authorization: `Bearer ${store.getters.token}`
  }
})

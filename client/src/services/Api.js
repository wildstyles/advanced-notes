import axios from 'axios'
import store from '@/store/store'

export const HTTP = axios.create({
  baseURL: ``,
  headers: {
    authorization: `Bearer ${store.getters.token}`
  }
})

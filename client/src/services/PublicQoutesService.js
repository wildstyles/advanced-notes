import { HTTP } from '@/services/Api'

export default {
  getPublicQoutes (credentials) {
    return HTTP.get(`publicQoutes`, credentials)
  },
  getPublicQoute (qouteId) {
    return HTTP.get(`publicQoutes/${qouteId}`)
  }
}

import { HTTP } from '@/services/Api'

export default {
  getQoutes (credentials) {
    return HTTP.get(`qoutes`, credentials)
  },
  deleteQoute (qouteId) {
    return HTTP.delete(`qoutes/${qouteId}`)
  },
  createQoute (credentials) {
    return HTTP.post(`qoutes`, credentials)
  },
  updateQoute (qoute) {
    return HTTP.patch(`qoutes/${qoute._id}`, qoute)
  }
}

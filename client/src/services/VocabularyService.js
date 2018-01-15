import { HTTP } from '@/services/Api'

export default {
  getVocabulary (credentials) {
    return HTTP.get(`vocabulary`, credentials)
  },
  deleteWord (qouteId) {
    return HTTP.delete(`vocabulary/${qouteId}`)
  },
  createWord (credentials) {
    return HTTP.post(`vocabulary`, credentials)
  },
  updateWord (credentials) {
    return HTTP.patch(`vocabulary/${credentials._id}`, credentials)
  }
}

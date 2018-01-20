import { HTTP } from '@/services/Api'

export default {
  getVocabulary (credentials) {
    return HTTP.get(`vocabulary`, credentials)
  },
  deleteVocabulary (qouteId) {
    return HTTP.delete(`vocabulary/${qouteId}`)
  },
  createVocabulary (credentials) {
    return HTTP.post(`vocabulary`, credentials)
  },
  updateVocabulary (credentials) {
    return HTTP.patch(`vocabulary/${credentials._id}`, credentials)
  }
}

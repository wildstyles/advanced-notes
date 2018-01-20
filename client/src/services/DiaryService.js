import { HTTP } from '@/services/Api'

export default {
  getDiary (credentials) {
    return HTTP.get(`diary`, credentials)
  },
  deleteDiary (diaryId) {
    return HTTP.delete(`diary/${diaryId}`)
  },
  createDiary (credentials) {
    return HTTP.post(`diary`, credentials)
  },
  updateDiary (diary) {
    return HTTP.patch(`diary/${diary._id}`, diary)
  }
}

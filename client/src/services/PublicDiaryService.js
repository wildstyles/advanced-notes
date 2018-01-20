import { HTTP } from '@/services/Api'

export default {
  getPublicDiaries (credentials) {
    return HTTP.get(`publicDiaries`, credentials)
  },
  getPublicDiary (diaryId) {
    return HTTP.get(`publicDiaries/${diaryId}`)
  }
}

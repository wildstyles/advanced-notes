import { HTTP } from '@/services/Api'

export default {
  getNotes (credentials) {
    return HTTP.get(`notes`, credentials)
  },
  deleteNote (noteId) {
    return HTTP.delete(`notes/${noteId}`)
  },
  createNote (credentials) {
    return HTTP.post(`notes`, credentials)
  },
  updateNote (note) {
    return HTTP.patch(`notes/${note._id}`, note)
  }
}

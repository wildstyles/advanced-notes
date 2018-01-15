<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My note">

        <note-edit slot="action"></note-edit>

        <div class="note-item" v-for="note in notes" :key="note._id">
            <h3 class="note-title">{{note.title}}</h3>
          <div class="note-body" v-text="note.body"></div>
          <div class="note-utility">
            <span class="note-time">{{note.date | date}}</span>
          </div>
          <div class="note-btns">
            <v-btn color="primary" :to="'/profile/notes/' + note._id">Read more</v-btn>
            <v-btn color="error" @click="deleteNote(note._id)">Delete</v-btn>
          </div>
        </div>

      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
  import NotesService from '@/services/NotesService'
  import NotesEdit from '@/components/profile/editModals/NotesEdit'

    export default {
      methods: {
        async deleteNote(noteId) {
          const note = (await NotesService.deleteNote(noteId)).data
          // need to delete note local
          const notes = this.notes.filter(note => note._id !== noteId)
          this.$store.dispatch('setNotes', notes)
        }
      },
      components: {
        noteEdit: NotesEdit
      },
      computed: {
        notes () {
          return this.$store.getters.notes
        }
      },
      async mounted () {
        const notes = (await NotesService.getNotes()).data
        this.$store.dispatch('setNotes', notes)
      }
    }
</script>

<style lang="sass" scoped>

.note 
  &-item 
    background-color: #ccc
    padding: 10px 15px 4px
    border-radius: 5px
    margin: 3px -10px
  
  &-author 
    float: right
  
  &-btns, &-utility 
    display: flex
    justify-content: space-between
  
</style>
<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My single note">
        <div class="diary-item">

            <div class="diary-title">
                {{ noteItem.title }}
            </div>
            
            <div class="diary-body">
                {{ noteItem.body }}
            </div>
            
          <div class="diary-utility">
            <span class="diary-time">{{ noteItem.date | date }}</span>
          </div>
          <div class="diary-btns">
            <edit-modal slot="action" :item="{ item: noteItem, type: 'notes' }"></edit-modal>

            <v-btn color="error" @click="deleteNote(noteItem._id)">Delete</v-btn>
          </div>
        </div>
          
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import NotesService from '@/services/NotesService'
    export default {
      props: ['id'],
      computed: {
        noteItem () {
          return this.$store.getters.noteItem(this.id)
        },
        notes () {
          return this.$store.getters.notes
        }
      },
      methods: {
        async deleteNote(noteId) {
          const note = (await NotesService.deleteNote(noteId)).data
          const notes = this.notes.filter(note => note._id !== noteId)
          this.$store.dispatch('setNotes', notes)
          this.$router.push('/profile/notes')
        }
      }
    }

</script>

<style scoped lang="scss">

    textarea {
      width: 100%;
      font-family: monospace;
      border: none;
      border-style: none;
      resize: none;
      overflow: hidden;
      border-color: transparent;
      overflow: auto;
    }

    .input {
        border-bottom: 1px solid #000;
        width: 100%;
    }

    label {
        display: block; 
    }

    .diary-item {
      background-color: #ccc;
      margin-bottom: 5px;
      padding: 20px;
    }

       
</style>
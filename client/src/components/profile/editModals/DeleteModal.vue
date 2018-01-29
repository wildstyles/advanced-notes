<template>
  <v-dialog v-model="editModal" max-width="500px">

    <v-btn color="red darken-1" flat icon slot="activator">
        <v-icon>delete</v-icon>
    </v-btn>

    <v-card class="delete__item">
        <h3 class="delete__header">Delete {{ type }} item?</h3>

        <v-card-text v-if="type === 'vocabulary'">
        Are you sure you want to delete <b>{{ newItem.word }}</b> word?
        </v-card-text>

        <v-card-text v-if="type === 'qoutes'">
            Are you sure you want to delete <b>{{ newItem.qoute }}</b> qoute?
        </v-card-text>

        <v-card-text v-if="type === 'diaries' || type === 'notes'">
            Are you sure you want to delete <b>{{ newItem.title }}</b> 
            {{ type === 'diaries' ? 'diaries item?' : 'notes item?' }}
        </v-card-text>
            
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.stop="editModal = false">Close</v-btn>
          <v-btn color="red darken-1" flat="flat" @click ="deleteItem">Delete</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<style lang="sass" scoped>
    .delete__header
        padding: 20px
        font-size: 18px
    .delete__item
      text-align: center
</style>

<script>
    import VocabularyService from '@/services/VocabularyService'
    import QoutesService from '@/services/QoutesService'
    import DiaryService from '@/services/DiaryService'
    import NotesService from '@/services/NotesService'

    export default {
      props: ['item'],
      data() {
        return {
          editModal: false,
          newItem: {
            // title: null, // diaries
            // body: null, // diaries/notes
            // public: false, // diaries/qoutes
            // author: null, // qoute
            // qoute: null, // qoute
            // word: null, // vocabulary
            // translatedWord: null, // vocabulary
            // examples: null // vocabulary
          },
          type: null
        }
      },
      methods: {
        routeTo () {
          this.$router.push('/profile/' + this.type)
        },
        async deleteItem () {
          const id = this.newItem._id
          switch (this.type) {
            case 'vocabulary':
              const word = (await VocabularyService.deleteVocabulary(id)).data
              this.$store.dispatch('deleteItem', { type: 'vocabulary', id })
              break
            case 'qoutes':
              const qoute = (await QoutesService.deleteQoute(id)).data
              this.$store.dispatch('deleteItem', { type: 'qoutes', id })
              break
            case 'diaries':
              const deletedDiary = (await DiaryService.deleteDiary(id)).data
              this.$store.dispatch('deleteItem', { type: 'diaries', id })
              break
            case 'notes':
              const note = (await NotesService.deleteNote(id)).data
              this.$store.dispatch('deleteItem', { type: 'notes', id })
              break
            default:
              console.log('id is not valid')
          }
          this.editModal = false
          this.$store.state.additionalModal = true
          this.routeTo()
        }
      },
      mounted () {
        this.type = this.item.type
        this.newItem = Object.assign({}, this.item.item)
      }
    }

</script>
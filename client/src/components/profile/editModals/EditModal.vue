<template>
  <v-dialog v-model="editModal" max-width="500px">

    <v-btn accent slot="activator" fab class="green accent-2" small light v-if="!item.item" left>
      <v-icon>add</v-icon>
    </v-btn>

    <v-btn accent slot="activator" class="cyan accent-2" light v-else>
      Edit
    </v-btn>

    <v-card>
      <v-card-title v-if="!item.item">
        Create a new {{currentItem.type}} note
      </v-card-title>
      <v-card-title v-else>
        Update created {{currentItem.type}} note
      </v-card-title>
      <v-card-text>

        <v-text-field label="Title" type="text"
         v-model="newItem.title" 
         v-if="currentItem.type === 'diaries' | currentItem.type === 'notes'"></v-text-field>

        <v-text-field label="Body" type="text"
        v-model="newItem.body" 
        v-if="currentItem.type === 'diaries' | currentItem.type === 'notes'"></v-text-field>

        <v-text-field label="Author" type="text" 
        v-model="newItem.author" 
        v-if="currentItem.type === 'qoutes'"></v-text-field>

        <v-text-field label="Qoute" type="text" 
        v-model="newItem.qoute" 
        v-if="currentItem.type === 'qoutes'"></v-text-field>

        <v-text-field label="Word" type="text" 
        v-model="newItem.word" 
        v-if="currentItem.type === 'vocabulary'"></v-text-field>

        <v-text-field label="Translated Word" type="text" 
        v-model="newItem.translatedWord" 
        v-if="currentItem.type === 'vocabulary'"></v-text-field>

        <v-text-field label="Examples" type="text" 
        v-model="newItem.examples"
        v-if="currentItem.type === 'vocabulary'"
        ></v-text-field>

        <v-switch :label="`Public ${ currentItem.type }`" v-model="newItem.public" 
        v-if="currentItem.type === 'qoutes' | currentItem.type === 'diaries'"></v-switch>

      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="editModal = false">Close</v-btn>

        <v-btn color="primary" flat @click.stop="create" v-if="!item.item">Create</v-btn>

        <v-btn color="primary" flat @click.stop="update" v-else>Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import DiaryService from '@/services/DiaryService'
import NotesService from '@/services/NotesService'
import QoutesService from '@/services/QoutesService'
import VocabularyService from '@/services/VocabularyService'

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
      currentItem: {
          type: '',
          new: true
      }
    }
  },
  methods: {
    close () {
      this.editModal = false
      Object.keys(this.newItem).forEach(i => this.newItem[i] = null)
    },
    async create () {
        switch (this.currentItem.type) {
            case 'vocabulary':
                const word = (await VocabularyService.createVocabulary(this.newItem)).data
                this.$store.dispatch('addVocabulary', word)
                break
            case 'qoutes':
                const qoute = (await QoutesService.createQoute(this.newItem)).data
                this.$store.dispatch('addQoute', qoute)
                break
            case 'diaries':
                const diary = (await DiaryService.createDiary(this.newItem)).data
                this.$store.dispatch('addDiary', diary)
                break
            case 'notes':
                const note = (await NotesService.createNote(this.newItem)).data
                this.$store.dispatch('addNote', note)
                break
            default: console.log('something went wrong on creating new item');
        }
        this.close()
    },
    async update () {
      switch (this.currentItem.type) {
            case 'vocabulary':
                const word = (await VocabularyService.updateVocabulary(this.newItem)).data
                this.$store.dispatch('updateVocabulary', word)
                this.editModal = false
                break
            case 'qoutes':
                const qoute = (await QoutesService.updateQoute(this.newItem)).data
                this.$store.dispatch('updateQoute', qoute)
                this.editModal = false
                break
            case 'diaries':
                const diary = (await DiaryService.updateDiary(this.newItem)).data
                this.$store.dispatch('updateDiary', diary)
                this.editModal = false
                break
            case 'notes':
                const note = (await NotesService.updateNote(this.newItem)).data
                this.$store.dispatch('updateNote', note)
                this.editModal = false
                break
            default: console.log('something went wrong on updating item');
        }
    }
  },
  mounted () {
        this.currentItem.type = this.item.type
        if (this.item.item) { // edit vocabulary
            this.newItem = Object.assign({}, this.item.item)
            this.currentItem.new = false
        }
  }
}

</script>
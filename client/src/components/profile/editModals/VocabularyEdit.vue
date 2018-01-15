<template>
  <v-dialog v-model="noteEdit" max-width="500px">

    <v-btn accent slot="activator" fab class="green accent-2" small light v-if="!word" left>
      <v-icon>add</v-icon>
    </v-btn>

    <!-- <v-btn accent slot="activator" class="cyan accent-2" light v-else>
      Edit
    </v-btn> -->
    <v-icon color="yellow darken-2" v-else slot="activator">border_color</v-icon>

    <v-card>
      <v-card-title v-if="!word">
        Create a new Word
      </v-card-title>
      <v-card-title v-else>
        Update created Word
      </v-card-title>
      <v-card-text>

        <v-text-field label="Word" v-model="newWord.word" type="text"></v-text-field>

        <v-text-field label="Translated" v-model="newWord.translatedWord" type="text"></v-text-field>

        <v-text-field label="Examples" v-model="newWord.examples" type="text"></v-text-field>

      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="noteEdit=false">Close</v-btn>

        <v-btn color="primary" flat @click.stop="create" v-if="!word">Create</v-btn>

        <v-btn color="primary" flat @click.stop="update" v-else>Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import VocabularyService from '@/services/VocabularyService'
export default {
  props: ['word'],
  data() {
    return {
      noteEdit: false,
      newWord: {
        word: null,
        translatedWord: null,
        examples: null
      }
    }
  },
  methods: {
    async create() {
      const note = (await VocabularyService.createWord(this.newWord)).data
      this.$store.dispatch('addWord', note)
      this.noteEdit = false
    },
    async update() {
      const qoute = (await NotesService.updateQoute(this.newQoute)).data
      this.$store.dispatch('updateQoute', qoute)
      this.qouteEdit = false
    }
  },
  mounted () {
    if (this.word) {
      this.newWord = this.word
    }
  }
}

</script>
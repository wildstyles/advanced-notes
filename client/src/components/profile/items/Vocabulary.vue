<template>
    <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="My dictinionary">

        <edit-modal slot="action" :item="{ type: 'vocabulary' }"></edit-modal>
        
       <v-card>
        <v-list two-line>
          <template v-for="word in vocabulary">
            <v-list-tile
              avatar
              ripple
              :key="word.title"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ word.word }}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">{{ word.translatedWord }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ word.examples }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ word.date | date }}</v-list-tile-action-text>

            <div class="icon-wrapper">
                
                <edit-modal :item="{item: word, type: 'vocabulary' }"></edit-modal>
                  <v-icon color="grey darken-2" @click="deleteWord(word._id)">delete</v-icon>
              
            </div>
                
              </v-list-tile-action>
            </v-list-tile>
            <v-divider :key="word._id"></v-divider>
          </template>
        </v-list>
      </v-card>

      </panel>
    </v-flex>
  </v-layout>
</template>


<script>
  import VocabularyService from '@/services/VocabularyService'
  export default {
    computed: {
      vocabulary () {
        return this.$store.getters.vocabulary
      }
    },
    methods: {
      async deleteWord (wordId) {
        const word = (await VocabularyService.deleteVocabulary(wordId)).data
          const vocabulary = this.vocabulary.filter(word => word._id !== wordId)
          this.$store.dispatch('setVocabulary', vocabulary)
      }
    },
    async mounted () {
      const vocabulary = (await VocabularyService.getVocabulary()).data
      this.$store.dispatch('setVocabulary', vocabulary)
    }
  }
</script>

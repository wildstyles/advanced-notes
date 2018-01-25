<template>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>
  
      <panel title="My Vocabulary">
        <edit-modal slot="action" :item="{ type }"></edit-modal>
        <single-item :type="type"></single-item>
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
  import VocabularyService from '@/services/VocabularyService'
  
  export default {
    data () {
      return {
        type: 'vocabulary'
      }
    },
    async mounted () {
      const vocabulary = (await VocabularyService.getVocabulary()).data
      this.$store.dispatch('setVocabulary', vocabulary)
    }
  }
</script>

<template>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>
  
      <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>

      <panel :title="type">
        <edit-modal slot="action" :item="{ type }"></edit-modal>
        
        <single-item :type="type" :items="vocabulary"></single-item>

        <no-items :type="type" v-if="!vocabulary.length"></no-items>

      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
  import VocabularyService from '@/services/VocabularyService'

  export default {
    data () {
      return {
        breadcrumbs: [
          { title: 'Profile', link: '/profile' },
          { title: 'Vocabulary', link: '/profile/vocabulary' }
        ]
      }
    },
    computed: {
      type () {
        return this.$store.getters.currentPage
      },
      vocabulary () {
        return this.$store.getters.vocabulary
      }
    },
    async mounted () {
      const vocabulary = (await VocabularyService.getVocabulary()).data
      this.$store.dispatch('setVocabulary', vocabulary)
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('currentPage', null)
      next()
    }
  }
</script>

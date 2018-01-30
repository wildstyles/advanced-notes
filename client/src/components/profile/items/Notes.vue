<template>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>
      
      <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>

      <panel :title="type">

        <edit-modal slot="action" :item="{ type }"></edit-modal>

        <single-item :type="type" :items="notes"></single-item>

        <no-items :type="type" v-if="!notes.length"></no-items>

      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
  import NotesService from '@/services/NotesService'

  export default {
    data () {
      return {
        breadcrumbs: [
          { title: 'Profile', link: '/profile' },
          { title: 'Notes', link: '/profile/notes' }
        ]
      }
    },
    computed: {
      type () {
        return this.$store.getters.currentPage
      },
      notes () {
        return this.$store.getters.notes
      }
    },
    async mounted () {
      const notes = (await NotesService.getNotes()).data
      this.$store.dispatch('setNotes', notes)
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('currentPage', null)
      next()
    }
  }
</script>

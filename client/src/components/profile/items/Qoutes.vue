<template>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>
  
      <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>

      <panel :title="type">

        <edit-modal slot="action" :item="{ type }"></edit-modal>

        <single-item :type="type" :items="qoutes"></single-item>

        <no-items :type="type" v-if="!qoutes.length"></no-items>
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
  import QoutesService from '@/services/QoutesService'

  export default {
    data () {
      return {
        breadcrumbs: [
          { title: 'Profile', link: '/profile' },
          { title: 'Qoutes', link: '/profile/qoutes' }
        ]
      }
    },
    computed: {
      qoutes () {
        return this.$store.getters.qoutes
      },
      type () {
        return this.$store.getters.currentPage
      }
    },
    async mounted () {
      const qoutes = (await QoutesService.getQoutes()).data
      this.$store.dispatch('setQoutes', qoutes)
    },
    beforeRouteLeave (to, from, next) {
      this.$store.commit('currentPage', null)
      next()
    }
  }
</script>

<template>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>
  
      <panel title="My Qoutes">
        <edit-modal slot="action" :item="{ type }"></edit-modal>
        <single-item :type="type"></single-item>
      </panel>

    </v-flex>
  </v-layout>
</template>



<script>
import QoutesService from '@/services/QoutesService'

    export default {
      data () {
        return {
          type: 'qoutes'
        }
      },
      async mounted () {
        const qoutes = (await QoutesService.getQoutes()).data
        this.$store.dispatch('setQoutes', qoutes)
      }
    }
</script>

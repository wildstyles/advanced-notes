<template>
  <v-layout column>
    <v-flex xs10 offset-xs1 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>
      <panel :title="type">

        <edit-modal slot="action" :item="{ type }"></edit-modal>

        <single-item :type="type" :items="diaries"></single-item>

        <no-items :type="type" v-if="!diaries.length"></no-items>

      </panel>
    </v-flex>
  </v-layout>
</template>


<script>
  import DiaryService from '@/services/DiaryService'

  export default {
    computed: {
      type () {
        return this.$store.getters.currentPage
      },
      diaries () {
        return this.$store.getters.diary
      }
    },
    async mounted () {
      const diary = (await DiaryService.getDiary()).data
      this.$store.dispatch('setDiary', diary)
    },
    beforeRouteLeave(to, from, next) {
      this.$store.commit('currentPage', null)
      next()
    }
  }
</script>

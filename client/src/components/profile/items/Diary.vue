<template>
  <v-layout column>
    <v-flex xs10 offset-xs1 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>

      <breadcrumbs :breadcrumbs="breadcrumbs"></breadcrumbs>
      
      <panel :title="type">

        <edit-modal slot="action" :item="{ type }"></edit-modal>

        <single-item :type="type" :items="diaries"></single-item>

        <no-items :type="type" v-if="!diaries.length"></no-items>

      </panel>
    </v-flex>
  </v-layout>
  
</template>

<style  scoped>

  .test {
    display: flex;
  }

  .qq {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: red;
    position: relative;
    top: 50px;
    left: 10px;
  }

  .pop {
   width: 120px;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 70px;
   background-color: red;
   border-radius: 50% 30%
  }

  
</style>



<script>
  import DiaryService from '@/services/DiaryService'

  export default {
    data () {
      return {
        breadcrumbs: [
          { title: 'Profile', link: '/profile' },
          { title: 'Diaries', link: '/profile/diaries' }
        ]
      }
    },
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

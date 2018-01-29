<template>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>

      <panel :title="type">
        <div class="item__wrapper">
           <h2 class="item__header">{{ item.title }}</h2>
          <p class="item__body">{{ item.body }}</p> 
          <p class="item__public" v-if="item.public && type !== 'publicDiaries'">This is public diary note!</p>

          <div class="item__btns">
            <div class="item__time">{{ item.date | date }}</div>
            <v-spacer></v-spacer>
            <edit-modal slot="action" :item="{ type, item }" v-if="type !== 'publicDiaries'"></edit-modal>
            <delete-modal :item="{ item, type }" v-if="type !== 'publicDiaries'"></delete-modal>
          </div>
        </div>
          
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import DiaryService from '@/services/DiaryService'

    export default {
      props: ['id'],
      computed: {
        type () {
          return this.$store.getters.currentPage
        },
        item () {
          switch (this.type) {
            case 'diaries':
              return this.$store.getters.diaryItem(this.id)
              break
            case 'notes':
              return this.$store.getters.noteItem(this.id)
              break
            case 'publicDiaries':
              return this.$store.getters.publicDiariesItem(this.id)
              break
            default: throw new Error('cannot get single item')
          }
        }
      },
      beforeRouteLeave (to, from, next) {
        this.$store.commit('currentPage', null)
        next()
    }
  }
</script>

<style scoped lang="sass">

  .item
    &__wrapper
      padding: 10px 5px 2px
    &__header
      margin-bottom: 5px
    &__public
      color: red
    &__btns
      display: flex
      align-items: center
      justify-content: flex-end
    &__time
      font-size: 14px
      color: #9e9e9e


</style>

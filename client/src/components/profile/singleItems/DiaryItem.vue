<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My diary">
        <div class="diary-item">
          <div>{{ diaryItem.title }}</div>
          <div>{{ diaryItem.body }}</div>
          <div class="diary-utility">
            <span class="diary-time">{{diaryItem.date | date}}</span>
          </div>
          <div class="diary-btns" v-if="!publicDiary">
            <edit-modal slot="action" :item="{ type: 'diaries', item: diaryItem }"></edit-modal>
            <v-btn color="error" @click="deleteDiary">Delete</v-btn>
          </div>
        </div>
          
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import DiaryService from '@/services/DiaryService'

    export default {
      props: ['id', 'public'],
      data () {
        return {
          publicDiary: false
        }
      },
      computed: {
        diaryItem () {
          return this.$store.getters.diaryItem(this.id)
        },
        diary () {
          return this.$store.getters.diary
        }
      },
      methods: {
        async deleteDiary () {
          const deletedDiary = (await DiaryService.deleteDiary(this.id)).data
          const diary = this.diary.filter(note => note._id !== this.id)
          this.$store.dispatch('setDiary', diary)
          this.$router.push('/profile/diaries')
        }
      },
      mounted () {
        if (this.public) {
          this.publicDiary = true
        } else {
          this.publicDiary = false
        }
      }
    }

</script>

<style scoped lang="sass">
    textarea
        width: 100%
        font-family: monospace
        border: none
        border-style: none
        resize: none
        border-color: transparent
        overflow: auto
        padding: 10px

    .diary-item
        background-color: #ccc
        margin-bottom: 5px
</style>

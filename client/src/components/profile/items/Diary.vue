<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My diary">

        <edit-modal slot="action" :item="{ type: 'diaries' }"></edit-modal>

        <div class="note-item" v-for="diary in diaries" :key="diary._id">
            <h3 class="note-title">{{ diary.title }}</h3>
          <div class="note-body" v-text="diary.body"></div>
          <div class="note-utility">
            <span class="note-time">{{ diary.date | date}}</span>
          </div>
          <div class="note-btns">
            <v-btn color="primary" :to="'/profile/diaries/' + diary._id">Read more</v-btn>
          </div>
        </div>

      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
import DiaryService from '@/services/DiaryService'
export default {
  computed: {
    diaries() {
      return this.$store.getters.diary
    }
  },
  async mounted() {
    const diary = (await DiaryService.getDiary()).data
    this.$store.dispatch('setDiary', diary)
  }
}

</script>

<style lang="scss" scoped>

.note {
  &-item {
    background-color: #ccc;
    padding: 10px 15px 4px;
    border-radius: 5px;
    margin: 3px -10px;
  }
  &-author {
    float: right;
  }
  &-btns, &-utility {
    display: flex;
    justify-content: space-between;
  }
}

</style>

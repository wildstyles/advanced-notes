<template>
  <v-layout column align-center fill-height>

    
      <panel title="Diaries" class="diary-panel">
        <div class="diary-item" v-for="diary in diaries" :key="diary._id">
            <div class="diary-title">{{ diary.title }}</div>
            <div class="diary-body">
                {{ diary.body }}
            </div>
            <v-btn color="primary" dark @click="publicDiary(diary._id)">read all</v-btn>
        </div>

</panel>
  


  </v-layout>
</template>

<script>
import PublicDiaryService from '@/services/PublicDiaryService'
export default {
  data() {
    return {
      diaries: null
    }
  },
  methods: {
    publicDiary (id) {
      this.$router.push({ name: `diaryItem`, params: { id: id, public: true }})
    }
  },
  async mounted () {
    this.diaries = (await PublicDiaryService.getPublicDiaries()).data
  }
}
</script>

<style lang="scss" scoped>

$font-size: 16px;
$line-height: 1.4;
$lines-to-show: 5;

.diary {
    &-item {
        background-color: #455A64;
        color: #ccc;
        padding: 15px 30px;
        margin-bottom: 10px;

    }
  &-panel {
    width: 75%;
  }
  &-body {
    display: block;
    /* Fallback for non-webkit */
    display: -webkit-box;
    max-width: 100%;
    height: $font-size*$line-height*$lines-to-show;
    /* Fallback for non-webkit */
    margin: 0 auto;
    font-size: $font-size;
    line-height: $line-height;
    -webkit-line-clamp: $lines-to-show;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}






</style>

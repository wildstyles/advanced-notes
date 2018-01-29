<template>
  <v-layout column>
    <v-flex xs12 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>

      <panel :title="type">

        <single-item :type="type" :items="publicDiaries"></single-item>

        <no-items :type="type" v-if="!publicDiaries.length"></no-items>

      </panel>

    </v-flex>
  </v-layout>

</template>

<script>
  import PublicDiaryService from '@/services/PublicDiaryService'

  export default {
    computed: {
      type () {
        return this.$store.getters.currentPage
      },
      publicDiaries () {
        return this.$store.getters.publicDiaries
      }
    },
    async mounted () {
      const diaries = (await PublicDiaryService.getPublicDiaries()).data
      this.$store.dispatch('setPublicDiary', diaries)
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

<template>
  <v-layout column>
    <v-flex xs10 offset-xs1 md8 offset-md2 sm10 offset-sm1 lg6 offset-lg3>
      <panel title="My qoutes">

        <edit-modal slot="action" :item="{ type: 'qoutes' }"></edit-modal>

        <div class="word__wrapper" v-for="qoute in diaries" :key="qoute._id">
          <div class="word__content">
            <div class="word__original">{{ qoute.qoute }}</div>
            <!-- <div class="word__translated">{{ qoute.qoute }}</div> -->


            <div class="examples__wrapper">
              <div class="word__examples" :id="qoute._id">{{ qoute.author }}</div>
              <v-btn color="red darken-1" class="expand" flat small v-show="qoute.qoute.split(/\r\n|\r|\n/).length > 2" @click="expand(qoute._id)"
              :id="qoute._id + 1">
                more..
              </v-btn>
            </div>

            <div class="item__public" v-if="qoute.public">This is public qoute!</div>

          </div>

          <div class="word__utility">
            <div class="word__date">{{ qoute.date | date }}</div>
            <div class="word__btns">
              <edit-modal :item="{ item: qoute, type: 'qoutes' }"></edit-modal>
              <delete-modal :item="{ item: qoute, type: 'qoutes' }"></delete-modal>
            </div>
          </div>
        </div>

      </panel>
    </v-flex>
  </v-layout>
</template>




<style lang="sass" scoped>
  import 
  =r($width)
      @media only screen and (max-width: $width+ "px")
        @content

  .item__public
    text-align: right
    color: #EC407A


  .expand 
    width: 50px
  .examples__wrapper
    display: flex
    justify-content: space-between
  .word
    &__wrapper
      border: 1px solid #EBE9E3
      border-radius: 10px
      display: flex
      justify-content: space-between
      padding: 12px 8px 5px
      transition: all .3s
      cursor: pointer
      margin: 5px 0
      +r(600)
        flex-direction: column
      &:hover
        box-shadow: 0 0 11px rgba(33,33,33,.2)
    &__content
      width: 100%
      display: flex
      flex-direction: column
      position: relative
      height: 100%
    &__date, &__btns
      text-align: right
    &__date
      margin-right: 15px
      font-size: 13px
      color: #9e9e9e
    &__utility
      min-width: 128px
      display: flex
      flex-direction: column
      justify-content: space-around
      +r(600)
        margin-top: 20px
    &__original
      font-weight: bold
      font-size: 16px
      line-height: 1.2
      text-transform: capitalize
    &__examples
      display: block
      color: rgba(0,0,0,0.74)
      font-weight: 300
      white-space: pre-wrap
      max-width: 75%
      max-height: 42px
      height: auto
      overflow: hidden
      transition: all 1s ease
      +r(600)
        max-width: 100%
      &:hover
        max-height: auto
        transition: all 1s ease

  .expand
    align-self: flex-end
    margin-bottom: -2px
    font-size: 13px
    text-transform: lowercase
    +r(600)
        margin-left: 0


  .expanded
    max-height: 500px
    transition: max-height 2s ease

</style>


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

<template>

  <article>
    <div class="item__wrapper" v-for="item in items" :key="item._id">

      <div class="item__content">

        <div class="item__header" v-if="type === 'qoutes' || 'vocabulary'">
            {{ type === 'qoutes' ? item.qoute : item.word }}
            </div>

            <div class="item__header" else>
            {{ item.title }}
            </div>

        <div class="item__subheader" v-if="type === 'qoutes' || 'vocabulary'">
            {{ type === 'qoutes' ? item.author : item.translatedWord }}
            </div>
        

        <div class="item__body-wrapper">
              <div class="item__body" :id="item._id">{{ item.examples }}</div>
              <v-btn color="red darken-1" class="expand" flat small v-show="item.examples.split(/\r\n|\r|\n/).length > 2" @click="expand(item._id)"
              :id="item._id + 1">
                more..
              </v-btn>
            </div>

        <div class="item__public" v-if="item.public && type === 'qoutes'">This is public qoute!</div>

      </div>

      <div class="item__utility">
        <div class="item__date">{{ item.date | date }}</div>
        <div class="item__btns">
          <edit-modal :item="{ item, type }"></edit-modal>
          <delete-modal :item="{ item, type }"></delete-modal>
        </div>
      </div>
    </div>
  </article>
</template>


<script>
    export default {
      props: ['type'],
      computed: {
        items () {
          switch (this.type) {
            case 'qoutes':
              return this.$store.getters.qoutes
              break
            case 'vocabulary':
              return this.$store.getters.vocabulary
              break
            case 'diaries':
              return this.$store.getters.diary
              break
            case 'notes':
              return this.$store.getters.notes
              break
            default:
              throw new Error('singleItem components errror')
          }
        }
      },
      methods: {
      expand (index) {
        const el = document.getElementById(index)
        el.classList.toggle("expanded")
        if (el.classList.contains("expanded")) {
          document.getElementById(index + 1).innerHTML = 'less'
        } else {
          document.getElementById(index + 1).innerHTML = 'more...'
        }
      }
    }
    }
</script>


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

  .item
    &__body-wrapper
        display: flex
        justify-content: space-between
    &__subheader
        font-style: italic
        margin-top: 5px
        margin-left: 4px
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
      padding-right: 20px
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
    &__header
      font-weight: bold
      font-size: 16px
      line-height: 1.2
      text-transform: capitalize
    &__body
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

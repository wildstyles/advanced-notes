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
          <div class="item__body item__body-examples" :id="item._id" v-if="type === 'vocabulary'" >{{ item.examples }}</div>
          
          <div class="item__body" :id="item._id" 
          v-if="type === 'diaries' || type === 'notes' || type === 'publicDiaries'" 
          v-readMore:200="item.body"></div>

        <div v-if="type === 'vocabulary'" class="item__expand-btn"
        v-show="item.examples.split(/\r\n|\r|\n/).length > 2 || item.examples.length > 140"
        @click="expand(item._id)" :id="item._id + 1">Показать все</div>

        </div>

        <div class="item__public" 
        v-if="item.public && type === 'qoutes'">This is public qoute!</div>

      </div>

      <div class="item__utility">
        <div class="item__date">{{ item.date | date }}</div>

        <div class="item__btns" v-if="type === 'vocabulary' || type === 'qoutes'">
          <edit-modal :item="{ item, type }"></edit-modal>
          <delete-modal :item="{ item, type }"></delete-modal>
        </div>

        <v-btn v-if="type === 'notes'" :to="'/profile/notes/' + item._id" color="blue darken-2" dark small>Read all</v-btn>

        <v-btn v-if="type === 'diaries'" :to="'/profile/diaries/' + item._id" color="blue darken-2" dark small>Read all</v-btn>

        <v-btn v-if="type === 'publicDiaries'" :to="'/public-diaries/' + item._id" color="blue darken-2" dark small>Read another</v-btn>

      </div>
    </div>
  </article>
</template>



<script>
    export default {
      props: ['type', 'items'],
      methods: {
      expand (index) {
        const el = document.getElementById(index)
        el.classList.toggle("expanded")
        if (el.classList.contains("expanded")) {
          document.getElementById(index + 1).innerHTML = 'Свернуть'

        } else {
          document.getElementById(index + 1).innerHTML = 'Показать все'
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

  .item
    &__expand-btn
      text-decoration: none
      color: #43A047
    &__body-wrapper
        display: flex
        justify-content: space-between
        flex-direction: column
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
    &__body
      display: block
      color: rgba(0,0,0,0.74)
      font-weight: 300
      white-space: pre-wrap
      max-width: 95%
      height: auto
      overflow: hidden
      transition: all 1s ease
      position: relative
      &:before 
        content: ''
        width: 100%
        height: 100%   
        position: absolute
        left: 0
        top: 0
        background: linear-gradient(transparent 22px, white)
      &-examples
        max-height: 42px
      +r(600)
        max-width: 100%
      &:hover
        max-height: auto
        transition: all 1s ease

  .expand
    align-self: flex-start
    margin-bottom: -2px
    font-size: 13px
    text-transform: lowercase
    +r(600)
        margin-left: 0


  .expanded
    max-height: 500px
    transition: max-height 2s ease
    &:before
      transition: background 2s ease
      background: none

</style>

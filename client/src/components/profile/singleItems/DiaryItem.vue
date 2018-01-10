<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My diary">
        <div class="diary-item">
            <input type="text" v-model="diary.title" readonly>
          <textarea
           label="Tab"
           readonly
           class="test"
           v-model="diary.body"
       ></textarea>
          <div class="diary-utility">
            <span class="diary-time">28.12.17</span>
          </div>
          <div class="diary-btns">
            <v-btn color="primary">Edit</v-btn>
            <v-btn color="error">Delete</v-btn>
          </div>
        </div>
          
      </panel>

    </v-flex>
  </v-layout>
</template>

<script>
    export default {
      data() {
        return {
          diary: {
            title: 'the title of titem',
            body: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iusto. Quasi, labore? Laboriosam numquam sed quam tempora rem dignissimos. Deserunt veniam omnis debitis delectus voluptatum autem ipsum esse velit enim.',
            date: '20.17.12'
          },
          diary2: {
            title: 'the title of titem',
            body: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iusto. Quasi, labore? Laboriosam numquam sed quam tempora rem dignissimos. Deserunt veniam omnis debitis delectus voluptatum autem ipsum esse velit enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iusto. Quasi, labore? Laboriosam numquam sed quam tempora rem dignissimos. Deserunt veniam omnis debitis delectus voluptatum autem ipsum esse velit enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iusto. Quasi, labore? Laboriosam numquam sed quam tempora rem dignissimos. Deserunt veniam omnis debitis delectus voluptatum autem ipsum esse velit enim.',
            date: '20.17.12'
          },
        }
      },
      mounted() {
        Array.from(document.getElementsByClassName('test')).forEach(element => {
          let height = element.scrollHeight
          element.style.height = height + 'px'
        })
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

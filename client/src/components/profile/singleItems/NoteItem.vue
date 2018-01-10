<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My single note">
        <div class="diary-item">

            <div class="diary-title">
                <label for="title" v-if="isReadOnly">title</label>
                <input type="text" :class="{ input: isReadOnly }" name="title" v-model="diary.title" :readonly="!isReadOnly">
            </div>
            
            <div class="diary-body">
                <label for="body" v-if="isReadOnly">BOdy</label>
                <textarea
                :class="{ input: isReadOnly }"
           label="Tab"
           :readonly="!isReadOnly"
           class="test"
           v-model="diary.body"
       ></textarea>
            </div>
            
          <div class="diary-utility">
            <span class="diary-time">28.12.17</span>
          </div>
          <div class="diary-btns">
            <v-btn color="primary" @click="isReadOnly = !isReadOnly">Edit</v-btn>

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
            isReadOnly: false,
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
          element.style.height = height + 2 + 'px'
        })
      }
    }

</script>

<style scoped lang="scss">

    textarea {
      width: 100%;
      font-family: monospace;
      border: none;
      border-style: none;
      resize: none;
      overflow: hidden;
      border-color: transparent;
      overflow: auto;
    }

    .input {
        border-bottom: 1px solid #000;
        width: 100%;
    }

    label {
        display: block; 
    }

    .diary-item {
      background-color: #ccc;
      margin-bottom: 5px;
      padding: 20px;
    }

       
</style>
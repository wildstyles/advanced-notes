<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My diary">
        <div class="note-item">
            <h3 class="note-title">diary title</h3>
          <div class="note-body" v-text="msg"></div>
          <div class="note-utility">
            <span class="note-time">28.12.17</span>
          </div>
          <div class="note-btns">
            <v-btn color="primary" :to="'/profile/diaries/' + id">Read more</v-btn>
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
          id: 3,
          msg: 'I believe that we are who we choose to be. Nobody’s going to come and save you, you’ve got to save yourself. Nobody’s going to give you anything. You’ve got to go out and fight for it. Nobody knows what you want except for you. And nobody will be as sorry as you if you don’t get it. So don’t give up on your dreams.'
        }
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

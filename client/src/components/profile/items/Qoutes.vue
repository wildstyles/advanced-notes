<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="My qoutes">
        <div class="qoute-item">
          <div class="qoute-body" v-readMore:180="msg"></div>
          <div class="qoute-utility">
            <span class="qoute-time">28.12.17</span>
            <span class="qoute-author">Mark Twen</span>
          </div>
          <div class="qoute-btns">
            <v-btn color="primary">Edit</v-btn>
            <v-btn fab dark color="indigo" small>
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn color="error">Delete</v-btn>
          </div>
        </div>

                <div class="qoute-item">
          <div class="qoute-body" v-readMore:180="msg"></div>
          <div class="qoute-utility">
            <span class="qoute-time">28.12.17</span>
            <span class="qoute-author">Mark Twen</span>
          </div>
          <div class="qoute-btns">
            <v-btn color="primary">Edit</v-btn>
            <v-btn fab dark color="indigo" small>
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn color="error">Delete</v-btn>
          </div>
        </div>

                <div class="qoute-item">
          <div class="qoute-body" v-readMore:180="msg"></div>
          <div class="qoute-utility">
            <span class="qoute-time">28.12.17</span>
            <span class="qoute-author">Mark Twen</span>
          </div>
          <div class="qoute-btns">
            <v-btn color="primary">Edit</v-btn>
            <v-btn fab dark color="indigo" small>
              <v-icon dark>add</v-icon>
            </v-btn>
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
          msg: 'I believe that we are who we choose to be. Nobody’s going to come and save you, you’ve got to save yourself. Nobody’s going to give you anything. You’ve got to go out and fight for it. Nobody knows what you want except for you. And nobody will be as sorry as you if you don’t get it. So don’t give up on your dreams.'
        }
      }

    }
</script>


<style lang="scss" scoped>

.qoute {
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

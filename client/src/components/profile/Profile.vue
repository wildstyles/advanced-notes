<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Profile page" class="ggg">
        <div class="profile-body">
          <div class="profile-description">
            Hi dude! Welcome to our fancy web-site! Great to see you on board. Its your profile page - start point where you can start to write. Checkout the navigation left to this text!
          </div>
          <div class="profile-navigation">
              <p>Navigation</p>
              <hr>
            <ul>
                <router-link to="/profile/vocabulary" tag="li">Vocabulary</router-link>
                <router-link to="/profile/diaries" tag="li">Diary</router-link>
                <router-link to="/profile/qoutes" tag="li">Qoutes</router-link>
                <router-link to="/profile/notes" tag="li">Notes</router-link>
            </ul>
          </div>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>


<script>
import QoutesService from '@/services/QoutesService'
    export default {

    }

</script>

<style lang="scss" scoped>

.ggg {
    background-color: #ccc !important; 
}

.profile {
    &-description {
        font-size: 22px;
        width: 75%;
        margin-bottom: 40px;
    }
    &-body {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &-navigation {
        font-size: 20px;
        padding: 20px 0;
        p {
            font-style: italic;
            font-size: 24px;
            margin-bottom: 20px;
        }
        ul {
            list-style-type: none;
            text-align: right;
            li {
                border-radius: 5px;
                margin: 4px;
                padding: 0 7px;
                &:hover {
                    background-color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>



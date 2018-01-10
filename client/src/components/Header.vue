<template>
  <div>
    <v-toolbar>
      <v-toolbar-title class="mr-5">Title</v-toolbar-title>

      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-items class="hidden-sm-and-down" left>
        <v-btn flat v-for="item in itemsP" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="isLoggedIn" flat v-for="item in itemsRegistered" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>

        <v-btn v-if="isLoggedIn" flat @click="logout">
          <v-icon left dark>keyboard_tab</v-icon>
          Logout
        </v-btn>

        <v-btn v-else flat v-for="item in itemsUnregistered" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <v-navigation-drawer temporary absolute light v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in itemsUnregistered" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>



<script>
  export default {
    data () {
      return {
        drawer: false,
        itemsUnregistered: [
          { title: 'Signup', icon: 'pan_tool', link: '/signup' },
          { title: 'Signin', icon: 'face', link: '/signin' },
        ],
        itemsRegistered: [
          { title: 'Profile', icon: 'timeline', link: '/profile' }
        ],
        itemsP: [
          { title: 'Qoutes', icon: 'pan_tool', link: '/pqoutes' },
          { title: 'Diaries', icon: 'face', link: '/pdiaries' },
        ]
      }
      },
      computed: {
        isLoggedIn () {
          return this.$store.getters.isUserLoggedIn
        }
      },
      methods: {
        logout() {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
          this.$router.push('/')
        }
      }
  }
</script>

<style scoped lang="sass">

div 
  


</style>




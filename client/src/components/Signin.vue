<template>
<v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Login">
                    <form name="tab-tracker-form" autocomplete="off">
                        <v-text-field
                            label="Email"
                            v-model="email"
                        ></v-text-field>
                        <br>
                        <v-text-field
                            label="Password"
                            v-model="password"
                            type="password"
                        ></v-text-field>
                        <br>
                        <div class="danger-alert" v-html="error"/>
                    </form>
                    <br>
                    <v-btn class="info" dark @click="login">Signin</v-btn>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  import QoutesService from '@/services/QoutesService'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          const response = await AuthenticationService.signin({
            email: this.email,
            password: this.password
          })
          console.log(response)
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$router.push('/')
        } catch (error) {
        this.error = error.response.data.error
        console.log(error)
        }
      }
    }
  }
</script>

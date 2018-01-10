<template>
<v-layout column>
        <v-flex xs6 offset-xs3>
            <panel title="Register">
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
                    <v-btn class="info" dark @click="signup">Register</v-btn>
            </panel>
        </v-flex>
    </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async signup () {
        try {
          const response = await AuthenticationService.signup({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$router.push('/profile')
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>



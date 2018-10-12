<template>
  <v-layout align-center justify-center>
    <v-flex xs6>
      <app-panel title="Login">
          <v-text-field
            label="Email"
            v-model="email"/>
            <br>
          <v-text-field
            label="Password"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type="show ? 'text' : 'password'"
            @click:append="show=!show"
            v-model="password"/>
            <br>
            <v-alert
              class="ml-4"
              :value="error"
              transition="scale-transition"
              error>
              {{error}}
            </v-alert>
            <br>
          <v-btn flat small class="cyan" dark @click="login">Login</v-btn>
      </app-panel>
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
      error: null,
      show: false
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

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
          <div class="error" v-html="error"></div>
            <br>
          <v-btn flat small class="cyan" dark @click="login">Login</v-btn>
      </app-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/panel'
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
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    appPanel: Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red
  }
</style>

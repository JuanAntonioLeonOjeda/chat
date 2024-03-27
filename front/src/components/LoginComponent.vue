<template>
  <v-sheet class="mx-auto" width="300">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        v-model="email"
        label="Email"
      ></v-text-field>
      <v-btn 
        class="mt-2" 
        type="submit" 
        block
        @click="loginRequest()"
      >
        Login
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { login } from '../services/authService'

  export default {
    data: () => ({
      email: ''
    }),
    methods: {
      async loginRequest() {
        const result = await login({ email: this.email })
        console.log(result)
        if (result.success) {
          localStorage.setItem('token', result.result.token)
        }
      }
    }
  }
</script>
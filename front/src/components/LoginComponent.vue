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

<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/authService'

const router = useRouter()
const email = ref('')

const loginRequest = async () => {
  const result = await login({ email: email.value })
  console.log(result)
  if (result.success) {
    localStorage.setItem('token', result.result.token)
    router.push('/home')
  }
}
</script>
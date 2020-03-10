<template>
  <div class="container login">
    <h1> Login </h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm.vue'

export default {
  components: {
    UserAuthForm
  },
  methods: {
    loginUser () {
      alert('You are click')
    }
  }
}
</script>

<style>
 .login {
   margin-top: 60px;
 }
</style>

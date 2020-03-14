<template>
  <div class="container login">
    <h1> Login </h1>
    <UserAuthForm button-text="Login" :submit-form="loginUser" />
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
    }
  }
}
</script>

<style>
 .login {
   margin-top: 60px;
 }
</style>

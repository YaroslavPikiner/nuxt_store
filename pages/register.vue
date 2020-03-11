<template>
  <div class="container login">
    <h1> Register </h1>
    <UserAuthForm button-text="Register" :submit-form="registerUser" :has-name="true" />
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    UserAuthForm
  },
  methods: {
    registerUser () {
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

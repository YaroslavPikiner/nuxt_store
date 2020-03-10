<template>
  <div class="container login">
    <h1> Register </h1>
    <UserAuthForm buttonText="Register" :submitForm="registerUser" :hasName="true" />
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm.vue'

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

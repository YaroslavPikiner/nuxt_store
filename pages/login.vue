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
    async loginUser (loginInfo) {
      try {
        const response = await this.$auth.loginWith('local', { data: loginInfo })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>
 .login {
   margin-top: 60px;
 }
</style>

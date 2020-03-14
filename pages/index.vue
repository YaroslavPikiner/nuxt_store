<template>
  <div class="container home">
    <h1>Hello {{ $auth.user.name }} </h1>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style>
  .home {
    margin-top: 60px;
  }
</style>

<template>
  <div class="container-fluid home">
    <h1>Hello {{ $auth.user.name }}, welcome to my site! </h1>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style >
  .home {
    width: 100%;
    height: 1000px;
    background-color: #000;
  }
</style>

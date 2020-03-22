<template>
  <div class="container-fluid home">
    <h1 class="home__gretting">{{ indeficate() }}</h1>
  </div>
</template>

<script>

export default {
  components: {

  },
  methods: {
    indeficate () {
      if (this.$auth.user.name === 'Yaroslav P') {
        return 'Welcome Boss'
      } else {
        return 'Welcome guest'
      }
    }
  }
}
</script>

<style >
  .home {
    width: 100%;
    height: 1000px;
    background-color: #000;
  }

  .home__gretting {
    color: #fff;
  }
</style>

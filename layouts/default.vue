<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
 * {
   font-family: Oswald, sans-serif;
 }
</style>

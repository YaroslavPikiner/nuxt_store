<template>
  <section class="container">
    <h1> {{ card.title }} </h1>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const card = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
    return { card }
  }
}
</script>

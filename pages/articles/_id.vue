<template>
  <section class="container">
    <h1> {{ articles.title }} </h1>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const articles = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
    const images = await $axios.$get('https://jsonplaceholder.typicode.com/photos/' + params.id)
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/users' + params.id)
    return { articles, images, users }
  }
}
</script>

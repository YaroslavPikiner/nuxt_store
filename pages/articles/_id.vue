<template>
  <section class="container id-article">
    <img :src="images.url" alt="">
    <h1> {{ articles.title }} </h1>
    <p class="id-body"> {{ articles.body }} </p>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const articles = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
    const images = await $axios.$get('https://jsonplaceholder.typicode.com/photos/' + params.id)
    return { articles, images }
  }
}
</script>

<style>

.id-article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.id-article > h1 {
  margin-bottom: 40px;
}

.id-article > img {
  width: 100%;
  height: 200px;
}

.id-article > h1::first-letter {
  text-transform: uppercase;
}

.id-article > p::first-letter {
  text-transform: uppercase;
}

.id-article > img {
  margin-bottom: 40px;
}
</style>

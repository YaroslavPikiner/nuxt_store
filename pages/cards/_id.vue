<template>
  <section class="container id-cards">
    <h1> {{ cards.title }} </h1>
    <img :src="images.url" alt="">
    <p class="id-body">
      {{ cards.body }}
    </p>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios, params }) {
    const cards = await $axios.$get('https://jsonplaceholder.typicode.com/posts/' + params.id)
    const images = await $axios.$get('https://jsonplaceholder.typicode.com/photos/' + params.id)
    return { cards, images }
  }
}
</script>

<style>

.id-cards {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.id-cards > h1 {
  margin-bottom: 40px;
}

.id-cards > h1::first-letter {
  text-transform: uppercase;
}

.id-cards > p::first-letter {
  text-transform: uppercase;
}

.id-cards > img {
  margin-bottom: 40px;
}
</style>

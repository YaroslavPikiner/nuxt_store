<template>
  <section class="container">
    <h1>Card Store</h1>
    <div class="card-container">
      <div v-for="(card, index) in cards" :key="card.id" class="card" style="width: 18rem;">
        <img
          v-if="images[index]"
          :src="images[index].url"
          class="card-img-top card-img"
          alt
        >
        <div class="card-body">
          <h5 class="card-title">
            {{ toCut(card.title, 10) }}
          </h5>
          <p
            class="card-text"
          >
            {{ toCut(card.body, 30) }}
          </p>
          <button
            class="btn btn-primary"
            @click.prevent="toCard(card)"
          >
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const cards = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=15')
    const images = await $axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=15')
    return { cards, images }
  },
  methods: {
    toCard (card) {
      this.$router.push('/cards/' + card.id)
    },
    toCut (element, num) {
      return element.substr(0, num)
    }
  }
}
</script>

<style>

section {
  margin-top: 60px;

}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 250px;
}
.card-img {
  transition: all 0.3s;
}
.card-img:hover {
  transform: scale(1.05);
}

.card {
  margin: 15px;
}
</style>

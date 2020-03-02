<template>
  <section class="container">
    <h1>Card Store</h1>
    <div class="card-container">
      <div v-for="card in cards" :key="card.id" class="card" style="width: 18rem;">
        <img
          src="https://images.unsplash.com/photo-1500856311637-fc0249e33e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
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
  data: () => ({
    cards: []
  }),
  async mounted () {
    this.cards = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts')
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

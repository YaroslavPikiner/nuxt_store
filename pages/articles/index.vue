<template>
  <section>
    <h1 class="article-title">
      {{ pageName }}
    </h1>
    <div class="article">
      <div v-for="(article, index) in articles" :key="article.id" class="article-body">
        <img
          :src="images[index].url"
          class="card-img-top card-img"
          alt
        >
        <h5 class="article-title">
          {{ toCut(article.title, 20) }}
        </h5>
        <span class="text-muted">Jessica White</span>
        <div class="article-content" v-if="users[index]" @click.prevent="articlesLink(article)">
          <h3 class="article-text">
            {{ toCut(article.title, 25) }}
          </h3>
          <p class="article-subtitle">
            {{ toCut(article.body, 40) }}
          </p>
          <div class="article-writer">
            <img
              v-if="images[index]"
              :src="images[index].url"
              class="writer-img"
              alt
            >
            <div class="writer-title">
              <p
                class="writter-name"
              >
                {{ users[index].username }}
              </p>
              <p class="wrtitter-job">
                {{ users[index].company.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  async asyncData ({ $axios }) {
    const articles = await $axios.$get('https://jsonplaceholder.typicode.com/posts?_limit=15')
    const images = await $axios.$get('https://jsonplaceholder.typicode.com/photos?_limit=15')
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    return { articles, images, users }
  },
  data: () => ({
    pageName: 'From the blog'
  }),
  methods: {
    articlesLink (article) {
      this.$router.push('/articles/' + article.id)
    },
    toCut (element, num) {
      return element.substr(0, num)
    }
  }
}
</script>

<style>
  .article {
    margin: 60px auto;
    width: 900px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1vw;
  }
  .article-title {
    text-align: center;
    margin-top: 10px;
    text-decoration: bold;
  }
  .article-body {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    flex-wrap: nowrap;
  }
  .article-text {
    width: 100%;
    padding: 20px;
    color: #000;
  }

  .article-subtitle {
    padding: 20px 20px 0 20px;
    color: #000;
  }

  .article-content:hover {
    opacity: 1;
  }

  .article-content {
    position: absolute;
    top: 0;
    border: 1px solid white;
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.986);
    opacity: 0;
    transition: all .4s;
    cursor: pointer;
  }

  .article-img {
    width: 300px;
    height: 300px;
  }

  .article-writer {
    margin: 20px 0 0 20px;
    display: flex;
    position: absolute;
    bottom: 10px;
    justify-content: flex-start;
  }
  .writer-title {
    display: block;
    margin: 10px 0 0 20px;
    color: #000;
  }

  .writer-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  .writter-name {
    margin: 0;
    width: 100px;
    height: auto;
  }

  .wrtitter-job {
    margin: 0;
  }
</style>

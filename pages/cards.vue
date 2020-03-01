<template>
  <div class="container card-container">
    <div v-for="card in 5" :key="card" class="card" style="width: 18rem;">
      <img src="https://images.unsplash.com/photo-1500856311637-fc0249e33e4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">
          {{ card }}
        </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .card-container {
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   margin-top: 30px;
 }

 .card {
   margin: 15px;
 }

</style>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link exact active-class="active" to="/" class="nav-link">
              Home
            </nuxt-link>
            <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" to="/articles" class="nav-link">
              Articles
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link active-class="active" to="/cards" class="nav-link">
              Cards
            </nuxt-link>
          </li>
        </ul>
      </div>
      <button class="btn btn-primary">
        <nuxt-link
          active-class="active"
          to="/login"
          class="nav-link text-dark font-weight-bold"
        >
          Login
        </nuxt-link>
      </button>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

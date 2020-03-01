<template>
  <div class="section-nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link tag="h2" to="/" class="nav-logo">
        Nuxt Store
      </nuxt-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav font-weight-bold text-lg">
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
      <nuxt-link
        active-class="active"
        to="/login"
        class="nav-link text-dark font-weight-bold"
      >
        Login
      </nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style>

.section-nav {
  width: 100%;
  position: relative;
}

nuxt-link {
  text-decoration: none;
}

.nav-logo {
  position: absolute;
  left: calc(90% / 2);
  top: 0;
  font-size: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s;
  margin-top: 5px;
}
.nav-logo:hover {
  color: black;
  border: 1px solid black;
  border-radius: 10px;
}

ul > li {
  font-size: 20px;
}
  nav {
  background: linear-gradient(to right top, #d13333, #e7b23f, #d8db26, #37fd62, #4ad2f5, #4657ef, #bf57e8);
  background-size: 600% 600%;
  -webkit-animation: AnimationName 29s ease infinite;
  -moz-animation: AnimationName 29s ease infinite;
  animation: AnimationName 29s ease infinite;
  height: 100px;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}

</style>

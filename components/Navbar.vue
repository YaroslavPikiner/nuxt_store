<template>
  <div class="section-nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img class="nav-logo" src="../assets/img/logo.png" alt="">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav font-weight-bold text-lg">
          <li class="nav-item">
            <nuxt-link exact active-class="active nav-link" to="/" class="navbar-link nav-link">
              Home
            </nuxt-link>
            <span class="sr-only">(current)</span>
          </li>
          <li class="nav-item">
            <nuxt-link v-if="$auth.loggedIn" active-class="active" to="/articles" class="nav-link navbar-link">
              Articles
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link v-if="$auth.loggedIn" active-class="active" to="/cards" class="nav-link navbar-link">
              Cards
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="user__info">
          <img class="user__image" v-if="$auth.loggedIn" src="https://img.icons8.com/officel/2x/user.png" alt="user_img">
        <span v-if="$auth.loggedIn" > {{ $auth.user.name }} </span>
        <button class="navbar-link" v-if="$auth.loggedIn" @click="$auth.logout()">Sign Off</button>
        <button class="navbar-link" v-else @click="$auth.loginWith('auth0')">Sign In</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logIn () {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>

<style>

.user__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user__image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: black;
}

.section-nav {
  width: 100%;
  position: relative;
}

nuxt-link {
  text-decoration: none;
}

.nav-logo {
  position: absolute;
  left: calc(85% / 2);
  top: 20px;
  font-size: 30px;
  text-decoration: none;
  cursor: pointer;
  transition: all .3s;
  margin-top: 20px;
  background-color: black;
  padding: 5px;
}

.navbar-link {
  font-size: 20px;
  color:#000;
  font-weight: 600;
  transition: all .3s;
  padding: 5px;
}

.navbar-link:hover {
  background-color: #000;
  color: #DFE0DF;
  border-radius: 5px;
}

  nav {
  background: linear-gradient(to right top, #FFB304, #FFC1B5, #FE8A80, #C3FCF2, #C2554F, #DFE0DF);
  background-size: 600% 600%;
  -webkit-animation: AnimationName 29s ease infinite;
  -moz-animation: AnimationName 29s ease infinite;
  animation: AnimationName 29s ease infinite;
  height: 150px;
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

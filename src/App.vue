<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/users">Users</router-link> |
      <router-link to="/test">Test</router-link> | 
      <router-link to="/animationlab">Animation</router-link>

      
      <login class='login'></login>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Login from 'components/Login.vue'

  export default {
    name: '',
    components: {
      'login': Login
    },
    methods: {
    },
    created() {

    }
  }
</script>



<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: relative;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.login {
  float: right;
}
</style>

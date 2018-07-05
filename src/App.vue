<template>
  <div id="app">
    <!-- <img class="banner-img" src="./assets/images/web-dev.jpg" alt="A banner representing web development;"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import './assets/style/main.css';
  @import './assets/style/components.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>

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
  @import './assets/style/views.css';
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .header-router-link {
    color: var(--main-color);
    display: inline-block;
    width: 120px;
    padding: 10px;
    font-size: 18px;
  }

  .router-link-exact-active {
    /* background-color: var(--secondary-color); */
    font-weight: bold;
    border-bottom: solid 3px var(--main-color);
    /* color: var(--main-color); */
  }
</style>

<template>
  <div class="">
    <nav class="header-nav">
      <li v-for="item in headerLinks"
          :key="item.name">
        <router-link class="header-router-link" :to="{ name: item.name, params: item.params }"> {{item.displayName}} </router-link>
      </li>
    </nav>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: 'Header',
  components: {},
  props: [],
  data () {
    return {
      headerLinks: [
        { name: 'aboutUs', displayName: 'About us', styleClasses: {}, params: {} },
        { name: 'projects', displayName: 'Projects', styleClasses: {}, params: {} },
        { name: 'homepage', displayName: 'Home', styleClasses: {}, params: {} },
        { name: 'resume', displayName: 'Resume', styleClasses: {}, params: {} },
        { name: 'partners', displayName: 'Partners', styleClasses: {}, params: {} }
      ]
    }
  },

  /**************************
  -> LIFECYCLE METHODS
  **************************/

  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="css">

.header-nav {
  width: 50%;
  min-width: 600px;
  margin: auto;
  text-align: center;
}

</style>

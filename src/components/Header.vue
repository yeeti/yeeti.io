<template>
  <div class="pos-relative">
    <div class="socials-container">
      <font-awesome-icon :icon="['fab', 'github']" size="2x" class="social"/>
      <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" class="social"/>
      <font-awesome-icon :icon="['fab', 'twitter']" size="2x" class="social"/>
    </div>
    <nav class="header-nav">
      <li v-for="item in headerLinks"
          :key="item.name">
        <router-link class="header-router-link" :to="{ name: item.name, params: item.params }"> {{item.displayName}} </router-link>
      </li>
    </nav>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'Header',
  components: { Logo },
  props: [],
  data () {
    return {
      headerLinks: [
        { name: 'aboutUs', displayName: 'About us', styleClasses: {}, params: {} },
        { name: 'projects', displayName: 'Projects', styleClasses: {}, params: {} },
        { name: 'homepage', displayName: 'Home', styleClasses: {}, params: {} },
        { name: 'services', displayName: 'Services', styleClasses: {}, params: {} },
        { name: 'components', displayName: 'Components', styleClasses: {}, params: {} }
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

  .socials-container {
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .social {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: content-box;
    cursor: pointer;
    color: var(--main-color);
    transition: border-bottom 0.2s, height 0.2s;
  }

  .social:hover {
  }

</style>

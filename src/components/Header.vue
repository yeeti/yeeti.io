<template>
  <div class="pos-relative">
    <font-awesome-icon :icon="['fab', 'github']" size="2x" style="color: var(--main-color);" />
    <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" style="color: var(--main-color);" />
    <font-awesome-icon :icon="['fab', 'twitter']" size="2x" style="color: var(--main-color);" />
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

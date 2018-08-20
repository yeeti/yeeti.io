<!--
  has a link target or another menu target
 -->
<template v-if="menuObject">
  <li v-if="menuObject.type === 'href'" class="item-container" @mouseover="mouseOver" @mouseout="mouseOut">
    <a class="menu-item" :style="hoverStyle" :href="menuObject.link">{{ menuObject.title }}</a>
  </li>

  <li v-else-if="menuObject.type === 'router-link'" class="item-container" @mouseover="mouseOver" @mouseout="mouseOut">
    <router-link class="menu-item" :style="this.hoverStyle" :to="menuObject.routerObj">{{ menuObject.title }}</router-link>
  </li>
</template>

<script>
// import Test from './something'
export default {
  name: 'YeDropdownItem',
  components: {},
  props: ['menuObject'],
  data () {
    return {
      hoverStyle: {
        backgroundColor: 'var(--secondary-color)'
      }
    }
  },
  methods: {
    mouseOver: function () {
      this.hoverStyle = {
        backgroundColor: '#475472'
      }
    },
    mouseOut: function () {
      this.hoverStyle = {
        backgroundColor: 'var(--secondary-color)'
      }
    }
  },
  computed: {},
  watch: {},

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
  .menu-item {
    display: block;
    padding: 10px;
    width: 100%;
    height: 100%;
    color: var(--main-color);
    background-color: var(--secondary-color);
    text-align: center;
  }

  .item-container {
    width: 100%;
  }
</style>

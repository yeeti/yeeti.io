<template>
  <div class="dropdown-container" @mouseover="mouseOver" @mouseout="mouseOut">
    <div class="dropdown-title">
      {{ title }}
    </div>
    <ul :class="[dropdownClass, container]">
      <YeDropdownItem v-if="menuItems"
      v-for="item in menuItems"
      :key="item.title"
      :menuObject="item"/>
    </ul>
  </div>
</template>

<script>

import YeDropdownItem from '@/components/DropdownMenu/YeDropdownItem'

export default {
  name: '',
  components: { YeDropdownItem },
  props: ['title', 'menuItems', 'styleObject', 'className'],
  data () {
    return {
      dropdownClass: 'hidden',
      container: 'container'
    }
  },
  methods: {
    mouseOver: function () {
      this.dropdownClass = 'showing'
    },
    mouseOut: function () {
      this.dropdownClass = 'hidden'
    }
  },
  computed: {
  },
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

  .dropdown-container {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    cursor: pointer;
    user-select: none;
  }

  .dropdown-title {
    display: inline-block;
    padding: 10px 12px;
    background-color: var(--secondary-color);
    color: var(--main-color);
  }

  .container {
    position: absolute;
    top: 24px;
    width: 300px;
    background-color: var(--secondary-color);
    box-shadow: 5px 5px 10px var(--secondary-color);
    transition: opacity 0.15s;
  }
</style>
<!--
  WIKI:
  menuItemObject: {
    title: 'Products' // Displayed text of the menuItem,
    type: 'href | router-link',
    link: 'https://google.com', // [optional] if type == link
    routerObj: { name: '', params: {} }
  }
 -->

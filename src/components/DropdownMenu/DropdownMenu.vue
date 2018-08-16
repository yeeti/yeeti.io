<template>
  <div class="pos-rel">
    <div class="dropdown-title"  @click="dropdownClick">
      {{ title }}
    </div>
    <ul :class="dropdownClass">
      <DropdownMenuItem v-if="menuItems"
      v-for="item in menuItems"
      :key="item.title"
      :menuObject="item"/>
    </ul>
  </div>
</template>

<script>

import DropdownMenuItem from '@/components/DropdownMenu/DropdownMenuItem'

export default {
  name: '',
  components: { DropdownMenuItem },
  props: ['title', 'menuItems', 'styleObject', 'className'],
  data () {
    return {
      dropdownClass: 'hidden'
    }
  },
  methods: {
    dropdownClick: function () {
      console.log('REEE')
      this.dropdownClass = this.dropdownClass === 'hidden' ? 'showing' : 'hidden'
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

  .pos-rel {
    position: relative;
  }

  .dropdown-title {
    display: inline-block;
    padding: 10px 12px;
    background-color: var(--secondary-color);
    color: var(--main-color);
  }
</style>
<!--
  WIKI:
  menuItemObject: {
    title: 'Products' // Displayed text of the menuItem,
    target: {
      type: 'href | router-link,
      link: 'https://google.com' // [optional] if type == link,
      routerObj: { name: '', params: {} }
    },
  }
 -->

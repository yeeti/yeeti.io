<!--
  has a link target or another menu target
 -->
<template>
  <li class="menu-item">
    <span v-if="menuObject">{{ menuObject.title }}</span>
  </li>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: ['menuObject'],
  data () {
    return {
    }
  },
  methods: {},
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
</style>

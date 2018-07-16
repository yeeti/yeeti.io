<template>
  <div class="">
    <slot></slot>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  methods: {},

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

<!-- WIKI
slot: always put the property slot. it defines if the tab is shown or not
 -->

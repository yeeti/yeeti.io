<template>
  <div class="logo">
    <div class="name-logo">
      <span>yeeti.io</span>
    </div>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {}
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

  .name-logo {
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 10px;
  }

  .logo {
    position: relative;
    position: absolute;
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: auto;
    color: var(--secondary-color);
    font-size: 10px;
    background-color: var(--main-color);
  }
</style>

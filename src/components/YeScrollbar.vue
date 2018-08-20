<template>
  <div id="scrollbar" class="scrollbar-container" :style="barStyle" @scroll="onScroll">

  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      barStyle: {
        height: '100px',
        top: '10px'
      }
    }
  },
  methods: {
    onScroll: function (event) {
      console.log(event)
    }
  },
  computed: {},
  watch: {},

  /**************************
  -> LIFECYCLE METHODS
  **************************/

  beforeCreate () {},
  created () {
  },
  beforeMount () {
  },
  mounted () {
    this.$nextTick(function () {
      let parent = this.$el.parentElement
      parent.addEventListener('scroll', this.onScroll)
      this.barStyle.height = (parent.clientHeight - 20) + 'px'
    })
  },
  beforeUpdate () {},
  updated () {
  },
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="css">

  .scrollbar-container {
    width: 10px;
    position: absolute;
    right: 5px;
    background-color: black;
  }
</style>

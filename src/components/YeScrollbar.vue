<template>
  <div class="">
    <div class="scrollbar-container" :style="barStyle"/>
    <div class="scrollbar-bean" :style="beanStyle"/>
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
      },
      beanStyle: {
        height: '10px',
        top: '10px'
      },
      offset: 10,
      beanHeight: 0
    }
  },
  methods: {
    onScroll: function (event) {
      this.barStyle.top = this.offset + event.target.scrollTop + 'px'
      this.beanStyle.top = (((event.target.scrollTop / event.target.scrollTopMax) * (event.target.clientHeight - 20 - this.beanHeight)) + (10 + event.target.scrollTop)) + 'px'
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
      this.beanHeight = ((parent.clientHeight / parent.scrollTopMax) * 100) - 20
      this.barStyle.height = (parent.clientHeight - 20) + 'px'
      this.beanStyle.height = this.beanHeight + 'px'
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
    position: absolute;
    width: 10px;
    right: 7.5px;
    background-color: darkgrey;
    border-radius: 5px;
    opacity: 0.65;
    box-shadow: 1px 1px 5px darkgrey;
  }

  .scrollbar-bean {
    width: 10px;
    position: absolute;
    right: 7.5px;
    background-color: var(--secondary-color);
    border-radius: 5px;
  }
</style>

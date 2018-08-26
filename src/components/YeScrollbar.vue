<template>
  <div class="" :style="displayStyle">
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
      displayStyle: {
        opacity: 0,
        transition: '0.1s opacity'
      },
      offset: 10,
      beanHeight: 0
    }
  },
  methods: {
    onScroll: function (event) {
      this.barStyle.top = this.offset + event.target.scrollTop + 'px'
      this.beanStyle.top = (((event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight)) * (event.target.clientHeight - 20 - this.beanHeight)) + (10 + event.target.scrollTop)) + 'px'
    },
    onMouseEnter: function (event) {
      this.displayStyle.opacity = 1
    },
    onMouseLeave: function (event) {
      this.displayStyle.opacity = 0
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
      this.beanHeight = ((parent.clientHeight / (parent.scrollHeight - parent.clientHeight)) * 100) - 20
      this.barStyle.height = (parent.clientHeight - 20) + 'px'
      this.beanStyle.height = this.beanHeight + 'px'

      parent.addEventListener('scroll', this.onScroll)
      parent.addEventListener('mouseenter', this.onMouseEnter)
      parent.addEventListener('mouseleave', this.onMouseLeave)
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

<template>
  <div class="">

    <!-- Y scrollbar -->
    <div v-if="this.YbarShow" class="" :style="displayStyle">
      <div class="scrollbar-container" :style="YbarStyle"/>
      <div class="scrollbar-bean" :style="YbeanStyle"/>
    </div>

    <!-- X scrollbar -->
    <div v-if="this.XbarShow" class="" :style="displayStyle">
      <div class="scrollbar-container" :style="YbarStyle"/>
      <div class="scrollbar-bean" :style="YbeanStyle"/>
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
    return {
      YbarStyle: {
        height: '100px',
        top: '10px',
        right: '8px'
      },
      YbeanStyle: {
        height: '10px',
        top: '10px',
        right: '8px'
      },
      YbarShow: true,
      XbarStyle: {
        width: '100px',
        left: '10px'
      },
      XbeanStyle: {
        width: '10px',
        left: '10px'
      },
      XbarShow: true,
      displayStyle: {
        opacity: 0,
        transition: '0.1s opacity'
      },
      offset: 10,
      clientHeight: 0,
      scrollHeight: 0,
      beanHeight: 0,
      beanWidth: 0
    }
  },
  methods: {
    onScroll: function (event) {
      if (this.YbarShow) {
        this.YbarStyle.top = this.offset + event.target.scrollTop + 'px'
        this.YbarStyle.right = 8 - event.target.scrollLeft + 'px'

        this.YbeanStyle.top = (((event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight)) * (event.target.clientHeight - 20 - this.beanHeight)) + (10 + event.target.scrollTop)) + 'px'
        this.YbeanStyle.right = 8 - event.target.scrollLeft + 'px'
      }

      if (this.XbarShow) {

      }
    },
    onMouseEnter: function (event) {
      this.barSetup()
      this.displayStyle.opacity = 1
    },
    onMouseLeave: function (event) {
      this.displayStyle.opacity = 0
    },
    barSetup: function () {
      if (this.YbarShow) {
        this.clientHeight = this.$el.parentElement.clientHeight
        this.scrollHeight = this.$el.parentElement.scrollHeight
        this.beanHeight = this.getBeanHeight()

        this.YbarStyle.height = (this.clientHeight - 20) + 'px'
        this.YbeanStyle.height = this.beanHeight + 'px'
      }
    },
    getBeanHeight: function () {
      // 17 is the thickness of the scrollbar, 20 is 2 times the offset
      return ((this.clientHeight / (this.scrollHeight - this.clientHeight)) * 100) - (20 + 17)
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
      console.log(parent)
      this.YbarShow = parent.clientHeight < parent.scrollHeight
      this.XbarShow = parent.clientWidth < parent.scrollWidth

      parent.addEventListener('scroll', this.onScroll)
      parent.addEventListener('mouseenter', this.onMouseEnter)
      parent.addEventListener('mouseleave', this.onMouseLeave)

      this.barSetup()
      // if (this.YbarShow || this.XbarShow) {
      // }
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

  /* CUSTOM SCROLLBAR:
  **  To make it happen with a table, we need 2 parent containers:
  **    [div] 1   -> position: relative, overflow(-x/-y): hidden, box-sizing: content-box
  **    [div] 2   -> position: relative, overflow(-x/-y): scroll, box-sizing: content-box,
  **                 padding(-right/-bottom): 17px, height/width: 100%
  **    [table] 3 -> position: absolute, width/height: 100%
  */

  .scrollbar-container {
    position: absolute;
    width: 10px;
    right: 7.5px;
    background-color: darkgrey;
    border-radius: 5px;
    opacity: 0.65;
  }

  .scrollbar-bean {
    width: 10px;
    position: absolute;
    right: 7.5px;
    background-color: var(--secondary-color);
    border-radius: 5px;
  }
</style>

<template>
  <div class="">

    <!-- Y scrollbar -->
    <div v-if="this.YbarShow" name="yBar" class="scrollbar" :style="displayStyle" >
      <div class="scrollbar-container" :style="YbarStyle" />
      <div name="yBean" class="scrollbar-bean" :style="YbeanStyle" draggable="true" v-on:dragstart="onDragStart" v-on:drag="onDragY"/>
    </div>

    <!-- X scrollbar -->
    <div v-if="this.XbarShow" name="xBar" class="" :style="displayStyle">
      <div class="scrollbar-container" :style="XbarStyle"/>
      <div name="xBean" class="scrollbar-bean" :style="XbeanStyle"/>
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
        bottom: '10px',
        left: '10px'
      },
      XbeanStyle: {
        width: '10px',
        bottom: '10px',
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
    onScroll (event) {
      if (this.YbarShow) {
        this.YbarStyle.top = this.offset + event.target.scrollTop + 'px'
        this.YbarStyle.right = 8 - event.target.scrollLeft + 'px'

        this.YbeanStyle.top = (((event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight)) * (event.target.clientHeight - 20 - this.beanHeight)) + (10 + event.target.scrollTop)) + 'px'
        this.YbeanStyle.right = 8 - event.target.scrollLeft + 'px'
      }

      if (this.XbarShow) {

      }
    },
    onMouseEnter (event) {
      this.barSetup()
      this.displayStyle.opacity = 1
    },
    onMouseLeave (event) {
      this.displayStyle.opacity = 0
    },
    onDragStart (event) {
      var crt = event.target.cloneNode()
      crt.style.display = 'none'
      event.dataTransfer.effectAllowed = 'copyMove'
      event.dataTransfer.setDragImage(crt, 0, 0)
    },
    onDragY (event) {
      event.target.style.cursor = 'pointer'
      event.dataTransfer.dropEffect = 'copy'
      console.log('reeee')
    },
    barSetup () {
      if (this.YbarShow) {
        this.clientHeight = this.$el.parentElement.clientHeight
        this.scrollHeight = this.$el.parentElement.scrollHeight
        this.beanHeight = this.getBeanHeight()

        this.YbarStyle.height = (this.clientHeight - 20) + 'px'
        this.YbeanStyle.height = this.beanHeight + 'px'
      }
    },
    getBeanHeight () {
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
      // this.YbarShow = parent.clientHeight < parent.scrollHeight
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

  div.scrollbar-bean {
    cursor: pointer !important;
  }

  .scrollbar {
    width: 100%;
  }
  .scrollbar-container {
    position: absolute;
    width: 10px;
    right: 7.5px;
    background-color: darkgrey;
    border-radius: 5px;
    opacity: 0.65;
    z-index: 1000;
  }

  .scrollbar-bean {
    width: 10px;
    position: absolute;
    right: 7.5px;
    background-color: var(--secondary-color);
    border-radius: 5px;
    z-index: 1001;
  }
</style>

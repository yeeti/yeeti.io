<template>
  <div class="">
    <div class="yeswitch" @click="toggle">
      <!-- TO SWITCH BG COLOR: 2 DIVS, left and right of knob, overflow hidden -->
      <div class="knob" @click="toggle">
        <div class="switch-off"/>
        <div class="switch-on"/>
      </div>
    </div>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    toggle () {
      let bgSwitch = this.$el.children[0]
      let knob = bgSwitch.children[0]
      console.log(this.$el.children[0])
      if (!this.value) {
        bgSwitch.style.backgroundColor = '#22a9dd'
        knob.style.left = '34px'
        this.$emit('input', true)
      } else {
        bgSwitch.style.backgroundColor = 'lightgrey'
        knob.style.left = '-2px'
        this.$emit('input', false)
      }
    }
  },
  computed: {},
  watch: {},

  /**************************
  -> LIFECYCLE METHODS
  **************************/

  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () { this.toggle() },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="css">
  .yeswitch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 25px;
    background-color: lightgrey;
    border-radius: 30px;
    transition: background-color 0.3s;
    overflow: hidden;
  }

  .knob {
    position: absolute;
    display: inline-block;
    height: 30px;
    width: 30px;
    background-color: var(--yedarkblue);
    border-radius: 50%;
    /* border: 2px solid var(--yedarkblue); */
    left: -2px;
    top: -2px;
    transition: left 0.3s;
  }

  .switch-off {

  }

  .Switch-on {

  }
</style>

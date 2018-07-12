<template>
  <div class="" :style="circleStyle">

  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: {
    params: {
      type: Object
    },
    preset: {
      type: Number,
      default: function () { return 0 }
    }
  },
  data () {
    return {
      circleStyle: {
        width: this.params.diameter,
        height: this.params.diameter,
        zIndex: this.params.zIndex,
        shadow: this.params.shadow ? '2px 2px 10px darkgrey' : '0',
        top: this.params.top != null ? this.params.top : '',
        bot: this.params.bot != null ? this.params.bot : '',
        left: this.params.left != null ? this.params.left : '',
        right: this.params.right != null ? this.params.right : ''
      },
      presetStyle: function () {
        let preset

        switch (this.preset) {
          case 1:
            preset = {
              width: 100,
              height: 100,
              zIndex: this.params.zIndex,
              shadow: '2px 2px 10px darkgrey' : '0',
              top: `${Math.round(Math.random() * 20)}px`,
              bot: null,
              left: `${Math.round(Math.random() * 20)}px`,
              right: null
            }
            break;
          default:

        }

        return preset
      }
    }
  },

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

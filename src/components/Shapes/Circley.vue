<template>
  <div class="circley" :style="circleStyle">

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
      colors: ['#ec6e68', '#58c1b5', '#ecb45e', '#9f80b6', '#00acee'],
      presetStyle: function () {
        let preset
        let swit = Math.round(Math.random() * 5)
        console.log('do you even go here? ' + swit)
        switch (swit) {
          case 1:
            preset = {
              width: 50 + 'px',
              height: 50 + 'px',
              zIndex: 1004,
              boxShadow: '2px 2px 10px darkgrey',
              top: `${Math.round(Math.random() * 100)}px`,
              bottom: null,
              left: `${Math.round(Math.random() * 300)}px`,
              right: null,
              backgroundColor: this.colors[swit]
            }
            console.log('hello 1?')
            break

          case 2:
            preset = {
              width: 125 + 'px',
              height: 125 + 'px',
              zIndex: 1002,
              boxShadow: '2px 2px 10px darkgrey',
              top: `${Math.round(Math.random() * 100)}px`,
              bottom: null,
              left: `${Math.round(Math.random() * 300)}px`,
              right: null,
              backgroundColor: this.colors[swit]
            }
            break

          case 3:
            preset = {
              width: 75 + 'px',
              height: 75 + 'px',
              zIndex: 1003,
              boxShadow: '2px 2px 10px darkgrey',
              top: `${Math.round(Math.random() * 100)}px`,
              bottom: null,
              left: `${Math.round(Math.random() * 300)}px`,
              right: null,
              backgroundColor: this.colors[swit]
            }
            break

          case 4:
            preset = {
              width: 90 + 'px',
              height: 90 + 'px',
              zIndex: 1002,
              boxShadow: '2px 2px 10px darkgrey',
              top: `${Math.round(Math.random() * 100)}px`,
              bottom: null,
              left: `${Math.round(Math.random() * 300)}px`,
              right: null,
              backgroundColor: this.colors[swit]
            }
            break

          default:
            preset = {
              width: 120 + 'px',
              height: 120 + 'px',
              zIndex: 1001,
              boxShadow: '2px 2px 10px darkgrey',
              top: `${Math.round(Math.random() * 100)}px`,
              bottom: null,
              left: `${Math.round(Math.random() * 300)}px`,
              right: null,
              backgroundColor: this.colors[0]
            }
            break
        }

        return preset
      }
    }
  },
  methods: {
    random: function (max, min) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  },

  /**************************
  -> LIFECYCLE METHODS
  **************************/

  beforeCreate () {},
  created () {},
  beforeMount () {
    let diameter = this.random(150, 200)
    let zInd = 1000 + this.random(1, 10)
    let top = this.random(0, 100)
    let left = this.random(0, 300)
    console.log(this.$parent)

    this.circleStyle = {
      boxShadow: '2px 2px 10px darkgrey',
      width: diameter + 'px',
      height: diameter + 'px',
      zIndex: zInd,
      top: `${top}px`,
      left: `${left}px`,
      backgroundColor: this.colors[this.random(0, this.colors.length)]
    }
  },
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="css">
</style>

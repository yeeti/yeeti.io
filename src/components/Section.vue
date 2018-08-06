<template>
<!-- WIKI: the 'bgColor' property set to nothing will return the projects main color var(-.-main-color) -->
  <section class="section-template" :style="sectionStyle">
    <h2 class="section-title" v-if="title !== ''">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
// import Test from './something'
export default {
  name: 'Section',
  components: {},
  props: [ 'title', 'bgColor', 'rounded', 'width' ],
  data () {
    return {
      sectionStyle: {
        backgroundColor: this.propBackgroundColor()
        /* ,
        width: this.width !== '' ? this.width + 'px' : '100%',
        minWidth: '50%' */
      }
    }
  },
  methods: {
    propBackgroundColor: function () {
      if (this.bgColor === '0') return ''
      else if (this.bgColor === '') return 'var(--secondary-color)'
      else return this.bgColor
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

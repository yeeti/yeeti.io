<template>
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
        backgroundColor: this.bgColor !== '' ? this.bgColor : 'white',
        width: this.width !== '' ? this.width + 'px' : '100%',
        minWidth: '50%'
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

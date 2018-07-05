<template>
  <div class="image-template">
    <img class="profile-pic" :src="src" :alt="alt"/>
  </div>
</template>

<script>

export default {
  name: 'Img',
  components: {},
  props: ['src', 'alt'],
  data () {
    return {
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

<template>
  <div class="image-template">
    <div v-if="profilePic != ''" class="profile-pic">
      <div class="profile-pic-top"></div>
      <div class="pic-img-container">
        <img class="profile-pic-img" src="../assets/images/oli.jpg" alt="Profile picture of Olivier Lepage">
      </div>
      <div class="profile-pic-bot"></div>
    </div>

    <img v-else class="" :src="src" :alt="alt"/>
  </div>
</template>

<script>

export default {
  name: 'Img',
  components: {},
  props: ['src', 'alt', 'profilePic', 'halfTop', 'halfBot'],
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

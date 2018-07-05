<template>
  <div class="">
    <Header />
    <div class="banner-div">
      <img class="banner-img" src="../assets/images/web-dev.png" alt="">
    </div>
    <Section bgColor="#ffffff00">

    </Section>
    <Section title="Welcome to yeeti.io!" bgColor="" width="">
      <div>
        <Img :src="image" />
      </div>
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Section from '@/components/Section'
import Img from '@/components/Img'
import image from '@/assets/images/oli.jpg'

export default {
  name: 'Homepage',
  components: {Header, Section, Img},
  props: [],
  data () {
    return {
      image: image
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

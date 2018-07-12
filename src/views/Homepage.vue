<template>
  <div class="">
    <Header />
    <img class="banner-img" src="../assets/images/web-dev.png" alt="">
    <div class="banner-div">
    </div>
    <Section title="Hi! I'm Olivier Lepage" bgColor="" width="">
      <Img profile-pic="true" />
      <Experience />
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Img from '@/components/Img'
import Experience from '@/components/Experience'
import image from '@/assets/images/oli.jpg'

export default {
  name: 'Homepage',
  components: {Header, Section, Img, Card, Experience},
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

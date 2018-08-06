<template>
  <div class="image-background-static" :style="{height: height}">
    <Header />
    <Banner></Banner>
    <!-- <div class="logo">
      <div class="name-logo">
        <span>yeeti.io</span>
      </div>
    </div> -->
    <div class="middle-title" :style="titleMargin">
      <h2 class="hp-title">Because the world needs pretty, modern and affordable websites.</h2>
    </div>
    <Section title="" bgColor="0" width="">
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Section from '@/components/Section'
import Card from '@/components/Card'
import Img from '@/components/Img'
import Experience from '@/components/Experience'
import image from '@/assets/images/oli.jpg'

export default {
  name: 'Homepage',
  components: { Header, Section, Img, Card, Experience, Banner },
  props: [],
  data () {
    return {
      image: image,
      height: (window.innerHeight - 1) + 'px',
      titleMargin: { marginTop: 200 + 'px' }
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

  .hp-title {
    font-weight: normal;
    font-style: italic;
    color: var(--main-color);
  }

  .name-logo{
    font-weight: bold;
    position: absolute;
    bottom: 75px;
    right: 45px;
    padding: 10px;
  }
</style>

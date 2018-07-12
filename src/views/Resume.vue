<template>
  <div class="">
    <Header />
    <Banner></Banner>
    <Img profile-pic="true" minus-top="true"/>
    <Section title="Work experience" bgColor="" width="">
      <Experience />
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Img from '@/components/Img'
import Section from '@/components/Section'
import Experience from '@/components/Experience'
import Card from '@/components/Card'

export default {
  name: 'Resume',
  components: { Header, Section, Img, Card, Experience, Banner },
  props: [],
  data () {
    return {}
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

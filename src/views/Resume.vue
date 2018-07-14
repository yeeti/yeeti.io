<template>
  <div class="">
    <Header />
    <Banner>
      <div class="resume-name-title">
        <span class="resume-full-name span-block">{{ 'Olivier Lepage' }}</span>
        <span class="resume-pro-title span-block">{{ 'Web Developer' }}</span>
      </div>
    </Banner>
    <Img profile-pic="true" minus-top="true"/>
    <p>{{'Top skills: Vue.js, Node.js, Mobile Development iOS & Android, Bilingual French & English'}}</p>
    <Section title="Work experience" bgColor="" width="">
      <TabContainer />
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
import TabContainer from '@/components/TabContainer'

export default {
  name: 'Resume',
  components: { Header, Section, Img, Card, Experience, Banner, TabContainer },
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

<template>
  <div class="main-color base-layout">
    <Header />

    <!-- YeTextbox -->
    <Section title="YeTextbox" bgColor="var(--main-color)">
      <div class="">
        <YeTextbox v-model="inputValue" placeholder="I'm a custom placeholder"/>
        <p>{{ `Value: ${inputValue}` }}</p>
      </div>
    </Section>

    <!--  -->
    <Section title="YeTextarea" bgColor="var(--main-color)">
      <div class="">
        <YeTextarea />
        <p>{{  }}</p>
      </div>
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Section from '@/components/Section'
import YeTextbox from '@/components/YeTextbox'
import YeTextarea from '@/components/YeTextarea'

export default {
  name: '',
  components: { Section, Header, YeTextbox, YeTextarea },
  props: [],
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {},
  computed: {},
  watch: {},

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
  .base-layout {

  }
</style>

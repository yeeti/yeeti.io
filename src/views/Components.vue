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
    <Section title="YeTextbox" bgColor="var(--main-color)">
      <div class="">
      </div>
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Section from '@/components/Section'
import YeTextbox from '@/components/YeTextbox'

export default {
  name: '',
  components: { Section, Header, YeTextbox },
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

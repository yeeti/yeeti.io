<template>
  <div class="main-color base-layout">
    <Header />

    <!-- YeTextbox -->
    <Section title="YeTextbox" bgColor="var(--main-color)">
      <div class="">
        <YeTextbox v-model="yeTextboxValue" placeholder="I'm a custom placeholder for YeTextbox"/>
        <p>{{ `Value: ${yeTextboxValue}` }}</p>
      </div>
    </Section>

    <!-- YeTextarea -->
    <Section title="YeTextarea" bgColor="var(--main-color)">
      <div class="">
        <YeTextarea v-model="yeTextareaValue" placeholder="I'm a custom placeholder for YeTextarea"/>
        <p>{{ `Value: ${yeTextareaValue}` }}</p>
      </div>
    </Section>

    <!-- YeButton -->
    <Section title="YeButton" bgColor="var(--main-color)">
      <div class="">
        <YeButton text="Click here!" :action="this.yeButtonFct"/>
        <p>{{ `Value: ${yeButtonValue}` }}</p>
      </div>
    </Section>

    <!-- YeSwitch -->
    <Section title="YeButton" bgColor="var(--main-color)">
      <div class="">
        <YeSwitch v-model="yeSwitchValue"/>
        <p>{{ `Value: ${yeSwitchValue}` }}</p>
      </div>
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Section from '@/components/Section'
import YeSwitch from '@/components/YeSwitch'
import YeButton from '@/components/YeButton'
import YeTextbox from '@/components/YeTextbox'
import YeTextarea from '@/components/YeTextarea'

export default {
  name: '',
  components: { Section, Header, YeTextbox, YeTextarea, YeButton, YeSwitch },
  props: [],
  data () {
    return {
      yeTextboxValue: '',
      yeTextareaValue: '',
      yeButtonValue: '',
      yeSwitchValue: false
    }
  },
  methods: {
    yeButtonFct () {
      if (this.yeButtonValue === '') {
        this.yeButtonValue = 'The button was pushed!'
      } else {
        this.yeButtonValue = ''
      }
    }
  },
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

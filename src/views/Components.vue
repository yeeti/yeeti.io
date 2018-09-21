<template>
  <div class="base-layout">
    <Header />
    <Section >
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Section from '@/components/Section'

export default {
  name: '',
  components: { Section, Header },
  props: [],
  data () {
    return {}
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

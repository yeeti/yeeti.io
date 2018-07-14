<!-- eslint-disable -->
<template>
  <div class="tab-container">
    <ul>
      <li v-for="tab in tabs"
          :class="[currentTab == tab ? 'current-tab tab' : 'tab']"
          @click="focusTab(tab)" >{{tab}}</li>
    </ul>
    <div v-for="(tab, index) in tabs" :class="[currentTab == tab ? 'showing' : 'hidden']">
      {{ tabContent[index] }}
    </div>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: [],
  data () {
    return {
      currentTab: 'tab1',
      tabs: ['tab1', 'tab2', 'tab3', 'tab4'],
      tabContent: ['baap', 'suh', 'mah dood', 'memes']
    }
  },
  methods: {
    focusTab: function (tab) {
      this.currentTab = tab
    }
  },
  computed: {},

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

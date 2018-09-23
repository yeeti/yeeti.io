<template>
  <div class="container">
    <input class="base" type="text"
           :placeholder="this.placeholder || ''"
           :value="value"
           @input="$emit('input', $event.target.value)">
    <!-- <div class="reset"/> -->
    <!-- <div class="border-bot-main"/> -->
    <div class="border-bot-sec"/>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: ['value', 'defaultValue', 'placeholder'],
  data () {
    return {}
  },
  methods: {
  },
  computed: {},
  watch: {},

  /**************************
  -> LIFECYCLE METHODS
  **************************/

  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
    console.log(this.$el.children)

    let input = this.$el.children[0]
    let border = this.$el.children[1]
    input.addEventListener('focus', (event) => {
      border.style.height = '2.5px'
    })

    input.addEventListener('blur', (event) => {
      border.style.height = '1.5px'
    })
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="css">

  .container {
    min-width: 300px;
    display: inline-block;
    padding: 5px;
  }

  .border-bot-main {
    /* width: 100%; */
    /* height: 2px; */
  }

  .border-bot-sec {
    width: 100%;
    height: 1.5px;
    border-radius: 5px;
    background-color: var(--yedarkblue);
  }

  .base {
    width: calc(100%);
    border: none;
    font-size: 15px;
    background-color: transparent;
    line-height: 30px;
  }

  .reset {
    display: inline-block;
    height: 20px;
    width:20px;
    background-color: var(--yeorange);
    margin: 5px;
  }
</style>

<template>
  <div class="container">
    <input class="text-form" type="text"
           :placeholder="this.placeholder || ''"
           :value="value"
           @input="$emit('input', $event.target.value)">
    <!-- <div class="reset"/> -->
    <!-- <div class="border-bot-main"/> -->
    <div class="form-border-bot"/>
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
      border.style.backgroundColor = 'var(--yedarkblue)'
    })

    input.addEventListener('blur', (event) => {
      border.style.backgroundColor = 'var(--yedarkblue-trans)'
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

  .reset {
    display: inline-block;
    height: 20px;
    width:20px;
    background-color: var(--yeorange);
    margin: 5px;
  }
</style>

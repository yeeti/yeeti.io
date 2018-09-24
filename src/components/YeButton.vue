<template>
  <div class="base" @click="action">
    {{ text }}
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: {
    action: {
      type: Function,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
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
  .base {
    display: inline-block;
    padding: 15px 30px;
    background-color: var(--yedarkblue);
    color: var(--main-color);
    border-radius: 5px;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    box-shadow: 2px 2px 5px grey;
    transition: background-color 0.2s, box-shadow 0.2s;
  }

  .base:hover {
    background-color: var(--yeorange);
    box-shadow: 3px 3px 10px grey;
  }

</style>

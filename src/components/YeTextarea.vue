<template>
  <div class="container">
    <textarea class="yetextarea text-form"
              rows="1"
              wrap="soft"
              :placeholder="this.placeholder || ''"
              :value="value"
              @input="$emit('input', $event.target.value)"></textarea>
    <div class="form-border-bot"/>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: ['value', 'placeholder'],
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
  mounted () {
    let textarea = this.$el.children[0]
    let border = this.$el.children[1]

    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    })

    textarea.addEventListener('focus', () => {
      border.style.backgroundColor = 'var(--yedarkblue)'
    })

    textarea.addEventListener('blur', () => {
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
    width: 100%;
    padding: 5px;
  }

  .yetextarea {
    font-family: 'Roboto';
    background-color: transparent;
    border: none;
    resize: none;
    width: 100%;
    overflow: hidden;
    outline: none;
    padding-bottom: 1px;
  }
</style>

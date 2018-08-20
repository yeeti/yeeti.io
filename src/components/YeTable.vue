<template>
  <div class="hide-scrollbar">
    <table class="table-header">
      <tr class="header-row">
        <th class="header-cell" v-for="(value, key) in datasource[0]" :key="key">{{ key }}</th>
      </tr>
    </table>
    <div class="table-container">
      <table class="table">
        <tr class="row" v-for="row in datasource" :key="row.key">
          <td class="cell" v-for="cell in row" :key="cell.key">{{ cell }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// import Test from './something'
export default {
  name: '',
  components: {},
  props: {
    datasource: {
      type: Array,
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
  .hide-scrollbar {
    position: relative;
    overflow-x: hidden;
    box-shadow: 5px 5px 10px #cdd0d7;
  }

  .table-container {
    max-height: 300px;
    width: 100%;
    box-sizing: content-box;
    overflow-y: scroll;
    padding-right: 17px;
  }

  .table-header {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    color: var(--secondary-color);
  }

  .table {
    width: calc(100% + 17px);
    height: 100%;
    border-collapse: collapse;
    text-align: center;
    color: var(--secondary-color);
  }

  .header-row {
    background-color: var(--secondary-color);
  }

  .row { }
  /* .row:nth-child(0) { margin-top: 60px; } */
  .row:nth-child(even) {
    background-color: #cdd0d7;
  }

  .row:nth-child(odd) {
    background-color: var(--main-color);
  }

  .header-cell {
    padding: 20px;
    font-weight: bold;
    color: var(--main-color);
  }
  .cell {
    padding: 15px;
  }
</style>

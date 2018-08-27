<template>
  <div class="">
    <table name="header" title="header" class="table-header">
      <tr class="header-row">
        <th class="header-cell" v-for="(value, key) in datasource[0]" :key="key">{{ key }}</th>
      </tr>
    </table>
    <div class="hide-scrollbar">
      <div name="table-container" title="table-container" class="table-container">
        <table title="datatable" class="table">
          <tr class="row" v-for="row in datasource" :key="row.key">
            <td class="cell" v-for="cell in row" :key="cell.key">{{ cell }}</td>
          </tr>
        </table>
        <YeScrollbar />
      </div>
    </div>
  </div>
</template>

<script>

import YeScrollbar from '@/components/YeScrollbar'

export default {
  name: '',
  components: { YeScrollbar },
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
  mounted () {
    this.$nextTick(function () {
      let children = this.$el.children
      let header = children.namedItem('header')
      let datatable = children.namedItem('table-container')

      // datatable.style.height = datatable.clientHeight - header.clientHeight + 'px'
    })
  },
  beforeUpdate () {},
  updated () {
  },
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="css">
  .hide-scrollbar {
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    height: 500px;
    box-shadow: 5px 5px 10px #cdd0d7;
    box-sizing: content-box;
  }

  .table-container {
    position: relative;
    /* height: calc(100% - 59px); */
    height: 100%;
    width: 100%;
    box-sizing: content-box;
    overflow-y: scroll;
    overflow-x: scroll;
    padding-right: 17px;
    padding-bottom: 17px;
  }

  .table-header {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    color: var(--secondary-color);
  }

  .table {
    width: calc(100% + 17px);
    height: calc(100% + 17px);
    display: block;
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
    min-width: 150px;
  }
</style>

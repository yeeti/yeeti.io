<template>
  <div class="image-background-static" :style="{height: height}">
    <Header />
    <Banner></Banner>
    <div class="middle-title" :style="titleMargin">
      <h2 class="hp-title">Because your business needs a modern and affordable website.</h2>
      <div class="btn-container">
        <button id="" type="button" class="rounded-button">Services</button>
        <button id="" type="button" class="rounded-button">Our Work</button>
      </div>
    </div>
    <Section title="" bgColor="white" width="">
      <YeDropdown title="DROPDOWN" :menuItems="this.menuItems"/>
      <YeTable :datasource="this.datasource"/>
      <ProductDesc />
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Section from '@/components/Section'
import ProductDesc from '@/components/ProductDesc'
import YeDropdown from '@/components/DropdownMenu/YeDropdown'
import YeTable from '@/components/YeTable'
import Logo from '@/components/Logo'
import Card from '@/components/Card'
import Img from '@/components/Img'
import Experience from '@/components/Experience'
import image from '@/assets/images/oli.jpg'

export default {
  name: 'Homepage',
  components: { Header, Section, Img, Card, Experience, Banner, Logo, ProductDesc, YeDropdown, YeTable },
  props: [],
  data () {
    return {
      image: image,
      height: (window.innerHeight - 1) + 'px',
      // height: '500px',
      titleMargin: { marginTop: 150 + 'px' },
      menuItems:
      [
        {
          title: 'Go to google',
          type: 'href',
          link: 'https://google.com'
        },
        {
          title: 'Services',
          type: 'router-link',
          routerObj: {name: 'services', params: {}}
        }
      ],
      datasource:
      [
        { cell1: 'CELL1.1', cell2: 'CELL1.2', cell3: 'CELL1.3', cell4: 'asdf', cell5: 'asdfasd', cell6: 'asdfasd', cell7: 'asdfasd' },
        { cell1: 'CELL2.1', cell2: 'CELL2.2', cell3: 'CELL2.3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' },
        { cell1: 'CELL1.last', cell2: 'CELL2', cell3: 'CELL3', cell4: 'asdf', cell5: 'asdfasd' }
      ]
    }
  },

  /**************************
  -> LIFECYCLE METHODS
  **************************/

  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {
  },
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {}
}
</script>

<style lang="css">

  .hp-title {
    font-size: 30px;
    font-weight: normal;
    font-style: italic;
    color: var(--main-color);
  }

  .rounded-button {
    background-color: transparent;
    padding: 10px;
    margin-left: 5%;
    margin-right: 5%;
    width: 39.6%;
    font-size: 18px;
    border-radius: 50px;
    border: 2px solid white;
    color: white;
    transition: color 0.2s, background-color 0.2s;
    cursor: pointer;
  }

  .btn-container {
    width: 50%;
    min-width: 600px;
    margin: auto;
    margin-top: 100px;
  }

  .rounded-button:hover {
    background-color: white;
    color: var(--secondary-color);
  }

</style>

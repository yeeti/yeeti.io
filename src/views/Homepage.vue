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
      <ProductDesc />
      <DropdownMenu title="DROPDOWN" :menuItems="this.menuItems"/>
    </Section>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Section from '@/components/Section'
import ProductDesc from '@/components/ProductDesc'
import DropdownMenu from '@/components/DropdownMenu/DropdownMenu'
import Logo from '@/components/Logo'
import Card from '@/components/Card'
import Img from '@/components/Img'
import Experience from '@/components/Experience'
import image from '@/assets/images/oli.jpg'

export default {
  name: 'Homepage',
  components: { Header, Section, Img, Card, Experience, Banner, Logo, ProductDesc, DropdownMenu },
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
          title: 'Products',
          target: {
            type: 'href',
            link: 'https://google.com'
          }
        }
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

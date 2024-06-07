import React from 'react'
import Hero from './components/hero/Hero.jsx'
import ImageSec from './components/image/ImageSection.jsx'
import Works from './components/works/Works.jsx'
import Products from './components/products/Products.jsx'
import Vendor from './components/vendor/Vendor.jsx'
import Pricing from './components/pricing/Pricing.jsx'
import { Container } from '@mui/material'
import CustomSlider from './components/community/slider/Slider.jsx'

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>
        <Hero />
        <ImageSec />
        <Works />
        <Products />
        <Vendor />
        <CustomSlider />
        <Pricing />
      </Container>
    </>
  )
}

export default Home

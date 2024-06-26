import React from 'react'
import BannerSlider from './BannerSlider'
import bannersliders from './mock.json'
function Slider() {
  return (
    <BannerSlider  bannersliders={bannersliders}/>
  )
}

export default Slider
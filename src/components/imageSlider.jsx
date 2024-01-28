import React from 'react'
import 'react-slideshow-image/dist/index.css'
import {Fade, Zoom, Slide} from 'react-slideshow-image'
import sliderImage from '../data';

const imageSlider = () => {
  return (
    <div className='slide-container'>

        <sliderImage/>
    </div>
  )
}
export default imageSlider
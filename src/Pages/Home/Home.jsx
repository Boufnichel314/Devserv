import React from 'react'
import HomeSection from '../../Component/HomeSection/HomeSection'
import Slider from '../../Component/Slider/Slider'
import {homeObjOne} from './Data'

export default function Home() {
  return (
    <>
    <Slider/>
    <HomeSection {...homeObjOne} />
    </>
    
  )
}

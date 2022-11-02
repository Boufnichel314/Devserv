import React from 'react'
import HomeSection from '../../Component/HomeSection/HomeSection'
import HomeInterface from '../../Component/HomeInterface/HomeInterface'
import {homeObjOne} from './Data'

export default function Home() {
  return (
    <>
    <HomeInterface/>
    <HomeSection {...homeObjOne} />
    </>
    
  )
}

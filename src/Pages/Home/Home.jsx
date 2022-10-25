import React from 'react'
import HomeSection from '../../Component/HomeSection/HomeSection'
import {homeObjOne} from './Data'

export default function Home() {
  return (
    <HomeSection {...homeObjOne} />
  )
}

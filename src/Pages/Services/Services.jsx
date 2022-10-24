import React from 'react'
import { homeObjOne, homeObjThree } from './Data.js';
import { InfoSection, Pricing } from '../../Component';
export default function Services() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

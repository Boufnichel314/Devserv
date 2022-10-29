import React from "react"
import {EffectFade} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import image1 from "../../Images/Slide1.jpg";
import image2 from "../../Images/Slide2.jpg";
import image3 from "../../Images/Slide3.jpg";
import image4 from "../../Images/Slide4.jpg";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Slider.css"
import Slide from "./Slide";
export default function Slider() {
    const SlideData=[
    {
        id:1,
        image:image1,
        title:"Création de site boutique en ligne",
        description:"Notre agence met le design et l’ergonomie au service des objectifs à atteindre: charte graphique et ergonomie de votre site amélioreront sa clarté et son efficacité"
    },
    {
        id:2,
        image:image2,
        title:"Création de 2site boutique 2en ligne",
        description:"Notre agence met le design et l’ergonomie au service des objectifs à atteindre: charte graphique et ergonomie de votre site amélioreront sa clarté et son efficacité"
    },
    {
        id:3,
        image:image3,
        title:"Création de 3site boutique 3en ligne",
        description:"Notre agence met le design et l’ergonomie au service des objectifs à atteindre: charte graphique et ergonomie de votre site amélioreront sa clarté et son efficacité"
    },
    {
        id:4,
        image:image4,
        title:"Création de 4site boutique 4en ligne",
        description:"Notre agence met le design et l’ergonomie au service des objectifs à atteindre: charte graphique et ergonomie de votre site amélioreront sa clarté et son efficacité"
    },
]
  return (
    <>
     <Swiper  className="mySwiper" 
     modules={[Autoplay,EffectFade]}
     effect="fade"
     
     fadeEffect={{
      crossFade: true
    }}
     autoplay={{ delay: 4000 }}
     navigation>
        {SlideData.map((s)=><SwiperSlide><Slide key={s.id} image={s.image} description={s.description} title={s.title}></Slide></SwiperSlide>)}
        
      </Swiper>
    </>
  )
}
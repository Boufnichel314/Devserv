import React from 'react'

import {HomeSec,Button,Container, HomeRow, HomeColumn,WrapLay, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Video} from './HomeSection.elements'
import {Link} from 'react-router-dom'
import video from '../../Images/Dev.mp4'
import animation from '../../Images/Dev.gif'
import ReactPlayer from 'react-player'


const HomeSection=({ primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start})=>{
    return( <>
      <HomeSec lightBg={lightBg}>
          <Container >
              <HomeRow imgStart={imgStart}>
                  <HomeColumn>
                      <TextWrapper>
                      <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                      <Heading lightText={lightText}>{headline}</Heading>
                      <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                      <Link to='/'>
                      <Button big fontBig primary={primary}>
                          {buttonLabel}
                      </Button>
                      </Link>
                      </TextWrapper>
                  </HomeColumn>
                  <HomeColumn>
                  <ImgWrapper start={start}>
{/*                       
                      <ReactPlayer 
                        url={video}
                        playing
                        muted
                        
                        loop
                       /> */}
                       <img src={animation} alt="loading" />
                  </ImgWrapper>
                  </HomeColumn>
              </HomeRow>
          </Container>
             <WrapLay>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,213.3C672,192,768,160,864,138.7C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </WrapLay>
      </HomeSec>
      
  </>)
  }
  export default HomeSection;
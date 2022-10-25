import React from 'react'

import {HomeSec,Button,Container, HomeRow, HomeColumn,WrapLay, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Video} from './HomeSection.elements'
import {Link} from 'react-router-dom'
import video from '../../Images/Dev.mp4'
import ReactPlayer from 'react-player'
const url='../../Images/intro.mp4';
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
                      
                      <ReactPlayer 
                        url={video}
                        playing
                        muted
                        
                        loop
                       />
                  </ImgWrapper>
                  </HomeColumn>
              </HomeRow>
          </Container>
             <WrapLay>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="0.8" d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,96C672,75,768,53,864,53.3C960,53,1056,75,1152,112C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </WrapLay>
      </HomeSec>
      
  </>)
  }
  export default HomeSection;
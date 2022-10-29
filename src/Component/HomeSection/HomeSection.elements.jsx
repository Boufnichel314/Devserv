import React from "react";
import styled from "styled-components";


export const HomeSec =styled.div`
    color:#fff;
    
    position:relative;
    `
export const WrapLay =styled.div`
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    `
    export const HomeRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
  `;
  
  export const HomeColumn = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
    @media (min-width: 480px) and (max-width: 1200px) {
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      justify-content: center;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      max-width: 100%;
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `;
  
  export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    @media (min-width: 480px) and (max-width: 1200px) {
      padding-bottom: 65px;
    }
    @media (min-width: 320px) and (max-width: 480px) {
      padding-bottom: 65px;  
    }
  `;
  
  export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    
    justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  `;
  
  export const TopLine = styled.div`
    color: ${({ lightTopLine }) => (lightTopLine ? '#a9b3c1' : '#4B59F7')};
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
  `;
  export const Video =styled.video`
  height:40vw;
  width:40vw;`
  
  export const Container = styled.div`
  position:absolute;
 
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding:20px 20px 20px 150px;
  @media screen and (max-width: 991px) {
   padding:20px 30px;
  }
`;
  
  export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')};
  `;
  
  export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
  `;
  export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? 'black' : '#ffd700')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#ffd700' : 'black')};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
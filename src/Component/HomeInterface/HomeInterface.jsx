import React from 'react'
import './HomeInterface.css';

import {motion} from 'framer-motion';
import Typewriter from 'typewriter-effect'
import { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
function HomeInterface() {
  const [serv,SetServ]=useState(0);
  const Service=["Creation site web","Creation Application mobile","Marketing Digital","Design & Publicité"];
  
  return (
    <>
        <div className='home'>
          <motion.div
          initial={{scale:1}}
          whileHover={{scale:1.2,rotate:360}}
          whileFocus={{backgroundColor:"#dfc482"}}
          className="Dev-Card"
          >
             
          </motion.div>
          <motion.h1 
          initial={{opacity:0,y:150}}
          animate={{opacity:1,y:0}}
          transition={{type:'spring',duration:2,stiffness:50}}
          ><span>DEV</span>SERV</motion.h1>
          <Typewriter
          options={{
            strings: ['Developpement Web', 'Developpement Mobile','Design & Publicité','Référencement Site Web'],
            autoStart: true,
            loop: true,
          }}
          
        />
        <motion.div
        style={{zIndex:2}}
        initial={{y:0,scale:1}}
        animate={{y:10,scale:1.1}}
        transition={{type:'spring',stiffness:50,repeat:Infinity}}>

        
          <KeyboardDoubleArrowDownIcon style = {{fill:"#ffffff",fontSize:"3rem",marginTop:"100px",zIndex:2}}/>
        </motion.div>
        
        </div>
          
        
    </>
  );
}

export default HomeInterface;

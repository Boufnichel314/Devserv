import React from 'react'
import './Header.css'
import logo from '../../Images/DevServ.png'
export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

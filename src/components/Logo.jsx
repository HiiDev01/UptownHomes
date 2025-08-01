import React from 'react'
import { BiHome } from "react-icons/bi";
import '../components/Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
      <a href="/">
        <BiHome size={22} className='logoIcon'/>
        <h1>UptownproHomes</h1>
      </a>
    </div>
  )
}

export default Logo

import React from 'react'
import Logo from './Logo'
import '../components/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <Logo/>
      <p>© 2025 UptownProHomes. All rights reserved.</p>
      <div>
        <a href="/" className='ruleLink'>Privacy Policy</a>
        <a href="/" className='ruleLink'>Terms of Service</a>
      </div>
    </div>
  )
}

export default Footer

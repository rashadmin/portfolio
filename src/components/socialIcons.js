import React from 'react'
import {FaGithub,FaWhatsapp,FaLinkedin} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
function SocialIcons({className}) {
  return (
    <div className={className}>
              <FaGithub className='social github'/>
              <FaLinkedin className='social linkedin'/>
              <FaXTwitter className='social twitter'/>
              <FaWhatsapp className='social whatsapp'/>
    </div>
  )
}

export default SocialIcons
import React from 'react'
// import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {FaGithub,FaWhatsapp,FaLinkedin} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
function SocialIcons({className}) {
  return (
    <div className={className}>
              
             <a href="www.google.com" target='_blank'> <FaGithub className='social github'></FaGithub></a>
            <a href="www.google.com" target='_blank'> <FaLinkedin className='social linkedin'></FaLinkedin></a>
            <a href="www.google.com" target='_blank'>  <FaXTwitter className='social twitter'></FaXTwitter></a>
            <a href="www.google.com" target='_blank'>  <FaWhatsapp className='social whatsapp'></FaWhatsapp></a>
    </div>
  )
}

export default SocialIcons
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import {FaGithub,FaWhatsapp,FaLinkedin} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
function SocialIcons({className}) {
  return (
    <div className={className}> 
            <Nav.Link className='social github' href="https://github.com/rashadmin" target='_blank'><FaGithub/></Nav.Link>
            <Nav.Link className='social linkedin' href="https://www.linkedin.com/in/pytech" target='_blank'><FaLinkedin/></Nav.Link>
            <Nav.Link className='social twitter' href="https://www.google.com" target='_blank'><FaXTwitter/></Nav.Link>
            <Nav.Link className='social whatsapp' href="https://wa.link/auwl1b" target='_blank'><FaWhatsapp/></Nav.Link>
    </div>
  )
}

export default SocialIcons  
import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { FaArrowAltCircleDown } from 'react-icons/fa';
function CvButton({className}) {
  return (
    <Nav.Link href="https://www.google.com" target='_blank'>
    <Button variant="info" className={`${className}-name`}><span className={`${className}-text`}> Download CV </span><FaArrowAltCircleDown className={`${className}-icon`} /></Button>
    </Nav.Link>
  )
}

export default CvButton
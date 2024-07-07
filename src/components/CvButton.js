import React from 'react'
import Button from 'react-bootstrap/Button';
import { FaArrowAltCircleDown } from 'react-icons/fa';
function CvButton({className}) {
  return (
    <Button variant="info" className={`${className}-name`}><span className={`${className}-text`}> Download CV </span><FaArrowAltCircleDown className={`${className}-icon`} /></Button>
  )
}

export default CvButton
import React from 'react'
import { FaCertificate } from 'react-icons/fa'
import Stack from 'react-bootstrap/Stack'
import Certification from './Certification'
function CertificationSection() {
  return (
    <Stack className='WorkExperiencesection'>
        <h2><FaCertificate/> Certification</h2>
        <Certification/>
    </Stack>  
  )
}

export default CertificationSection
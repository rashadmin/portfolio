import React from 'react'
import Education from './Education'
import { FaGraduationCap } from 'react-icons/fa';
import Stack from 'react-bootstrap/Stack';
function EducationSection() {
  return (
    <Stack className='Educationsection'>
        <h2><FaGraduationCap/> Education</h2>
        <Education university="University of Ilorin" degree="B.Eng. Electrical and Electronic Engineering" date="oct 2019 - present" location="Ilorin, Kwara State" cgpa="5.0/5.0"/>
    </Stack>
  )
}

export default EducationSection
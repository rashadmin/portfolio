import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'
import Stack from 'react-bootstrap/Stack' 
import WorkExperience from './WorkExperience'
function WorkExperienceSection() {
  return (
    <Stack className='WorkExperiencesection'>
        <h2><FaBriefcase/> Work Experience</h2>
        <WorkExperience/>
    </Stack>
  )
}

export default WorkExperienceSection
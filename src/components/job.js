import React from 'react'
import Col from 'react-bootstrap/Col'
import { FaCode } from 'react-icons/fa'
import Stack from 'react-bootstrap/Stack'
import Collapse  from 'react-bootstrap/Collapse'
function Job({open, title,description,skills,children}) {
  return (
    <Col className="job-item">
            <Stack className='job' direction='horizontal'>
            {children}
            <div className='job-details'>
              <small className='job-name'>{title}</small>
              <p className='job-description'>{description}</p>  
              <Collapse in={open}>
                <div className="hidden-text">
                    {skills.map(element => <div className='skill'>{element}</div>)}
                </div>
              </Collapse>
              </div>
            
            </Stack>

            </Col>
  )
}

export default Job
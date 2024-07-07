import React from 'react'
import Job from '../components/job'
import Row from 'react-bootstrap/Row'
function IndSkills({open,jobrow}) {
    return (
    <Row>
    {jobrow.map((element)=> <Job open={open} title={element["title"]} description={element['description']} skills={element['skills']}>{element["icon"]}</Job>)}
   </Row>
  )
}

export default IndSkills
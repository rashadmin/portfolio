import React from 'react'
import Container from 'react-bootstrap/Container'

function Education({university,degree,date,location,cgpa}) {
  return (
    <Container className='Education'>
        <div className='firstline'>
            <h4 title={degree}>{degree}</h4>
            <small>{date}</small>
        </div>
        <p>{university}</p>
        <p>{location}</p>
        <p>CGPA : {cgpa}</p>
    </Container>
  )
}

export default Education
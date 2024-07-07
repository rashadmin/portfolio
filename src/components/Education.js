import React from 'react'
import Container from 'react-bootstrap/Container'

function Education({university,degree,date,location,cgpa}) {
  return (
    <Container className='Education'>
        <div className='firstline'>
            <h4>{degree}</h4>
            <small>{date}</small>
        </div>
        <h5>{university}</h5>
        <p>{location}</p>
        <p>CGPA : {cgpa}</p>
    </Container>
  )
}

export default Education
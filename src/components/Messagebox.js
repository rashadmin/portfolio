import React from 'react'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Messagebox() {
  return (
    <Container className='messageBox'>

        <p>I’m always open to discussing development projects or exploring potential collaborations.</p>
        <Container>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
            <Form.Control type="name" placeholder="John Doe" />
        </FloatingLabel>
        </Container>
        <Container>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
            </Container>
            <Container>
        <FloatingLabel controlId="floatingTextarea2" label="Leave a message here">
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }}/>
        </FloatingLabel>            
            </Container>

        <Button className="submit-form" type="submit">Submit form</Button>

    </Container>
  )
}

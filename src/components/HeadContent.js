import React from 'react'
import Container from 'react-bootstrap/Container';
import Stack  from 'react-bootstrap/Stack';
function HeadContent({home,children}) {
  return (

    <Container fluid className={`${home ? 'homeContent':'headContent'} ${!home && 'bg-w'}`}>
      <Stack direction='horizontal' className='headstack'>
       <span className='left-line'></span>
       <h1 className='headTitle'>{children}</h1>
       <span className='right-line'></span>

      </Stack>
    </Container>

  )
}

export default HeadContent
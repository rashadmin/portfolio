import React from 'react'
import Container from 'react-bootstrap/Container';

function PageContent({home,children}) {
  return (

    <Container className={`${home ? 'homeContent':'PageContent'}`}>
      <div className='content-page'>
        {children}
      </div>
    </Container>

  )
}

export default PageContent
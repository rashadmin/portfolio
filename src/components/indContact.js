import React from 'react'
import Stack from 'react-bootstrap/Stack';
function IndContact({icon,type,value}) {
  return (
    <Stack direction='horizontal' className='contact'>
    {icon}
    <div className='contact-details'>
    <small className='contact-name'>{type}</small>
    <p className='contact-value'>{value}</p>  
    </div>
    </Stack>
  )
}

export default IndContact

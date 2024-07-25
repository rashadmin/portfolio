import React from 'react';
import Image from 'react-bootstrap/Image';


function ProfilePic({width,height,className,...props}) {
  return (
    <Image src="https://avatars.githubusercontent.com/u/69635878?v=4"
              width={width}
              height={height}
              className={className}
              {...props} />
  )
}

export default ProfilePic
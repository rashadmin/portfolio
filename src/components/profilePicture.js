import React from 'react';
import Image from 'react-bootstrap/Image';


function ProfilePic({width,height,className,...props}) {
  return (
    <Image src={require("../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg")}
              width={width}
              height={height}
              className={className}
              {...props} />
  )
}

export default ProfilePic
import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import ProfilePic from './profilePicture';
import CvButton from './CvButton';
import Jobtitle from './Jobtitle';
import Contact from './Contact';
import SocialIcons from './socialIcons';
// import { FaLocationDot } from 'react-icons/fa6';
function AboutSideBar() {
  return (
        <Navbar sticky="top" className='AboutSideBar flex-column  bg-w'> 
        <div className='AboutSideBar-item'>
          <ProfilePic className='aboutprofileImg' rounded />
      <h1 className='aboutsidebarname'>Ameen Abdulrasheed</h1>
            <Jobtitle className='about-jobTitle'/>
            <SocialIcons className='about-social-icons'/>
      <div className='contact-div'><Contact/></div>
      <CvButton className='about-cv'/>
     </div>
    </Navbar>
    
  )
}

export default AboutSideBar
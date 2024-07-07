import React from 'react'
import Body from '../components/Body'
import Jobtitle from '../components/Jobtitle';
import PageContent from '../components/PageContent'
import ProfilePic from '../components/profilePicture';
import CvButton from '../components/CvButton';
import SocialIcons from '../components/socialIcons';
function Home() {
  return (
    <Body navsidebarHor>
       <PageContent home>
            <>
            <ProfilePic width="250" height="250" className='profileImg' roundedCircle />
            <h1  className='name'> Ameen Abdulrasheed</h1>
            <Jobtitle className='jobTitle'/>
            <SocialIcons className='social-icons'/>
            <CvButton className='cv'/>
            </>
        </PageContent>
    </Body>
  )
}

export default Home 
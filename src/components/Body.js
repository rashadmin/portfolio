import React from 'react'
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import AboutSideBar from './AboutSideBar';
import NavSideBar from './NavSideBar';
import Navbar from "react-bootstrap/Navbar";
import Header from './Header';
import HeadContent from './HeadContent';

function Body({aboutsidebar,children,navsidebar,navsidebarHor}) {
  return (
    <>
     {navsidebarHor ? <Header navsidebarHor/> : <Header/>}
    <Container fluid> 
      <Stack direction="horizontal" gap={3} className='ResponsiveStack'>
        {aboutsidebar && <AboutSideBar/>}
        <Stack className='content'>
        {children}
        </Stack>
      </Stack>
    </Container>
    </>
  )

}

export default Body

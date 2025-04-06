import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import NavSideBar from './NavSideBar';
import { Link } from "react-router-dom";
function Header({navsidebarHor}) {
  return (
    <Navbar expand="lg" className='Header'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={require("../assets/ChatGPT_Image_Apr_6__2025__06_46_33_AM-removebg.png")}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              width="250"
              height="200"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          {navsidebarHor && <NavSideBar horizontal/>}
        </Container>
      </Navbar>
  )
}

export default Header

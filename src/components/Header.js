import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import NavSideBar from './NavSideBar';
import { Link } from "react-router-dom";
function Header({navsidebarHor}) {
  return (
    <Navbar className='Header'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={require("../assets/Black and White Simple Aesthetic Monogram Initials Logo (3) (1).png")}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              width="150"
              height="150"
            />
          </Navbar.Brand>
          {navsidebarHor && <NavSideBar horizontal/>}
        </Container>
      </Navbar>
  )
}

export default Header
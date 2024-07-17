import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { FaHome,FaUser,FaFileAlt,FaBriefcase,FaAddressBook } from "react-icons/fa";


export default function NavSidebar() {
  return (
    <Navbar.Collapse sticky="top" className='NavSideBarHor flex-row'>
      <Nav>

      <Nav.Item>
        <Nav.Link as = {NavLink} to="/" end><FaHome className="nav-icon" />  <span className="nav-text">Home</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/about"><FaUser className="nav-icon" />  <span className="nav-text">About</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/resume" end><FaFileAlt className="nav-icon" />  <span className="nav-text">Resume</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/portfolio"><FaBriefcase className="nav-icon" />  <span className="nav-text">Portfolio</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/Contact"><FaAddressBook className="nav-icon" /> <span className="nav-text">Contact</span></Nav.Link>
      </Nav.Item>
      </Nav>
      </Navbar.Collapse>
  );
}

import React from 'react'
import Stack  from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { FaCode,FaDatabase,FaChartLine,FaServer,FaSearch,FaLockOpen,FaLock } from 'react-icons/fa'
// export default function PortfolioButton() {
//    const skills = [{"title":"Frontend Developer","icon":<FaCode className='job-icon'></FaCode> ,"description":"Designs and implements user interfaces for web and mobile applications.","skills":['HTML','CSS','Javascript','ReactJS']},
//     {"title":"Backend Developer","icon":<FaServer className='job-icon'/>,"description":"Manages server-side logic, databases, and application functionality integration.","skills":['HTML','CSS','Javascript','ReactJS']},
//     {"title":"Data Engineer","icon":<FaDatabase className='job-icon'/>,"description":"Develops and maintains systems for collecting, storing, and processing data.","skills":['HTML','CSS','Javascript','ReactJS']},
//     {"title":"Data Scientist","icon":<FaChartLine className='job-icon'/>,"description":"Analyzes complex data sets to derive actionable business insights.","skills":['HTML','CSS','Javascript','ReactJS']},
//     {"title":"Researcher","icon":<FaSearch className='job-icon'/>,"description":"Conducts experiments and studies to generate new knowledge and discoveries.","skills":['HTML','CSS','Javascript','ReactJS']}]
//     const [open, setOpen] = useState(false);
//   return (
//     <Stack direction='horizontal' className='PortfolioButton' gap={3}>
//        <Button onClick={() => setOpen(!open)} aria-expanded={open}>All </Button>
//        <Button onClick={() => setOpen(!open)} aria-expanded={open}> FrontEnd</Button>
//        <Button onClick={() => setOpen(!open)} aria-expanded={open}>Backend </Button>
//        <Button onClick={() => setOpen(!open)} aria-expanded={open}> Data Science</Button>
//     </Stack>
//   )
// }

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { FaHome,FaUser,FaFileAlt,FaBriefcase,FaAddressBook } from "react-icons/fa";

export default function PortfolioButton() {
  return (
      <div className='PortfolioButton'>
    <Navbar >
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/portfolio" end>  <span className="portfolio-text">All</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/portfolio/datascience" end>  <span className="portfolio-text">Data Science</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/portfolio/dataengineering"> <span className="portfolio-text">Data Engineering</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/portfolio/frontend" end> <span className="portfolio-text">Front End</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/portfolio/backend">  <span className="portfolio-text">Back End</span></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as = {NavLink} to="/portfolio/research"> <span className="portfolio-text">Research</span></Nav.Link>
      </Nav.Item>
    </Navbar>
      </div>
  );
}

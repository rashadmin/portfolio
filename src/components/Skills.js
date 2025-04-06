import React from 'react'
import IndSkills from './IndSkills';
import { FaCode,FaDatabase,FaChartLine,FaServer,FaSearch,FaLockOpen,FaLock } from 'react-icons/fa'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Skills() {
    const skills = [{"title":"Frontend Developer","icon":<FaCode className='job-icon'></FaCode> ,"description":"Designs and implements user interfaces for web and mobile applications.","skills":['HTML','CSS','Javascript','ReactJS']},
                    {"title":"Backend Developer","icon":<FaServer className='job-icon'/>,"description":"Manages server-side logic, databases, and application functionality integration.","skills":['HTML','CSS','Javascript','ReactJS']},
                    {"title":"Data Engineer","icon":<FaDatabase className='job-icon'/>,"description":"Develops and maintains systems for collecting, storing, and processing data.","skills":['HTML','CSS','Javascript','ReactJS']},
                    {"title":"Data Scientist","icon":<FaChartLine className='job-icon'/>,"description":"Analyzes complex data sets to derive actionable business insights.","skills":['HTML','CSS','Javascript','ReactJS']},
                    {"title":"Researcher","icon":<FaSearch className='job-icon'/>,"description":"Conducts experiments and studies to generate new knowledge and discoveries.","skills":['HTML','CSS','Javascript','ReactJS']}]

    const newSkills = [];
    const [open, setOpen] = useState(false);
    while(skills.length) newSkills.push(skills.splice(0,1));
    return (
        <>
    <div className='button-div'>
        <Button onClick={() => setOpen(!open)} className='collapse-button' aria-expanded={open}>{!open ? 'Show':'Hide'} tools and technology {open ? <FaLockOpen/>:<FaLock/>}</Button>
    </div>
    {newSkills.map((element) => <IndSkills open={open} jobrow={element} />)}
        </>
  )
}

export default Skills

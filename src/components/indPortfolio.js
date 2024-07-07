import React from 'react'
import Image from 'react-bootstrap/Image'
export default function IndPortfolio({projectTitle,tag}) {
  return (
    <div className='IndPortfolio'>
            <Image src={require("../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg")}
              width="200"
              height="200"
              className="indportfoliopic"
              rounded/>
        <p className='portfolioitemtitle'>{projectTitle}</p>
        <div className='Skills'>
          {tag.map((element) => <div className='skill'>{element}</div>)}
        </div>
    </div>
  )
}

const item = {projectTitle:"First Project",tag:['Frontend','Backend','DataScience','Research','DataEngineering']}
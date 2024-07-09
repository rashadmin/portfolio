import React from 'react'
import MyVerticallyCenteredModal from './Modal'
import { useState } from 'react';
import Image from 'react-bootstrap/Image'
export default function IndPortfolio({projectTitle,tag}) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <div className='IndPortfolio'  onClick={() => setModalShow(true)}>
              <Image src={require("../assets/background-11.jpg")}
                width="200"
                height="200"
                className="indportfoliopic"
                rounded/>
          <p className='portfolioitemtitle'>{projectTitle}</p>
          <div className='Skills'>
            {tag.map((element) => <div className='skill'>{element}</div>)}
          </div>
      </div>
       <MyVerticallyCenteredModal
       show={modalShow}
       onHide={() => setModalShow(false)}
       data={{projectTitle,tag}}
     />

    </div>
  )
}





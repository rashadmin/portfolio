import React from 'react'
import IndContact from './indContact'
import {FaPhone,FaEnvelope} from "react-icons/fa"
import { FaLocationDot } from 'react-icons/fa6'
function Contact() {
  const contact_details = {"Phone Number":[<FaPhone className='contact-icon'/>,"+(234) 906 134 6884"],
                           "Email Address": [<FaEnvelope className='contact-icon'/>,"abdul.a.rasheed2022@gmail.com"],
                           "Location":[<FaLocationDot className='contact-icon'/>,"Lagos, Nigeria"]}
  let formatted_contact_details = []
  for (const contact in contact_details) {
    formatted_contact_details.push(<IndContact icon = {contact_details[contact][0]} type={contact} value={contact_details[contact][1]}/>)
    }
    return ( 
        formatted_contact_details
    )

}

export default Contact

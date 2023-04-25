//import
import React from 'react'
import { BsGithub,BsLinkedin } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";


import "./Footer.css"
//Footer component
const Footer = () => {
  //social media icons added from react bootstrap
  return (
    <div className='footer'>
    <div className="socials d-flex justify-content-center gap-3">
        <a href="https://github.com"><BsGithub className='display-3  bsgithub'/></a>
        <a href="mailto:a@a"><FaEnvelope className='display-3 bsenvelop'/></a>
        <a href="https://linkedin.com"><BsLinkedin className='display-3 bslinkedin'/></a>
    </div>
    </div>
  )
}

//export page
export default Footer
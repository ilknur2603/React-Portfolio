import React from 'react'
import resume from "../../assets/Resume.pdf"
import { BsDownload } from "react-icons/bs";

import "./Resume.css"

//Line 15,<a> element to download the resume PDF file.
//
//
const Resume = () => {
  return (
    <div className='bkgresume'>
       
    <div>
    <button className="button1"> <a href={resume} download="Resume"><BsDownload/> DownLoad Resume</a> </button>
    </div>
    
        <div className='style'>
            <h2 className="skill"> MY SKILLS</h2>
            <ol>
                <li>FRONTEND
                <ul>
                    <li>Html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Jquery</li>

                </ul>
                </li>
                <br /><hr />
                <li>BACKEND
                <ul>
                    <li>Html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Node js</li>

                </ul>
                </li>
                <br /><hr />
                <li>LEARNING
                <ul>
                    <li>React Native</li>
                    <li>Tailwind CSS</li>
                    <li>SASS</li>
                    <li>Typescript</li>
                    <li>AWS</li>

                </ul>
                </li>
            </ol>
            
        </div>
    </div>
  )
}

export default Resume
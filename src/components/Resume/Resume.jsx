import React from 'react'
import resume from "../../assets/Resume.pdf"
import { BsDownload } from "react-icons/bs";

import "./Resume.css"
const Resume = () => {
  return (
    <div>
    <div>
    <button> <a href={resume} download="Resume"><BsDownload/> DownLoad Resume</a> </button>
    </div>
        
        <div>
            <h2>My Skill</h2>
            <ol>
                <li>FrontEnd
                <ul>
                    <li>Html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>React</li>
                    <li>Bootstrap</li>

                </ul>
                </li>
                <br /><hr />
                <li>BackEnd
                <ul>
                    <li>Html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>React</li>
                    <li>Bootstrap</li>

                </ul>
                </li>
                <br /><hr />
                <li>Soft Skill
                <ul>
                    <li>Html</li>
                    <li>css</li>
                    <li>js</li>
                    <li>React</li>
                    <li>Bootstrap</li>

                </ul>
                </li>
            </ol>
            
        </div>
    </div>
  )
}

export default Resume
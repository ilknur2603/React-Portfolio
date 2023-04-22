import React from 'react'
import profilePicture from "../../assets/profilepic.JPG"

import "./about.css" 

const pastel= new URL("../../assets/background1.jpg", import.meta.url)


const About = () => {
  return (
    <div className="main-container">
        <div>
            <img className="about-img" src={profilePicture} alt="" />
        </div>
           <div  className="pastel" >
            <img   src={pastel} />
           </div>
        <div className='about'>
            <h3 className='about-title'>Hi, I am Ilknur Dayanc Bloomer</h3>
            <p>My name is Ilknur. I started to program about 2 years ago by reading, watching videos and trial and
                  error. I'm currently studying full stack development through RICE UNIVERSITY's Boot Camp. Though I have
                  made small programs for family and friends in the past, I am looking to progess into a career in
                  software development. In my free time, I enjoy spending time outside, hiking, paddleboarding, riding a bcycle</p>
        </div>

    </div>
  )
}

export default About
import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div>
        <div>
            <img className="about-img"src="profile-pic.JPG" alt="" />
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
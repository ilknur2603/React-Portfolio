import React from 'react'
import tour from "../../assets/tour.png"
import "./projects.css"



const Projects = () => {
  return (
    <div>
        <h2>MY PROJECT</h2>
        <div className='d-flex gap-4 flex-wrap'>
            {data.map((project)=>{
                const {id, image, title, github, live}  = project
                return(
                   <article id="article" key={id}>
                    <div className="img">
                        <img src={image} alt={title} width="300px"/>
                    </div>
                    <h3>{title}</h3>
                    <div className='d-flex gap-4 justify-content-center'>
                        <a href={github} className="btn btn-primary " target="_blank">Git Hub</a>

                        <a href={live} className="btn btn-primary" target="_blank">Live</a>
                    </div>
                   </article> 
                )
            })}
        </div>

    </div>
  )
}

export default Projects
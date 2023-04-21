import React from 'react'
import repos from "../../assets/repos.png"
import "./projects.css"


//BURAYI DUZENLE IMPORT YAPTIGIMIZ tour resimlerini ve import kismini sil!!!!!!!!!!!!
const data=[
    {id:1,
    image:repos,
    title:"repos-picture",
    github:"https://github.com/ilknur2603/react-bucket-list" ,
 =>   live:"ironstone-react-tour-place.vercel.app/"  },
    {id:2,
    image:repos,
    title:"repos-picture",
    github:"https://github.com/ilknur2603/19-text-Editor" ,
    live:"ironstone-react-tour-place.vercel.app/"  },
    {id:3,
    image:tour,
    title:"repos-picture",
    github:"https://github.com/ilknur2603/18-Social-Network-API" ,
    live:"ironstone-react-tour-place.vercel.app/"  },
    {id:4,
    image:tour,
    title:"repos-picture",
    github:"https://github.com/ilknur2603/tech-blog" ,
    live:"ironstone-react-tour-place.vercel.app/"  },
    {id:5,
    image:repos,
    title:"repos-picture",
    github:"https://github.com/IRONSTONE-A/TOUR-PLACE" ,
    live:"ironstone-react-tour-place.vercel.app/"  },
    {id:6,
    image:repos,
    title:"repos-picture",
    github:"https://github.com/IRONSTONE-A/TOUR-PLACE" ,
    live:"ironstone-react-tour-place.vercel.app/"  },
    
]

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
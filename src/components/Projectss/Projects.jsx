import React from 'react'
import bucketList from "../../assets/bucketList.png"
import employeeTracker from "../../assets/employeeTracker.png"
import techBlog from "../../assets/tech-blog.png"
import eCommerce from "../../assets/ecommerce.png"
import socialNetwork from "../../assets/socialDB.png"
import jate from "../../assets/jate.png"
import "./projects.css"


//BURAYI DUZENLE IMPORT YAPTIGIMIZ tour resimlerini ve import kismini sil!!!!!!!!!!!!
const data=[
    {id:1,
    image:bucketList,
    title:"Bucket List",
    github:"https://github.com/ilknur2603/react-bucket-list" ,
    live:"https://vercel.com/new/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=react-bucket-list-eyxzepekj-ilknur2603.vercel.app&projectName=react-bucket-list&s=https%3A%2F%2Fgithub.com%2Filknur2603%2Freact-bucket-list&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1"  },
    {id:2,
    image:jate,
    title:"Text Editor",
    github:"https://github.com/ilknur2603/19-text-Editor" ,
    live:""  },
    {id:3,
    image:socialNetwork,
    title:"Social Network",
    github:"https://github.com/ilknur2603/18-Social-Network-API" ,
    live:"ihttps://vercel.com/new/ilknur2603/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=18-social-network-g8g2ely4p-ilknur2603.vercel.app&projectName=18-social-network-api&s=https%3A%2F%2Fgithub.com%2Filknur2603%2F18-Social-Network-API&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1ronstone-react-tour-place.vercel.app/"  },
    {id:4,
    image:techBlog,
    title:"Tech Blog",
    github:"https://github.com/ilknur2603/tech-blog" ,
    live:"https://vercel.com/new/ilknur2603/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=tech-blog-8j5jh2tl2-ilknur2603.vercel.app&projectName=tech-blog&s=https%3A%2F%2Fgithub.com%2Filknur2603%2Ftech-blog&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1"  },
    {id:5,
    image:eCommerce,
    title:"E-commerce",
    github:"https://github.com/ilknur2603/e-commerce-3-6-23" ,
    //error
    live:"https://e-commerce-3-6-23.vercel.app//"  },
    {id:6,
    image:employeeTracker,
    title:"Employee Tracker",
    github:"https://github.com/ilknur2603/Employee-tracker" ,
    //error
    live:"https://vercel.com/new/ilknur2603/success?developer-id=&external-id=&redirect-url=&branch=main&deploymentUrl=employee-tracker-6dww1ifg1-ilknur2603.vercel.app&projectName=employee-tracker&s=https%3A%2F%2Fgithub.com%2Filknur2603%2FEmployee-tracker&gitOrgLimit=&hasTrialAvailable=1&totalProjects=1"  },
    
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
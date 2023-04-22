import React from 'react'
import "./Navigation.css"
const Navigation = ({currentPage,setCurrentPage}) => {

   const navItems = ["About", "Projects", "Contact", "Resume"] 
  return (
    <ul className="nav justify-content-between gap-3" >
    {navItems.map( item => (
        <li className={currentPage === item ? "nav-item navActive" : "nav-item"} key={item}>  <span className='nav-link' href={"#"+ item.toLowerCase()} onClick={()=> setCurrentPage(item) }>{item}</span>    </li>


    ) )}
        
    </ul>
  )
}

export default Navigation
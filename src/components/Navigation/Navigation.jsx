import React from 'react'
//import css 
import "./Navigation.css"

//Navigation component
//Line 10, Navigation component is taking 2 props currentPage,setCurrentPage(with setCurrentpage function used to change the currently active page)
//Line 12, navItems constant is an array containing the names of the navigation items: "About", "Projects", "Contact", and "Resume".
//Line 17, navItems array, a list item (<li>) is created. If the current item matches the currentPage, 
//the className "nav-item navActive" is applied; otherwise, it gets the className "nav-item".
//Line 17, <span> element with the className 'nav-link'. It has an onClick event handler that sets the currentPage to the clicked item when the user clicks on it.
const Navigation = ({currentPage,setCurrentPage}) => {

   const navItems = ["About", "Projects", "Contact", "Resume"] 
  return (<button className='btn'>
    <ul className="nav justify-content-between gap-3" >
  
    {navItems.map( item => (
        <li className={currentPage === item ? "nav-item navActive" : "nav-item"} key={item}>  <span className='nav-link' href={"#"+ item.toLowerCase()} onClick={()=> setCurrentPage(item) }>{item}</span>    </li>


    ) )}
        
    </ul>
    </button>
  )
}

export default Navigation
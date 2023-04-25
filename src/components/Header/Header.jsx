import React from 'react'
import Navigation from '../Navigation/Navigation'

import "./header.css"

//Header component
//create currentPage and SetCurrentPage props ( represents the name of the currently active page)
//line 14 creating <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />: A section containing the Navigation component. 
//We pass the currentPage and setCurrentPage props to this component
// so that we can show which page is currently active in the menu and change the page when the user clicks on a different page.
const Header = ({currentPage,setCurrentPage}) => {
  return (
    <div className="big-container">
    <div className="d-flex justify-content-between">
        <h3 className='profile'>MY PROFILE</h3>
        <Navigation currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
    </div>
    </div>
  )
}

//export page(we can use this file with an other files)
export default Header
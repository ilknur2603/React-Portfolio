import React from 'react'
import Navigation from '../Navigation/Navigation'

import "./header.css"
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

export default Header
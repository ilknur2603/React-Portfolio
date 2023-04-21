import React from 'react'
import Navigation from '../Navigation/Navigation'

const Header = ({currentPage,setCurrentPage}) => {
  return (
    <div className="d-flex justify-content-between">
        <h3>MY PROFILE</h3>
        <Navigation currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default Header
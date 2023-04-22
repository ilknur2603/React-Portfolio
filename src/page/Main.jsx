import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Projects from '../components/Projectss/Projects'
import Contact from '../components/Contact/Contact'
import Resume from '../components/Resume/Resume'

const Main = () => {
    const [currentPage, setCurrentPage] = useState("About")

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About/>
                break;
            case "Projects":
                return <Projects/>
                break;
            case "Contact":
                return <Contact/>
                break;
            case "Resume":
                return <Resume/>
                break;
        
            default:
                return <About/>
                break;
        }
    }

  return (
    <div>
        <Header currentPage = {currentPage} setCurrentPage={setCurrentPage}/>
        <main className='bkgpage'>
            {renderPage(currentPage)}
        </main>
        <Footer/>
    </div>
  )
}

export default Main
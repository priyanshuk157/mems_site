import React from 'react'
import "./researchtheme.css";
import Navbar from './navbar'
import Footer from "../components/footer";


const ResearchThemes = () => {
  return (

  <>
  <div>
    <Navbar/>
  </div>
 
  <div className="research-theme-main">
  <div className='themes-main-1'>
    <div className="themes-blocks">
        <div className='theme-heads'>Alloy design, development, and deformation</div>
        <div className="themes-button"><a href="researchcomponent1">view</a></div>
        
    </div>
   
    <div className="themes-blocks">
        <div className='theme-heads'>Surface engineering & Materials degradation</div>
        <div className="themes-button"><a href="researchcomponent2">view</a></div>
        
    </div>
    </div>
    <div className='themes-main-2'>
    <div className="themes-blocks">
        <div className='theme-heads'>Strategic Materials
</div>
        <div className="themes-button"><a href="researchcomponent6">view</a></div>
        
    </div>
    <div className='research-logo'>
    <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png" alt="ok" />
  </div>
   
    <div className="themes-blocks">
    <div className='theme-heads'>Electronics & Photonics</div>
        <div className="themes-button"><a href="researchcomponent3">view</a></div>
        
    </div>
    </div>
  
    <div className='themes-main-1'>
   
    <div className="themes-blocks">
        <div className='theme-heads'>Nano & Soft materials</div>
        <div className="themes-button"><a href="researchcomponent4">view</a></div>
        
    </div>
   
    <div className="themes-blocks">
        <div className='theme-heads'>Energy & Environment
</div>
        <div className="themes-button"><a href="researchcomponent5">view</a></div>
        
    </div>
       
    </div>
   
    </div>


  <div>
    <Footer/>
  </div>
  </>
  )
}

export default ResearchThemes

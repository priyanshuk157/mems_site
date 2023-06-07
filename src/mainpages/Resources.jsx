import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './resources.css'
import { useRef } from "react";


const Resources = () => {
  const resRef = useRef (); 

  const showContent =(index)=>{

    resRef.current.classList.toggle("active-resource-content2")
  }
  
 
  return (
    <>
   <div className='body'>
    <div>
      <Navbar/>
    </div>
    <div className="head">
     RESOURCES  
      </div>
      <div>
      <div className='resources-main'>
        <div>
        <div className='resources-content1' onClick={showContent(1)}>how to reach IIT indore</div>
        <div className=  "active-resource-content2 resource-content2 " ref={resRef }>jdaijajdajdaodio</div>
        </div>
       
       
       
       
          
</div>

      </div>
      
    <div>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default Resources

import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Academics = () => {
  return (
    <>
    <div className="body">
    <div>
      <Navbar/>
    </div>
    <div className="head">
     
      ACADEMICS
      
      </div>
      <div>
      <div className="hodsec container  ">
     
    
     
     <div className="hodtext">
       <div className="hodtext1">
         <div className="name">Dr. Ajay Kumar Kushwaha</div>
         <div className="post"> Associate Professor and HoD </div>
         <div className="people-contact">
           Ph: +91 731 660 3250
         </div>
         <div className="people-contact">  E-mail: akk@iiti.ac.in </div>

       </div>
       <div className="hodtext2">

  
<ul>
<h4>Research Areas</h4>
<li>Nanomaterials and Energy Devices Group
</li>
<li>Design and growth of nanomaterials/thin films
</li>
<li>Optical and transport properties of semiconductors
</li>
<li>2-D materials based electronic devices
</li>
<li>Energy efficient coatings
</li>
<li>Energy conversion devices: PEC water splitting, photovoltaic, piezoelectric and thermoelectric </li>
</ul>

</div>
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

export default Academics

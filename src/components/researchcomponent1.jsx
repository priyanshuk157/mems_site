import React from 'react'
import './research.css'
import Navbar from './navbar'
import Footer from "../components/footer";
import { FaCaretRight } from "react-icons/fa";
import { useState } from 'react';




const Researchcomponent1 = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <><div>
      <Navbar />
    </div>
    <div className="head">

        RESEARCH

      </div>
      <div className='research-main'>

        <div className='research-heads'>
          <div className=''><h2>Research Areas</h2></div>

          <div className='heads-1' onClick={() => toggleTab(1)}><i className={toggleState === 1 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Alloy Design</div>
          <div className='heads-1' onClick={() => toggleTab(2)}><i className={toggleState === 2 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Process-Structure-Property (P-S-P) correlations and Materials Modelling</div>
          <div className='heads-1' onClick={() => toggleTab(3)}><i className={toggleState === 3 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Thermodynamics & Phase transformation</div>
          <div className='heads-1' onClick={() => toggleTab(4)}><i className={toggleState === 4 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Indentation Mechanics</div>
          <div className='heads-1' onClick={() => toggleTab(5)}><i className={toggleState === 5 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Mechanics of Materials</div>
          <div className='heads-1' onClick={() => toggleTab(6)}><i className={toggleState === 6 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Crystallographic texture</div>
          <div className='heads-1' onClick={() => toggleTab(7)}><i className={toggleState === 7 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Integrated  Computational Materials Engineering (ICME)</div>
          <div className='heads-1' onClick={() => toggleTab(8)}><i className={toggleState === 8 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Materials Informatics (AI/ML)</div>
          <div className='heads-1' onClick={() => toggleTab(9)}><i className={toggleState === 9 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Extreme Materials</div>


        </div>
        <div className={toggleState === 1 ? " active-content1" : " research-content"}>
          <div className="research-content-head">content 1</div>
          - Materials:
Steels, Titanium alloys,
High entropy alloys,
Magnesium Alloys, magnetic materials and Composite materials
- Metal Processing: Casting, powder metallurgy, surface modification, joining, forming, additive manufacturing
- Structure: engineering of microstructure and surface properties
* Properties: mechanical, fatigue, creep, corrosion, wear, oxidation



        </div>
        <div className={toggleState === 2 ? " active-content1" : " research-content"}>
          <div className="research-content-head">content 2</div>
          - Batteries & Supercapacitors
• Green Hydrogen Production & Fuel Cells
- Solar Cells


        </div>
        <div className={toggleState === 3 ? " active-content1" : " research-content"}>
          <div className="research-content-head">content 3</div>
         - Electrocatalysis, CO,Capture, Sensors
- Luminescent Soft-materials
• Magnetic and Superconducting Properties
• Electronics and Optoelectronic Devices


        </div>
        <div className={toggleState === 4 ? " active-content1" : " research-content"}>
          <div className="research-content-head">content 4</div>
          . Theoretical and Computational Material Science
• Integrated Computational Materials Engineering


        </div>
        <div  className={toggleState === 1 ? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>FACULTIES</h3> </div>
          <ul>
            <li><a href="aas">Dr. Sumanta Samal</a> </li>
            <li><a href="aas">Dr. Ajay Kumar Kushwaha</a> </li>
            <li><a href="aas">Dr. Abhijit Ghosh</a> </li>
            <li><a href="aas">Dr. Dudekula Althaf Basha</a> </li>
            <li><a href="aas">Dr. Vinod Kumar</a> </li>
            <li><a href="aas">Dr. Jayaprakash Murugesan</a> </li>
            <li><a href="aas">Dr. Santosh S. Hosmani</a> </li>
            <li><a href="aas">Dr. Dhirendra Kumar Rai</a> </li>
            <li><a href="aas">Dr. Hemant Borkar</a> </li>
                        

          </ul>

        </div>
        <div  className={toggleState === 2 ? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>FACULTIES</h3> </div>
          <ul>  <li><a href="aas">Dr. Vinod Kumar</a> </li>
            <li><a href="aas">Dr. Jayaprakash Murugesan</a> </li>
            <li><a href="aas">Dr. Santosh S. Hosmani</a> </li>
            <li><a href="aas">Dr. Dhirendra Kumar Rai</a> </li>
            <li><a href="aas">Dr. Hemant Borkar</a> </li>
                        

          </ul>

        </div>
        <div  className={toggleState === 3? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>FACULTIES</h3> </div>
          <ul>
            <li><a href="aas">Dr. Sumanta Samal</a> </li>
            <li><a href="aas">Dr. Ajay Kumar Kushwaha</a> </li>
            <li><a href="aas">Dr. Abhijit Ghosh</a> </li>


          </ul>

        </div>
        <div  className={toggleState === 4? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>FACULTIES</h3> </div>
          <ul>
            <li><a href="aas">Dr. Sumanta Samal</a> </li>
            <li><a href="aas">Dr. Ajay Kumar Kushwaha</a> </li>
            <li><a href="aas">Dr. Abhijit Ghosh</a> </li>
            <li><a href="aas">Dr. Dudekula Althaf Basha</a> </li>
            <li><a href="aas">Dr. Vinod Kumar</a> </li>
            <li><a href="aas">Dr. Jayaprakash Murugesan</a> </li>
        
                        

          </ul>

        </div>
      </div><div>
        <Footer />
      </div></>

  )
}

export default Researchcomponent1

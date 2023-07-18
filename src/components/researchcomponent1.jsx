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

          <div className='heads-1' onClick={() => toggleTab(1)}><i className={toggleState === 1 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Alloy design, development, and deformation</div>
          <div className='heads-1' onClick={() => toggleTab(2)}><i className={toggleState === 2 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Surface engineering & Materials degradation</div>
          <div className='heads-1' onClick={() => toggleTab(3)}><i className={toggleState === 3 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Strategic Materials</div>
          <div className='heads-1' onClick={() => toggleTab(4)}><i className={toggleState === 4 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Electronics & Photonics</div>
          <div className='heads-1' onClick={() => toggleTab(5)}><i className={toggleState === 5 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Nano & Soft materials</div>
          <div className='heads-1' onClick={() => toggleTab(6)}><i className={toggleState === 6 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Energy & Environment</div>
         


        </div>
        <div className={toggleState === 1 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Themes</div>
          Alloy Design
Process-Structure-Property (P-S-P) correlations and Materials Modelling
Thermodynamics & Phase transformation
Indentation Mechanics
Mechanics of Materials
Crystallographic texture
Integrated  Computational Materials Engineering (ICME)
Materials Informatics (AI/ML)
Extreme Materials




        </div>
        <div className={toggleState === 2 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Themes</div>
          Light weight alloys
Multi-principal element alloys (MPEAs)
Metallic glasses
High temperature alloys : Superalloys
Ceramics
Cryogenic material



        </div>
        <div className={toggleState === 3 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Themes</div>
          Corrosion & prevention
Oxidation
Fatigue & Fracture
Metal joining
Thin films & coatings
Surface treatments



        </div>
        <div className={toggleState === 4 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Themes</div>
          New Generation Solar Cell Batteries
Fuel Cells and Supercapacitors
Hydrogen Generation and Storage Water Splitting
Photocatalysis and Solar Fuels Electrocatalysis
Thermoelectrics & Pezoelectronics
Carbon capture, utilization and conversion
Environmental Sensors
Water purification and waste-water treatment



        </div>
        <div className={toggleState === 5 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Themes</div>
          Thin films deposition
Wide bandgap semiconducting oxides
Optical and transport properties
Memory devices 
Power electronics devices 
Spintronics
Photo-active materials
Optoelectronics




        </div>
        <div className={toggleState === 6 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Themes</div>
          Design and Growth of Nanostructure
0D,1D, 2D materials and Applications 
Nano-hetero-architectures
Optical and transport properties of semiconducting nanostructures
Design and Synthesis of multifunctional metallogels
Colloidal crystals, glasses and gels
Self-Assembly of Soft Matter
Polymers and polymeric nanocomposites





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
        <div  className={toggleState === 5? "prof-names" : " no-profnames"}  >
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
        <div  className={toggleState === 6? "prof-names" : " no-profnames"}  >
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

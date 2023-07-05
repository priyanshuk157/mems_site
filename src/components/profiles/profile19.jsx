import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof18 from "./profimages/prof18.jpg"

const Profile19 = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* <div className="head4">
        <i className="back-button">
          <a href="faculty">
          </a>
        </i>
        <span>PROFILE</span>
      </div> */}
      <div className="pm-head">Prof. Chandan Halder
</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof18} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 211 (G), CITC </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: chalder@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		(+91) 0731 660 3182</li>
            <div className="fac-links">
            
             <a href=" https://scholar.google.com/citations?user=Jc4fgVQAAAAJ&hl=en "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href=" https://www.researchgate.net/profile/Chandan-Halder "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
           
             <a href="  www.linkedin.com/in/dr-chandan-halder-0408042b "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <ul>
              <li>         Mechanistic Diffusion Modeling
</li>
              <li>  Multi-Scale Finite Element Modeling</li>
              <li>Modeling and Simulation of Microstructure Evolution</li>
              <li>Neural-Network based Alloy Design</li>
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D, Department of Metallurgical and Materials Engineering, IIT Kharagpur, 2016</li>
            <li>M.Tech, Department of Metallurgical and Materials Engineering, IIT Kharagpur, 2011
</li>
            <li>B.Tech, Department of Metallurgical and Materials Engineering, NIT Durgapur, 2009</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          <ul>
            <li>
            Assistant Professor, MEMS Department, IIT Indore, 2022 – present
            </li>
            <li>Industrial : Senior Manager, R&D, Mishra Dhatu Nigam Limited, Hyderabad, 2016 – 2022
</li>
            
          </ul>
        </div>
        <div className="pc1">
         
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li> C . Halder, L. Madej & M. Pietrzyk, “Discrete micro-scale cellular automata model for modelling phase   
   transformation during heating of dual phase steels”, Archives of Civil and Mechanical Engineering, 14(1),  
   (2014) 96-103, https://doi.org/10.1016/j.acme.2013.07.001
 </li>
              <li>  C. Halder, A. Karmakar, Sk. Md. Hasan, D. Chakrabarti, M. Pietrzyk & N. Chakraborti, “Effect of Carbon 
   Distribution During the Microstructure Evolution of Dual-Phase Steels Studied Using Cellular Automata, Genetic  
   Algorithms, and Experimental Strategies”, Metallurgical and Materials Transaction A, 47, (2016), 5890-5906, 
   https://doi.org/10.1007/s11661-016-3725-y
 </li>
              <li>  C. Halder, D. Bachniak, L. Madej, N. Chakraborti & M. Pietrzyk, “Sensitivity analysis of the finite difference 2-D 
   cellular automata model for phase transformation during heating”, ISIJ International, 55(1), (2015) 285-292,  
   2015. https://doi.org/10.2355/isijinternational.55.285.
</li>
              <li>C. Halder, L. Madej, M. Pietrzyk & N. Chakraborti, “Optimization of cellular automata model for the heating of 
    dual-phase steel by genetic algorithm and genetic programming”, Materials and Manufacturing Processes,
    30(4), (2015), 552-562, https://doi.org/10.1080/10426914.2014.994765.
 </li>
              <li>C.Halder, K.L. Prasanna; S. Dixit, S. Pal & S.K. Jha, “Bi-objective Optimization of Maraging Steel Produced by 
    Vacuum Induction Melting Using Evolutionary Algorithms”, Transactions of the Indian Institute of Metals, 74(5),  
    (2021), 1193-1201, https://doi.org/10.1007/s12666-020-02153-x.
</li>
              </ul>
            {/* <Table>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th> Publication Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                  K. V. Vamsi, M. A. Charpagne, Tresa M Pollock, "High-throughput approach for estimation of intrinsic barriers in FCC structures for alloy design", Scripta Materialia, 204 (2021) 114126. https://doi.org/10.1016/j.scriptamat.2021.114126  
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  K. V. Vamsi and Tresa M. Pollock, “A new proximate structure for the APB(111) in L12 compounds”, Scripta Materialia 182 (2020), 38-42. https://doi.org/10.1016/j.scriptamat.2020.02.038  
                    .
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    K. V. Vamsi and S. Karthikeyan, “Modeling APB energies in multicomponent Ni-base superalloys”, Intermetallics 132 (2021), 107124. https://doi.org/10.1016/j.intermet.2021.107124 
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    Yolita M. Eggeler, K. V. Vamsi,  and Tresa M. Pollock, “Precipitate shearing, fault energies and solute segregation to planar faults in Ni-, CoNi- and Co- base superalloys”, Review Article in Annual Review of Materials Research, 51 (2021), 209. https://doi.org/10.1146/annurev-matsci-102419-011433 
                  </td>
                </tr>
              </tbody>
            </Table> */}
          </div>
        
        </div>
      

      
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Profile19;

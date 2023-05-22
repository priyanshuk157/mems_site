import React from "react";
import "./peoplecard.css";


const peoplecard = () => {
  return (
    <>

      <div className="hodsec container ">
     
        <img src="https://iiti.ac.in/people/~ajaykk/ajaykk.jpg" className="hodimg" alt="okf" />
        
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
      <div className="container mt-5 peoplecont">
        <div className="faculty ">
          <div className="m-auto text-center">
            FACULTY
            <br />
            <small>
              <i>Get to know our best in class faculty</i>
            </small>
          </div>
          <a href="faculty">
          <button className="view-button">
          
            view
            
            </button> 
            </a>
        </div>
        <div className="staff d-flex">
          <div className="m-auto text-center">
            STAFF
            <br />
            <small>
              <i>Get to know our best in class staff</i>
            </small>
          </div>
          <a href="staff">
          <button className="view-button">
          
            view
            
            </button> 
            </a>
            
        </div>
        <div className="students d-flex">
          <div className="m-auto text-center">
            STUDENTS
            <br />
            <small>
              <i>Get to know our best in class staff</i>
            </small>
            
          </div>
          <a href="students">
          <button className="view-button">
          
            view
            
            </button> 
            </a>
        </div>
      </div>
    </>
  );
};

export default peoplecard;

import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import "./staff.css"
import { FaAngleLeft } from "react-icons/fa";
import prof1 from "./profiles/profimages/prof1.jpg"

const staff = () => {
    return (
        <>
            <div className='body'>
                <div>
                    <Navbar/>

                </div>
               
               <div className="faculty-head-2"><a href="people"><i><FaAngleLeft/></i></a>Staff</div>
               
               <div className="Rstaff">
                <h4>Research Staff</h4>
                <div className="stfcontainer">
                    <div className="stfcontainer1">
                       <img src={prof1} alt="" className="stfimage" />
                       <div className="stftext">
                        <span>NAME : </span>
                        <span>NAME : </span>
                        <span>NAME : </span>
                        <span>NAME : </span>
                        
                       </div>
                    </div>
                </div>
                </div>
                <br />

                <div className="Rstaff">
                <h4>Departmental Staff</h4>
                <div className="stfcontainer">
                    <div className="stfcontainer1">
                       <img src={prof1} alt="" className="stfimage" />
                       <div className="stftext">
                        <span>NAME : </span>
                        <span>NAME : </span>
                        <span>NAME : </span>
                        <span>NAME : </span>
                        
                       </div>
                    </div>
                </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default staff
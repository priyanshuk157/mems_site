import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile15 = () => {
    return (

        <>
           <div>
                <Navbar />
            </div>

            <div className="head4">

                <i className='back-button'><a href="faculty"><FaAngleLeft /></a></i>
                <span>PROFILE</span>

            </div>


            {/* pc=profile content */}



            <div>
                <div className='profile-main'>
                    <div className="profile-section-1">
                        <div className="profile-img">

                            <img src="http://mems.iiti.ac.in/images/shirage.jpg" alt="sd" />
                            <div className='profileimg-name'>
                            Dr. Dudekula Althaf Basha
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Dudekula Althaf Basha begins with a Bachelor's degree Maths, Physics, Electronics from Sri Krishna Devaraya University, Anantpur. Building upon this foundation, he pursued a Master's degree in physics from Sri Venkateswara University, Tirupati. Driven by a passion for research and academic excellence he pursued a Ph.D from IISc, Bangalore.  </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 2 M.Tech, 7 B.tech.</li>
                                    
                                    <li>Published 20 Journals, 2 conferences, 387 citations, 12 h-index, 14 i10-index.</li>
                                    <li>Organised 2 short-term courses. </li>
                                    <li>Given 4 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Transmission Electron Microscopy, Magnesium Alloys, Nano Particles. One Major Achievement: “Out Standing Reviewer” recognition by “TIIM journal” in March 2022.

                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile15

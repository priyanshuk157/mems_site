import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile16 = () => {
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
                            Dr. Chandan Halder

                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Chandan Halder begins with a Bachelor's degree from NIT, Durgapur. Building upon this foundation, he pursued a Master's degree from IIT, Kharagpur. Driven by a passion for research and academic excellence he pursued a Ph.D from the same college.  </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                   
                                    <li>Published 14 Journals, 162 citations, 6 h-index, 4 i10-index.</li>
                                    <li>Organised 1 training program, 4 short-term courses, 1 conference. </li>
                                    <li>Given 4 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Computational Materials Science, Simulation and Modeling.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile16
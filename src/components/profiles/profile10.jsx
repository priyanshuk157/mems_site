import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile10 = () => {
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
                                Dr. Dhirendra Kumar Rai

                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Dhirendra Kumar Rai begins with a Bachelor's degree from VBS Purvanchal University,  Jaunpur. Building upon this foundation, he pursued a Master's degree in Physics from the same university. Driven by a passion for research and academic excellence he pursued a Ph.D from the same college.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 1 Ph.D, 3 M.Tech, 12 B.tech.</li>
                                    <li>Completed 1 Research Project.</li>
                                    <li>Published 20 Journals, 416 citations, 11 h-index, 13 i10-index.</li>
                                    <li>Organised 1 workshop and conference. </li>
                                    <li>Given 11 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Material Science.One Major Achievement: :“Best Researcher Award” by International Research Awards on New Science Innovations (NESIN) (2020).
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile10

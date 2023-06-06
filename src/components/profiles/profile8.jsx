import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile8 = () => {
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
                               Dr. Jayaprakash Murugesan

                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Jayaprakash Murugesan begins with a Bachelor's degree in Metallurgical Engineering from GCE, Salem. Building upon this foundation, he pursued a Master's degree in Metallurgical and Materials Engineering from IIT, Madras. Driven by a passion for research and academic excellence he pursued a Ph.D from NUT, Japan.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 3 Ph.D, 10 M.Tech, 12 B.tech.</li>
                                    <li>Completed 2 Research Projects.</li>
                                    <li>Published 35 Journals, 428 citations, 10 h-index, 13 i10-index.</li>
                                    <li>Organised 2 training programs, 8 short-term courses and 1 conference. </li>
                                    <li>Given 30 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Welding engineering, mechanical behavior of materials, fatigue, fracture mechanics, additive manufacturing. One Major Achievement: Developed friction stir additive manufacturing setup.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile8

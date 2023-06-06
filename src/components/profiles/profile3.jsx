import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile3 = () => {
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

                            <img src="http://mems.iiti.ac.in/images/devan.jpg" alt="sd" />
                            <div className='profileimg-name'>
                                Prof. Rupesh Devan</div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of the Dr. Rupesh Devan begins with a Bachelor's degree in Physics  from Shivaji University, Kolhapur. Building upon this foundation, he pursued a Master's degree in Physics from the same university.  Driven by a passion for research and academic excellence he pursued a Ph.D from the same college.                  </div>

                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 3 Ph.D students, 11 M.Tech, 8 B.tech, 04 M.Phil. 01 M.Sc. 01 JRF 01 Ph.D. Internship students</li>
                                    <li>Completed 2 Research Projects</li>
                                    <li>Published 124 Journals, 1 book, 2 book chapters, 3 special issues 5755 citations, 45 h-index, 94 i10-index</li>
                                    <li>Organised 1 workshop, 6 short-term courses. </li>
                                    <li>Given 36 Invited/Contributory talk in national / international conferences</li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: 1.Nano-hetero-architectures for energy storage and conversion. 2.Photoactive materials. One Major Achievement: DUO-India Professor Fellowship   Award, Govt. of India and ASEM-DUO, South Korea (2020-22).
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>


        </>
    )
}

export default profile3

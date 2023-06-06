import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile5 = () => {
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
                               Dr. Mrigendra Dubey
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Mrigendra Dubey begins with a Bachelor's degree University of Allahabad, Allahabad. Building upon this foundation, he pursued a Master's degree from the same university. Driven by a passion for research and academic excellence he pursued a Ph.D from Indian Institute of Technology, Guwahati.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 4 Ph.D, 11 M.Tech, 12 B.tech, 1 NPDF.</li>
                                    <li>Completed 1 Research Projects.</li>
                                    <li>Published 38 Journals, 589 citations, 15 h-index, 21 i10-index.</li>
                                    <li>Organised 2 workshops, 5 short-term courses. </li>
                                    <li>Given 20 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Materials Science (Soft Materials). One Major Achievement: Young Scientist Award, International Academy of Physical Sciences, Allahabad, India- 2017.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile5

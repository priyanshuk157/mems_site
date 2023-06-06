import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile6 = () => {
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
Dr. Eswara Prasad Korimilli                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Eswara Prasad Korimilli begins with a Bachelor's degree in Metallurgical Engineering from NIT Warangal. Building upon this foundation, he pursued a Master's degree in Metallurgical Engineering from IISc, Bangalore. Driven by a passion for research and academic excellence he pursued a Ph.D from the same college.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 3 Ph.D, 7 M.Tech, 9 B.tech .</li>
                                    <li>Completed 1 Research Projects.</li>
                                    <li>Published 41 Journals, 1690 citations, 17 h-index, 25 i10-index.</li>
                                    <li>Organised 1 workshops, 1 training programs, 4 short-term courses and 9 conferences. </li>
                                    <li>Given 25+ Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                  
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Plasticity at small length scales, Indentation mechanics, High strain rate deformation behavior of materials, Heat treatment and failure analysis of steels, Archaeometallurgy.
 One Major Achievement: Visiting faculty positions at KIT  Germany, Xi’an Jiaotong University China, Ecole Centrale Paris, and NTU Singapore.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile6

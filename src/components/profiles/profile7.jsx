import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile7 = () => {
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
                               Dr. Vinod Kumar

                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Vinod Kumar begins with a Bachelor's degree in Metallurgy and Materials Engineering from NIMAT (Formerly NIFFT), Ranchi. Building upon this foundation, he pursued a Master's degree in Materials Science and Engineering from IIT, Kanpur. Driven by a passion for research and academic excellence he pursued a Ph.D from the same college.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 5 Ph.D, 13 M.Tech, 27 B.tech.</li>
                                    <li>Completed 2 Research Projects.</li>
                                    <li>Published 65 Journals, 4 conferences, 1047 citations, 20 h-index, 30 i10-index.</li>
                                    <li>Organised 2 workshops, 4 training programs, 4 short-term courses and 2 conferences. </li>
                                    <li>Given 5 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        b. Area of Specialization: Powder Metallurgy and Physical Metallurgy. One Major Achievement: His group is the first in India to successfully utilize ANN tool to predict the mechanical properties and oxidation behaviour of high entropy alloys.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile7

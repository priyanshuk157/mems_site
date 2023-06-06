import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile14 = () => {
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
                               Prof. Ram Sajeevan Maurya
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Prof. Ram Sajeevan Maurya begins with a Bachelor's degree in Metallurgical and Materials Engineering from NIT, Durgapur. Building upon this foundation, he pursued a Ph.D from IIT, Kharagpur. Driven by a passion for research and academic excellence he pursued a Ph.D from Indian Institute of Technology, Madras.  </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 1 M.Tech, 7 B.tech.</li>
                                    
                                    <li>Published 17 Journals, 192 citations, 6 h-index, 5 i10-index.</li>
                                    <li>Organised 1 training program, 4 short-term courses, 1 conference. </li>
                                    <li>Given 4 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                   
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Dispersion Strengthened (ODS) alloys, Oxide Dispersion Strengthened High Entropy Alloys (ODS-HEAs), Bulk metallic glasses and High entropy alloys. One Major Achievement: Early Career Research Award.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile14

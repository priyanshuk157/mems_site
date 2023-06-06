import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile12 = () => {
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
                               Dr. Hemant Borkar
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Hemant Borkar begins with a Bachelor's degree in Metallurgical Engineering and Materials Science from SVNIT, Nagpur. Building upon this foundation, he pursued a Master's degree in Metallurgical Engineering and Materials Science from the IIT, Bombay. Driven by a passion for research and academic excellence he pursued a Ph.D from the McGill University, Canada.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 6 M.Tech, 4 B.tech students.</li>
                                   
                                    <li>Published 10 Journals, 11 conferences, 223 citations, 6 h-index, 5 i10-index.</li>
                                    <li>Organised 2 short-term courses and 1 conference. </li>
                                    <li>Given 6 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        b. Area of Specialization: Lightweight Materials. One Major Achievement: Best Presentation Award at international conference ICMST 2018 , Malaysia.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

        </>
    )
}

export default profile12

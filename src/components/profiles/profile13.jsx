import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile13 = () => {
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
                              Dr. Sunil Kumar
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Sunil Kumar begins with a Bachelor's degree in Physical Sciences from Maharshi Dayanand University ,  Rohtak. Building upon this foundation, he pursued a Master's degree in Physics from University of Delhi . Driven by a passion for research and academic excellence he pursued a Ph.D from IISc, Bangalore.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 2 Ph.D, 6 M.Tech, 3 B.tech students and 3 (summer interns).</li>
                                                                   <li>Completed 2 Research Projects</li>

                                    <li>Published 57 Journals, 15 conferences, 1234 citations, 20 h-index, 39 i10-index.</li>
                                    <li>Organised a short-term course. </li>
                                    <li>Given 2 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                       Area of Specialization: Energy Storage Materials; Piezoelectric; Electroceramics.One Major Achievement: Best Teacher Award (2022), IIT Indore.
                    </div>
                </div>
            
             </div>

            <div>
                <Footer />
            </div>

        </>
    )
}

export default profile13

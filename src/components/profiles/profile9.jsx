import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile9 = () => {
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
                                Dr. Sumanta Samal

                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Sumanta Samal begins with a Bachelor's degree in Physics (Hons), Chemistry, Mathematics M.P.C. (A) College, North Orissa University, Baripada. Building upon this foundation, he pursued a Master's degree in Physics  (Specialization in solid state physics) from Utkal University, Bhubaneswar and completed his M.tech from NIT, Rourkela. Driven by a passion for research and academic excellence he pursued a Ph.D from IIT, Kanpur.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 3 Ph.D, 7 M.Tech, 13 B.tech.</li>

                                    <li>Published 41 Journals, 4 conferences, 673 citations, 16 h-index, 22 i10-index.</li>
                                    <li>Organised 4 workshops, 3 short-term courses and 1 conferences. </li>
                                    <li>Given 40 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Solidification. One Major Achievement: First time report on “design and development of eight-component eutectic high entropy alloys as well as quasi-peritectic high entropy alloy by integrated approach using experiment and simulation”.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

            
        </>
    )
}

export default profile9

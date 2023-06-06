import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile17 = () => {
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
                            Nisheeth Kumar Prasad
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Nisheeth Kumar Prasad begins with a Bachelor's degree in Metallurgical Engineering from Biju Patnaik University of Technology, Rourkela. Building upon this foundation, he pursued a Master's degree in Metallurgical Engineering and Materials Science from tMNIT, Jaipur. Driven by a passion for research and academic excellence he pursued a Ph.D from IIT, Kanpur.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                  
                                   
                                    <li>Published 11 Journals, 2 conferences, 125 citations, 6 h-index, 5 i10-index.</li>
                                    <li>Organised 1 conference. </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Processing-structure-corrosion property correlation of metals and alloys.
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

        </>
    )
}

export default profile17

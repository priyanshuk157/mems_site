import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile18 = () => {
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
                            Dr. Venkata Vamsi
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Venkata Vamsi begins with a Bachelor's degree  from Maharshi Andhra University. Building upon this foundation, he pursued a Master's degree from IISc. Driven by a passion for research and academic excellence he pursued a Ph.D from the same college.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    

                                    <li>Published 12 Journals, 7 conferences, 215 citations, 9 h-index, 9 i10-index.</li>
                                    
                                    <li>Given 24 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Atomistic simulations based on density functional theory, Computational thermodynamics, Integrated Computational Materials Engineering (ICME), Alloy design, Structure-property correlations, planar fault energies, Deformation pathways, High temperature deformation, Superalloys and Multi-principal element alloys (MPEAs).
                    </div>
                </div>
            </div>


            <div>
                <Footer />
            </div>

        </>
    )
}

export default profile18

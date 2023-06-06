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
                                Dr. Parasharam M. Shirage
                            </div>
                            <div className='profileimg-name'>
                                Proffessor </div>

                        </div>
                        {/* pc=profile content */}
                        <div className="profile-content-1">
                            <div className="pc1">
                                <span className='pc1-head'>BIOGRAPHY</span>
                                <br />
                                The educational journey of Dr. Parasharam M. Shirage begins with a Bachelor's degree in Physics from Shivaji University, Kolhapur. Building upon this foundation, he pursued a Master's degree in Physics from the same university. Driven by a passion for research and academic excellence he pursued a Ph.D from the same college.                </div>
                           
                            <div className="pc1">
                                <span className='pc1-head'>CONTRIBUTIONS</span>
                                <ul>
                                    <li>Supervised 15 Ph.D, 16 M.Tech, 13 B.tech, 07  (M.Sc.) 2 NPDF, 4 PDF students.</li>
                                    <li>Completed 3 Research Projects.</li>
                                    <li>Published 228 Journals, 4 book chapters, 31 conferences, 5930 citations, 43 h-index, 137 i10-index.</li>
                                    <li>Organised 2 workshops, 2 training programs, 10 short-term courses and 2 conferences. </li>
                                    <li>Given 61 Invited/Contributory talk in national / international conferences</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pc1">
                                <span className='pc1-head'>RESEARCH AREAS</span>
                                <ul>
                                    <li>Supervised 15 Ph.D, 16 M.Tech, 13 B.tech, 07  (M.Sc.) 2 NPDF, 4 PDF students.</li>
                                   <li>Published 228 Journals, 4 book chapters, 31 conferences, 5930 citations, 43 h-index, 137 i10-index.</li>
                                    <li>Organised 2 workshops, 2 training programs, 10 short-term courses and 2 conferences. </li>
                                    <li>Given 61 Invited/Contributory talk in national / international conferences</li>

                                   <li>Completed 3 Research Projects.</li>
                                </ul>
                            </div>
                    <div className="pc1">
                        <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span> <br />
                        Area of Specialization: Materials Science and Condensed Matter Physics. One Major Achievement: MRSI  Medal 2020.
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

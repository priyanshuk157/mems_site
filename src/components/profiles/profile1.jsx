import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import "./profile.css"
import { FaAngleLeft } from "react-icons/fa";

const profile1 = () => {
    return (

        <>
            <div>
                <Navbar />
            </div>

            <div className="head4">
             
            <i className='back-button'><a href="faculty"><FaAngleLeft /></a></i>
              <span>PROFILE</span>

            </div>
          
            <div className='profile-main'>
                <div className="profile-section-1">
                    <div className="profile-img">

                        <img src="https://iiti.ac.in/people/~ajaykk/ajaykk.jpg" alt="sd" />
                        <div className='profileimg-name'>
                            Dr. Ajay Kumar Kushwaha</div>
                        <div className='profileimg-name'>
                            Proffessor And HOD</div>

                    </div>
                    {/* pc=profile content */}
                    <div className="profile-content-1">
                    <div className="pc1">
                    <span className='pc1-head'>BIOGRAPHY</span>
                        <br />
The educational journey of Dr. Ajay Kumar Kushwaha begins with a Bachelor's degree in Physics and Mathematics from C.S.J.M University, Kanpur in 2003. Building upon this foundation, he pursued a Master's degree in Physics with a specialization in Electronics from the same university, successfully completing it in 2006. Driven by a passion for research and academic excellence, he joined the prestigious IIT Bombay to pursue a Ph.D.                </div>
                        <div className="pc1">
                            <span className='pc1-head'>CONTRIBUTIONS</span>
                            <ul>
                                <li>Supervised 4 Ph.D students, 6 M.Tech and 11 B.tech students.</li>
                                <li>Completed 2 Research Projects.</li>
                                <li>Published 65 Journals, 10 conferences, 281 citations, 28 h-index, 44 i10-index.</li>
                                <li>Organised 3 workshops, 6 training programs, 2 short-term courses. </li>
                                <li>Given 10 Invited/Contributory talk in national / international conferences.</li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pc1">
                    <span className='pc1-head'>SPECALISATION AND ACHIEVEMENTS</span>
                  Area of Specialization: Materials Science: Nano & Energy Materials. One Major Achievement: General Chair: International Conference on Frontiers of Materials Engineering. 
                </div>
            </div>

         

            <div>
                <Footer />
            </div>
            
        </>
    )
}

export default profile1

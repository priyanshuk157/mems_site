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

            <div className="head">
             

                PROFILE

            </div>
            <i className='back-button'><a href="faculty"><FaAngleLeft /></a></i>
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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam delectus ipsa repellat necessitatibus! Odit, veniam iusto omnis eum mollitia quis hic at libero consequatur repellendus. Eos 
                </div>
                        <div className="pc1">
                            <span className='pc1-head'>BIOGRAPHY</span>
                            <ul>
                                <li>ahhkfanafn aajkna ahfkja ajja aajhalla aha a</li>
                                <li>ahhkfanafn aajkna ahfkja ajja aajhalla aha a</li>
                                <li>ahhkfanafn aajkna ahfkja ajja aajhalla aha a</li>
                                <li>ahhkfanafn aajkna ahfkja ajja aajhalla aha a</li>
                                <li>ahhkfanafn aajkna ahfkja ajja aajhalla aha a</li>
                                <li>ahhkfanafn aajkna ahfkja ajja aajhalla aha a</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pc1">
                    <span className='pc1-head'>BIOGRAPHY</span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias numquam delectus ipsa repellat necessitatibus! Odit, veniam iusto omnis eum mollitia quis hic at libero consequatur repellendus. Eos necessitatibus earum nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quam, eaque velit repellat vero aliquid magni laudantium, fugiat, molestiae asperiores totam pariatur quas! Dolorem corrupti odit quis praesentium atque quibusdam.
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default profile1

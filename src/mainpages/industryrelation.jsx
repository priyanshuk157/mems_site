import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './industry.css'
import { FaEnvelope } from "react-icons/fa";

import Card from 'react-bootstrap/Card';
const industryrelation = () => {
    return (
        <>

            <div>
                <Navbar />
            </div>
           
            <div className='ind-head'>Industrial Collaborations</div>
            <div className='industrycolab'>
                <img src="https://whoowner.b-cdn.net/wp-content/uploads/2018/01/Owner-of-VE-Commercial-Vehicles-Limited-Wiki-Logo.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvK1fNzWbbTsHsWzOwSN6kmDRrqcXe9J5gUA&usqp=CAU" alt="" />
                <img src="https://rajratan.co.in/wp-content/uploads/2021/08/Rajratan-Horizontal-Logo.png" alt="" />
                <img src="https://www.yelu.in/img/in/a/1540896763-86-moira-sariya.jpg" alt="" />

            </div>
          
            <div className="placements">
                <Card className="bg-white text-red">


                    <Card.Title className='title'>PLACEMENTS</Card.Title>
                    <Card.Text className='cardtext'>
                       <img src="" alt="" />

                    </Card.Text>
                    

                </Card>
            </div>
            <div className="ongoing">
                <Card className="bg-white text-blue">


                    <Card.Title className='title'>ONGOING RESEARCH</Card.Title>
                    <Card.Text className='cardtext'>
                        <ul>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                        </ul>
                       

                    </Card.Text>
                   
                </Card>
            </div>
            <div className="blank">
                <Card className="bg-white text-black">


                    <Card.Title className='title'>CONNECT WITH US</Card.Title>
                    <Card.Text className='cardtext'>
                        
                      
                        <i><FaEnvelope/></i> : <a href="jdjs">outreach.mems</a>
                    </Card.Text>
                    

                </Card>
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}

export default industryrelation

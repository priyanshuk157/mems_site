import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './academic.css'

const AcadCard = () => {
  return (
    <>
    <div><Navbar/></div>
    
    <div className='acadhead'> Programmes</div>
    <div className='acad-image'>
      <img src="https://i.pinimg.com/originals/d3/36/49/d336495876ec68fd833371a329426987.jpg" alt="omk" srcset="" />
      Degree programs offered by the Department of Metallurgical Engineering and Materials Science at IIT Indore revolve around exploring the properties of matter and their practical utilization in various areas of science and engineering.
    </div>
    <div className="acad-body">
    <div className="acad-content">B.Tech. in Metallurgical Engineering and Materials Science (4 Years):</div>
    <div className="acad-content">M.Tech. with Specialization in Materials Science and Engineering (2 Years):</div>
    <div className="acad-content">M.Tech. with Specialization in Metallurgical Engineering (2 Years):</div>
    <div className="acad-content">Ph.D. Program</div>
    <div className="acad-content"><a href="https://academic.iiti.ac.in/" target='_blank'  rel="noreferrer" >Click here to know the admission process for the degree programs offered by the Department of Metallurgical Engineering and Materials Science at IIT Indore</a></div>
    <div className="acad-content1">
      <div className="sub-content">Academic Calender for the year 23-24
UG
PG/PHD</div>
      <div className="sub-content">Curriculum link</div>
    </div>
    </div>
    <div>
      <Footer/>
    </div>
   
    </>
    
  )
}

export default AcadCard

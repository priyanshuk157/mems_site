import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Profiledata from './profiles/profiledata'
import Profile1 from './profiles/profile1'

const AcadCard = () => {
  return (
   <>
   
   <Profile1 details = {Profiledata}/>
   </>
  )
}

export default AcadCard

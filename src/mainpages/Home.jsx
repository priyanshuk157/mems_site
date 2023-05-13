import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/Slider'
import Cards from '../components/cards'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div>
      <Slider/>
    </div>
    <div className='cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div>
    <div>
      <Footer/>
    </div>
  
    </>
  )
}

export default Home

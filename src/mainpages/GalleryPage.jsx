import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer';
import Gallery from '../components/gallery';

const GalleryPage = () => {
  return (
    <>
  
    <div>
      <Navbar/>
    </div>
    <Gallery />
    <div>
      <Footer/>
    </div>
  
    </>
  )
}

export default GalleryPage

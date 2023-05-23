import React from 'react'
import img from '../image.png'

function Gallery() {
  return (
    <div className='container d-flex justify-center align-center flex-wrap gap-3'>
       <div >
        <img src={img} alt="image" />
       </div>
       <div>
        <img src={img} alt="image" />
       </div>
       <div >
        <img src={img} alt="image" />
       </div>
       <div >
        <img src={img} alt="image" />
       </div>       
    </div>
  )
}

export default Gallery
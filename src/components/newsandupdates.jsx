import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const NewsandUpdates = () => {
  return (
    <div>
        <Carousel fade >
      <Carousel.Item interval={4000}> 
        <img
          className="d-block w-100 h-40"
          src="http://mems.iiti.ac.in/index_files/image%25207.jpg"
          alt="First slide"
        />
           <Carousel.Caption color='black'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
  
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 h-40"
          src="http://mems.iiti.ac.in/index_files/image%25202.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 h-40"
          src="https://wallpaperaccess.com/full/945950.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default NewsandUpdates

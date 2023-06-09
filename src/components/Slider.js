import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"

function CarouselFadeExample() {
  
  return (
    <>
    <div className='carousel-main'>
    <Carousel fade >
      <Carousel.Item interval={4000}> 
        <img
          className="d-block w-100 img-hgt"
          src="https://wallpapercave.com/dwp1x/wp11646842.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-hgt"
          src="https://www.researchgate.net/profile/Daniel-Krizan-2/publication/259850559/figure/fig2/AS:669347563442199@1536596303810/Microstructure-of-selected-modern-steels-for-automotive-applications-in-comparison-with-a.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-hgt"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Microstructure_of_a_stainless_steel_A961.jpg"
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
    </>
  );
}

export default CarouselFadeExample;
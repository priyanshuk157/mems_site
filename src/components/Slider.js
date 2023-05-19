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
          src="https://wallpaperaccess.com/full/2379729.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-hgt"
          src="https://wallpaperaccess.com/full/109672.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-hgt"
          src="https://wallpaperaccess.com/full/945950.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default CarouselFadeExample;
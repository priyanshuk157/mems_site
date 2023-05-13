import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css";

function IndividualIntervalsExample() {
  return (
    <>
    
    <Carousel fade>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100  img1"
          src="https://capabilitydevelopment.org/assets/upload/Course/571b136748cbf0d8ca86c20938ed2a96.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 img2"
          src="https://c1.wallpaperflare.com/preview/7/100/24/iron-melt-furnace-metal.jpg    "
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet,  consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        
        <img
          className="d-block w-100 img3"
          src="https://www.indcareer.com/files/Metallurgical%20Engineering%20&%20Materials%20Science%20.jpg"
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
    
    </>
  );
}

export default IndividualIntervalsExample;

import {React}  from 'react';
import Carousel from 'react-bootstrap/Carousel';


import Pic1 from '../assets/multimedia/SNST BLVD T-Shirt0.png';
import Pic2 from '../assets/multimedia/SNST BLVD T-Shirt90.png';
import Pic3 from '../assets/multimedia/SNST BLVD T-Shirt180.png';

function UncontrolledExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Pic1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
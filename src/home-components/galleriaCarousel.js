import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';

export default function GalleriaCarousel({Images}){

    return <Carousel slide={true} interval={1000} indicators={false}>
    {Images.map((image, index) => (
      <Carousel.Item key={(index)} interval={1000} className='carousel-galleria'>
        
        <Image  className="d-block w-100" src={image} alt={"rioxoris"} loading='lazy'/>
    
      </Carousel.Item>
    ))}
  </Carousel>
}
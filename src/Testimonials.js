import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { Container } from "react-bootstrap";
const image = "./Images/testimonial-bg.jpg";
const StyledContainer = styled(Container)`
    
    background-image: url(${image});
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height:700px;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }
  `;
export default function CarouselTestimonials() {
  const Recenzioni = [
    { id: 1, text: "some" },
    { id: 2, text: "some" },
    { id: 3, text: "some" },
    { id: 4, text: "some" },
  ];
  
  
  return (
   
      <Carousel>
        <StyledContainer fluid/>
       
        {Recenzioni.map((content, index) => (
          <Carousel.Item key={index} interval={500}>
            <Carousel.Caption key={index.id}>
              <p>{content.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
   
  );
}

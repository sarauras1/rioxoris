import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";
import { camere } from "./data/imagesgallery";

export default function CarouselCamere() {
  return (
    <Container>
      <Carousel className="carousel-room" indicators={false}>
        {camere.map((image, index) => (
          <Carousel.Item key={index} interval={500} >
            <Image
              fluid
              src={image.camere}
              alt="Le camere dell agriturismo Rioxoris"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
 
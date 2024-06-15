import Carousel from "react-bootstrap/Carousel";
import { Container, Image, Row, Col } from "react-bootstrap";
import { camere } from "../data/imagesgallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";
import Prezzi from "./prezzi";
export default function CarouselCamere({ id }) {
  return (
    <Container id={id} >
      <div className="mb-5 text-center">
        <span className="decoro-small decoro">Le Nostre</span>
        <h2 className="titolo-small titolo">Camere</h2>
        <div className="d-flex justify-content-center">
          <div className="spoon-line"></div>{" "}
          <FontAwesomeIcon
            className="spoon"
            icon={faSpoon}
            color="#c1a35f"
            size="2x"
          />{" "}
          <div className="spoon-line"></div>
        </div>
        <p>
          L'agriturismo è dotato di 5 camere (tre doppie e due triple) arredate
          con cura, ognuna con bagno interno, riscaldamento autonomo. Pulizia
          giornaliera e biancheria inclusa, su richiesta. Le nostre camere sono
          attrezzate di frigobar e per il soggiorno in compagnia di animali.
          Ogni camera si affaccia nell'ampio cortile dove si respira l'aria
          pulita dell'aperta campagna.
        </p>
      </div>
      <Row>
       
        <Col className="mb-5" lg="6">
          <Carousel className="carousel-room" indicators={false}>
            {camere.map((image, index) => (
              <Carousel.Item key={index} interval={500}>
                <Image
                  loading='lazy'
                  fluid
                  src={image.camere}
                  alt="Le camere dell' agriturismo Rioxoris"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col lg="6">
        <Prezzi id="prezzi" className="prezzi"/>
        </Col>
       
      </Row>
    </Container>
  );
}

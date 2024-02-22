import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const images = [
  {
    src: "./Images/slider/_DSC6256.jpg",
    alt: "Agriturismo Rioxoris",
    welcome: "Benvenuti",
    title: "A Rioxoris",
    text: "Qui valorizziamo l' ospitalità  e cortesia!",
  },
  {
    src: "./Images/slider/_DSC6297.jpg",
    alt: "Agriturismo Rioxoris",
    welcome: "Benvenuti",
    title: "A Rioxoris",
    text: "Qui valorizziamo l' ospitalità e cortesia!",
  },
  {
    src: "./Images/gallery/_DSC6231.jpg",
    alt: "Agriturismo Rioxoris",
    welcome: "Sapori Naturali",
    title: "Della Sardegna",
    text: "Preparati a riscoprire il gusto del cibo genuino!",
  },
  {
    src: "./Images/slider/_DSC6384.jpg",
    alt: "Agriturismo Rioxoris",
    welcome: "Sapori Naturali",
    title: "Della Sardegna",
    text: "Preparati a riscoprire il gusto del cibo genuino!",
  },
  {
    src: "./Images/gallery/_DSC6361.jpg",
    alt: "Agriturismo Rioxoris",
    welcome: "Immersi",
    title: "Nella natura",
    text: "Goditi la tranquillità che la nostra campagna ti offre insieme alla simpatia dei nostri animali!",
  },
  {
    src: "./Images/gallery/_DSC6180.jpg",
    alt: "Agriturismo Rioxoris",
    welcome: "Immersi",
    title: "Nella natura",
    text: "Goditi la tranquillità che la nostra campagna ti offre insieme alla simpatia dei nostri animali!",
  },
];

const Image = styled.img`
  height: 50vw;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    height: 70vw;
  }
  @media screen and (max-width: 480px) {
    height: 80vw;
  }
  @media screen and (max-width: 390px) {
    height: 100vw;
  }
`;

export default function Header() {
  return (
    <Carousel slide={true} fade={true} interval={1000}>
      {images.map((image, index) => (
        <Carousel.Item
          key={index}
          interval={1000}
          className="carousel-item-custom"
        >
          <Image className="d-block w-100" src={image.src} alt={image.alt} />

          <Carousel.Caption className="mt-5">
            <div>
              <span className="decoro">{image.welcome}</span>
              <h1 className="titolo">{image.title}</h1>
              <h3 className="testo">{image.text}</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

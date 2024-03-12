import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon, faStar } from "@fortawesome/free-solid-svg-icons";

const image = "./Images/testimonial-bg.jpg";

const StyledContainer = styled(Container)`
  background-image: url(${image});
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;

  &::before {
    content: "";
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
    {
      id: 0,
      text: "Abbiamo alloggiato due notti all'agriturismo Rioxoris, non conoscevamo la struttura, è stata una prenotazione dell'ultimo momento e per fortuna nostra c'erano due camere disponibili. Che dire, è stata un piacevole sorpresa.. L'azienda è vasta e curata,Camere comode e pulite, impagabili il canto del gallo e il belato delle pecore al risveglio, le oche come delle statuine sul prato antistante le camere, i pavoni con i piccoli al seguito a scorrazzare perl'aia.Tanti prodotti a km zero, colazioni squisite con marmellate e dolci casalinghi, ottima cena conclusa con i dolci della signora Bianca e delle sebadas eccellenti, da sarda posso dire che da tempo non mangiavo sebadas così buone. Ci siamo sentiti in famiglia. Consigliatissimo.",
      testimone: "Viviana",
    },
    {
      id: 1,
      text: "Un posto unico e forse irripetibile. Bella la struttura, tradizionale, con la corte centrale circondata da un portico su cui affacciano le camere. Fattoria annessa con tanti animali, quindi luogo ideale per i bambini. Inoltre lo spazio esterno e fornito di tanti giochi per grandi e piccoli. L'accoglienza di Martino e dei suoi familiari è speciale, ti fanno sentire a casa e si vede che amano il loro lavoro. Si viene coccolati con mille attenzioni e, cosa più sublime, si mangiano prodotti tipici prodotti al 99%a kilometro Zero. Dalle carni ai formaggi, dagli ortaggi alla pasta e al pane, anche i dolci e le marmellate per la colazione. Consigliatissimo, a mio parere meriterà una seconda visita",
      testimone: "Riccardo Catalano",
    },
    {
      id: 2,
      text: "Posso fare una recensione solo per quel che riguarda la cucina dal momento che ho prenotato solo per la cena e non ho soggiornato nella struttura. Non mi ricordo di aver mangiato così bene da tanti anni, la vera cucina tipica sarda in chiave casalinga. Dagli antipasti con i salumi ed il pecorino del territorio, per continuare con i funghi trifolati, le chiocciole gratinate e al sugo, i maddureddu al cinghiale e i tagliolini ai funghi. Non poteva mancare il porceddu arrosto, qualcosa di sublime al palato. E le seadas vogliamo ignorarle? Il tutto accompagnato da ottimo vino rosso e mirto a fine pasto. Il prezzo? Talmente abbordabile da essere imbarazzante. Personale simpatico, accogliente e disponibile. Se potessi dare 10 stelle lo farei volentieri senza esitazione.",
      testimone: "Luigi Carrieri",
    },
    {
      id: 3,
      text: "Posso fare una recensione solo per quel che riguarda la cucina dal momento che ho prenotato solo per la cena e non ho soggiornato nella struttura. Non mi ricordo di aver mangiato così bene da tanti anni, la vera cucina tipica sarda in chiave casalinga. Dagli antipasti con i salumi ed il pecorino del territorio, per continuare con i funghi trifolati, le chiocciole gratinate e al sugo, i maddureddu al cinghiale e i tagliolini ai funghi. Non poteva mancare il porceddu arrosto, qualcosa di sublime al palato. E le seadas vogliamo ignorarle? Il tutto accompagnato da ottimo vino rosso e mirto a fine pasto. Il prezzo? Talmente abbordabile da essere imbarazzante. Personale simpatico, accogliente e disponibile. Se potessi dare 10 stelle lo farei volentieri senza esitazione.",
      testimone: "Luigi Carrieri",
    },
    {
      id: 4,
      text: "Abbiamo alloggiato due notti all'agriturismo Rioxoris, non conoscevamo la struttura, è stata una prenotazione dell'ultimo momento e per fortuna nostra c'erano due camere disponibili. Che dire, è stata un piacevole sorpresa.. L'azienda è vasta e curata,Camere comode e pulite, impagabili il canto del gallo e il belato delle pecore al risveglio, le oche come delle statuine sul prato antistante le camere, i pavoni con i piccoli al seguito a scorrazzare perl'aia.Tanti prodotti a km zero, colazioni squisite con marmellate e dolci casalinghi, ottima cena conclusa con i dolci della signora Bianca e delle sebadas eccellenti, da sarda posso dire che da tempo non mangiavo sebadas così buone. Ci siamo sentiti in famiglia. Consigliatissimo.",
      testimone: "Viviana",
    },
    {
      id: 5,
      text: "Un posto unico e forse irripetibile. Bella la struttura, tradizionale, con la corte centrale circondata da un portico su cui affacciano le camere. Fattoria annessa con tanti animali, quindi luogo ideale per i bambini. Inoltre lo spazio esterno e fornito di tanti giochi per grandi e piccoli. L'accoglienza di Martino e dei suoi familiari è speciale, ti fanno sentire a casa e si vede che amano il loro lavoro. Si viene coccolati con mille attenzioni e, cosa più sublime, si mangiano prodotti tipici prodotti al 99%a kilometro Zero. Dalle carni ai formaggi, dagli ortaggi alla pasta e al pane, anche i dolci e le marmellate per la colazione. Consigliatissimo, a mio parere meriterà una seconda visita",
      testimone: "Riccardo Catalano",
    },
  ];

  return (
    <>
      <Carousel>
        {Recenzioni.map(({ id, text, testimone }) => (
          <Carousel.Item key={id}>
            <StyledContainer fluid className="testimonials-height" />
            <div
              className="mb-5 text-center w-100"
              style={{
                position: "absolute",
                top: "10%",
                color: "white",
                padding: "0 20px",
                marginBottom: "30px",
              }}
            >
              <span className="decoro-small decoro">Testimonials</span>
              <h2 className="titolo-small titolo">
                Cosa dicono i nostri clienti
              </h2>
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
                <FontAwesomeIcon icon={faStar} color="#c1a35f" size="2x" />
                <FontAwesomeIcon icon={faStar} color="#c1a35f" size="2x" />
                <FontAwesomeIcon icon={faStar} color="#c1a35f" size="2x" />
                <FontAwesomeIcon icon={faStar} color="#c1a35f" size="2x" />
                <FontAwesomeIcon icon={faStar} color="#c1a35f" size="2x" />
            </div>
            <Carousel.Caption>
              <p className="testimone-text">{text}</p>
              <p className="testimone">{testimone}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

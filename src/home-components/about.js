import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSpoon } from '@fortawesome/free-solid-svg-icons'

export default function About({id}) {
  return (
    <Container id={id}>
      <div className='text-center mb-5'>

      <span className='decoro-small decoro'>Scopri</span>
      <h2 className='titolo-small titolo'>About</h2>
      <div className='d-flex justify-content-center'>
     <div className='spoon-line'></div> <FontAwesomeIcon className="spoon" icon={faSpoon} color='#c1a35f' size="2x"/>  <div className='spoon-line'></div>
      </div>
   
      </div>
      <Row>
    
        <Col lg={6}>
          <p className='about-text'>
            Agriturismo Rioxoris di Eraldo e Bianca, nato nel ’98, grazie
            all’amore ed il calore familiare; ti fara` riscoprire un ambiente
            casereccio, in cui potrai immergerti nella natura del Campidano con
            i nostri animali e ti farà scoprire i sapori e gli usi del mondo
            rurale sardo. Ritrova qui i sapori originali della Sardegna.
            Prodotti genuini freschi e naturali, piatti prelibati creati con
            attenzione e cura. Immerso nel verde del Campidano, in provincia di
            Oristano, Rioxoris sorge in un'ampia distesa agricola, dove lo
            sguardo spazia dal Monte Arci al Monte Linas e Monte Arcuentu.
            Grazie alla sua posizione è possibile raggiungere in una ventina di
            minuti le splendide spiagge della Costa Verde come Pistis e Torre
            dei Corsari, oppure visitare la splendida laguna di Marceddì.
          </p>
        </Col>
        <Col lg={6}>
          <img className="d-block w-100" src="./Images/about/_DSC6022.jpg" alt="About Agriturismo Rioxoris" />
        </Col>
      </Row>
    </Container>
  );
}

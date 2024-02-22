import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { useState, useEffect } from "react";
const image = "./Images/counter-bg.jpg";

const StyledContainer = styled(Container)`
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 769px){
    height: 130vh;
    
  }
  height:500px;
  padding: 0;
  color: white;
`;
export const StyledOverlay = styled(Container)`
 
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
`;
export default function Counter() {

  const [counter, setCounter] = useState(0)

    
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((count) => (count < 100 ? count + 1 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);
    
   
  return (
    <StyledContainer fluid>
      <StyledOverlay className="d-flex justify-content-center align-items-center" fluid>
        <Row className="d-flex justify-content-center d-block w-100">
          <Col md={3}>
            <div className="d-flex flex-column text-center">
              <span className="tangerine">Piatti</span>
              <h3>
                <span className="counter">{counter}</span>
                <sup className="mb-5">%</sup>
              </h3>
              <p className="serif">Freschi</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column text-center">
              <span className="tangerine">Piatti</span>
              <h3>
                <span className="counter">{counter}</span>
                <sup className="mb-5">%</sup>
              </h3>
              <p className="serif">Deliziosi</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column text-center">
              <span className="tangerine">Bevande</span>
              <h3>
                <span className="counter">{counter}</span>
                <sup className="mb-5">%</sup>
              </h3>
              <p className="serif">Incluse</p>
            </div>
          </Col>
          <Col md={3}>
            <div className="d-flex flex-column text-center">
              <span className="tangerine">Clienti</span>
              <h3>
                <span className="counter">{counter}</span>
                <sup className="mb-5">%</sup>
              </h3>
              <p className="serif">Soddisfatti</p>
            </div>
          </Col>
        </Row>
      </StyledOverlay>
    </StyledContainer>
  );
}

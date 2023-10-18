import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import StyledButton from "./components/ButtonRio";
import * as formik from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";

const StyledContainer = styled(Container)`
  background-color: #222;
  color: white;
  padding: 100px;
  text-align: center;
`;


export default function RioForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    nome: yup.string().required("devi inserire il tuo nome e cognome"),
    tel: yup.number().required("inserisci il tuo contatto telefonico"),
    ospiti: yup.number().required("inserisci il numero di ospiti"),
    email: yup.string().required("inserisci il tuo contatto email"),
    selected: yup
      .string()
      .required("seleziona il tipo di servizio da te richiesto"),
  });
  return (
    <StyledContainer fluid>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          nome: "",
          tel: "",
          ospiti: "",
          email: "",
          selected: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form>
            <div className="mb-5">
            <span className="decoro-small decoro">Effetua</span>
            <h2 className="titolo-small titolo">Una Prenotazione</h2>
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
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="inserisci il tuo nome"
                    className="mb-3"
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="number"
                    placeholder="inserisci il tuo contatto telefonico"
                    name="tel"
                    value={values.tel}
                    onChange={handleChange}
                    isInvalid={!!errors.tel}
                    className="mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Numero ospiti"
                    name="ospiti"
                    value={values.ospiti}
                    onChange={handleChange}
                    isInvalid={!!errors.ospiti}
                    className="mb-3"
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    className="mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    isInvalid={!!errors.date}
                    className="mb-3"
                  />
                </Col>
                <Col md={6}>
                  <Form.Select
                    name="selected"
                    value={values.selected}
                    onChange={handleChange}
                    isInvalid={!!errors.selected}
                    aria-label="Select service"
                    className="mb-3"
                  >
                    <option>Scegli tipo di prenotazione</option>
                    <option value="1">Cena</option>
                    <option value="2">Pranzo</option>
                    <option value="3">Pensione Completa</option>
                    <option value="3">Mezza Pensione</option>
                    <option value="3">Bed & Breakfast</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form.Group>
            <Row>
              <Col md="12">
                <Form.Group
                  className="mb-4"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={3} className="p-5" />
                </Form.Group>
                <StyledButton
                  onClick={handleSubmit}
                  type="submit"
                  text="invia"
                  bcolor={"#fff"}
                  color={"#c1a35f"}
                  brcolor={"#c1a35f"}
                  hbcolor={"#c1a35f"}
                  hcolor={"#fff"}
                  size={"15px 35px"}
                />
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
}

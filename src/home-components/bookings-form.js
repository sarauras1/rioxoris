import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/buttonRio";
import { Formik } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpoon } from "@fortawesome/free-solid-svg-icons";

const StyledContainer = styled(Container)`
  background-color: #222;
  color: white;
  text-align: center;
  @media (min-width: 768px) {
    padding: 100px;
  }
  @media (max-width: 767px) {
    padding: 50px;
  }
`;

export default function BookingsForm({ id }) {
  const schema = yup.object().shape({
    name: yup.string().required("devi inserire il tuo nome e cognome"),
    tel: yup.number().required("inserisci il tuo contatto telefonico"),
    ospiti: yup.number().required("inserisci il numero di ospiti"),
    email: yup.string().required("inserisci il tuo contatto email"),
    selected: yup
      .string()
      .required("seleziona il tipo di servizio da te richiesto"),
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <StyledContainer fluid>
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          schema
            .validate(values, { abortEarly: false }) // Validate using Yup schema
            .then(() => {
              // Validation succeeded, proceed with form submission
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", values }),
              })
                .then(() => {
                  alert("Success!");
                  setSubmitting(false);
                })
                .catch((error) => {
                  alert(error);
                  setSubmitting(false);
                });
            })
            .catch((validationErrors) => {
              // Handle validation errors (e.g., display them to the user)
              console.error("Validation errors:", validationErrors);
              setSubmitting(false);
            });
        }}
        initialValues={{
          name: "",
          tel: "",
          number: "",
          email: "",
          selected: "",
          textarea: ""
        }}
      >
        {({ handleChange, values, errors }) => (
          <Form id={id} name="booking" method="post" data-netlify="true">
          <input type="hidden" name="form-name" value="booking" />
            <div className="mb-5">
              <span className="decoro-small decoro">Effettua</span>
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
              <p className="m-auto">
                Grazie per aver scelto l' agriturismo Rioxoris. Per
                prenotazioni, la preghiamo di compilare la tabella sottostante.
                La ricontatteremo al più presto per confermare.
              </p>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Row>
                <Col md={6}>
                  <Form.Control
                    type="text"
                    name="name"
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
                    isInvalid={!!errors.name}
                    className="mb-3"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    placeholder="Numero ospiti"
                    name="number"
                    value={values.ospiti}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
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
                    isInvalid={!!errors.name}
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
                    isInvalid={!!errors.name}
                    className="mb-3"
                  />
                </Col>
                <Col md={6}>
                  <Form.Select
                    name="selected"
                    value={values.selected}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    aria-label="Select service"
                    className="mb-3"
                  >
                    <option>Scegli tipo di prenotazione</option>
                    <option value="Cena">Cena</option>
                    <option value="Pranzo">Pranzo</option>
                    <option value="Pensione Completa">Pensione Completa</option>
                    <option value="Mezza Pensione">Mezza Pensione</option>
                    <option value="Bed & Breakfast">Bed & Breakfast</option>
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
                  <Form.Control as="textarea" rows={3} className="p-5" type="text" name="textarea"/>
                </Form.Group>
                <Button
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

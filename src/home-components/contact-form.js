import Form from "react-bootstrap/Form";
import { Container, Row, Col, FormLabel } from "react-bootstrap";
import Button from "../components/buttonRio";
import * as formik from "formik";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
  faSpoon,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactForm({ id }) {
  const { Formik } = formik;

  const schema = yup.object().shape({
    nome: yup.string().required("devi inserire il tuo nome e cognome"),
    email: yup.string().required("inserisci il tuo contatto email"),
    subject: yup.string().required("inserisci il  soggetto del messaggio"),
    textarea: yup.string().required("inserisci il tuo messaggio"),
  });
  return (
    <Container>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          nome: "",
          email: "",
          subject: "",
          textarea: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form id={id}>
            <div className="mb-5 text-center">
              <span className="decoro-small decoro">Per Qualsiasi Dubbio</span>
              <h2 className="titolo-small titolo">Contattaci</h2>
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
            <Row>
              <Col lg={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FormLabel>Inserisci il tuo nome</FormLabel>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={values.name}
                    onChange={handleChange}
                    isInvalid={!!errors.name}
                    placeholder="Mario Rossi"
                    className="mb-3"
                  />

                  <FormLabel>Inserisci la tua email</FormLabel>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    className="mb-3"
                  />

                  <FormLabel>Inserisci il soggetto del messaggio</FormLabel>
                  <Form.Control
                    type="soggetto"
                    placeholder="pranzo con amici"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    className="mb-3"
                  />

                  <FormLabel>Scrivi qui il tuo messaggio</FormLabel>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      type="text"
                      value={values.textarea}
                      onChange={handleChange}
                      name="textarea"
                      rows={3}
                      className="p-5"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button
                      onClick={handleSubmit}
                      type="submit"
                      text="invia messaggio"
                      color={"black"}
                      brcolor={"black"}
                      bcolor={"#fff"}
                      hbcolor={"black"}
                      hcolor={"#fff"}
                      size={"15px 35px"}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <div className="p-2 m-5">
                  <span className="contatto">CONTATTO</span>
                  <div className="mb-3"></div>
                  <p className="w-100">
                    Grazie per aver scelto agriturismo Rixoris. Inviateci un
                    messaggio per qualsiasi dubbio riguardante i nostri servizi.
                    La ricontatteremo al più presto possibile. Se dopo 24 ore
                    non ha ancora ricevuto risposta, chiamate telefonicamente al
                    numero elencato qui sotto. Normalmente rispondiamo più
                    velocemente ai messaggi inviati tramite WhatsApp.
                  </p>
                  <ul className="contatto-info">
                    <li className="mb-2">
                      <span className="me-2">
                        <FontAwesomeIcon
                          icon={faPhone}
                          color="black"
                          size="1x"
                        />
                      </span>
                      +39 329 745 1720
                    </li>
                    <li className="mb-2">
                      <span className="me-2">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          color="black"
                          size="1x"
                        />
                      </span>
                      martino@rioxoris.it
                    </li>
                    <li className="mb-2">
                      <span className="me-2">
                        <FontAwesomeIcon
                          icon={faMapMarker}
                          color="black"
                          size="1x"
                        />
                      </span>
                      Oristano
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

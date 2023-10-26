import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import StyledButton from "../components/buttonRio";
import * as formik from "formik";
import * as yup from "yup";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  background-color: #222;
  color: white;
  padding: 100px;
  text-align: center;
`;

export default function SignIn() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    nome: yup.string().required("devi inserire il tuo nome e cognome"),
    tel: yup.number().required("inserisci la tua password"),
  });
  return (
    <StyledContainer>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          nome: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form>
            <Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
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
                    type="password"
                    placeholder="inserisci la tua password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    className="mb-3"
                  />
                </Col>
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
              </Form.Group>
            </Row>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
}

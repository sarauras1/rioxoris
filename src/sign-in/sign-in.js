import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/buttonRio";
import { Formik } from "formik";
import * as yup from "yup";
import { signInAuth, authStateChanges } from "../utils/firebase";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function SignIn() {
  const [currentUser, setCurrentUser] = useState(null);
  const isLoggedIn = currentUser !== null;
  useEffect(() => {
    const unsubscribe = authStateChanges((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  const schema = yup.object().shape({
    email: yup.string().required("devi inserire il tuo nome e cognome"),
    password: yup.string().required("inserisci la tua password"),
  });

  const submitFormik = async (values) => {
    const { email, password } = values;
    try {
      const { user } = await signInAuth(email, password);
      return user;
    } catch (error) {
      console.log("error from form admin", error);
    }
  };
  return isLoggedIn ? (
    <Navigate to="/secret" replace />
  ) : (
    <Container>
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            const { auth } = await submitFormik(values);
            console.log("sign in auth", auth);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className="mb-3">
                <Col md={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="inserisci la tua email"
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
                <Button
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
    </Container>
  );
}

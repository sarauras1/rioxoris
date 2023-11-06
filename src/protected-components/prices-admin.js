import { Button, Form, Table, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import {
  getPrezziFromFirestore,
  updatePricesFromFirestore,
} from "../utils/firebase";

export default function PriceAdmin() {
  const [data, setData] = useState([]);
  const GetPrezzi = async () => {
    const prezzi = await getPrezziFromFirestore();

    setData(prezzi);
  };
  useEffect(() => {
    GetPrezzi();
  }, []);

  const schema = yup.object().shape({
    "prezzo bassa b&b": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo media b&b": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo alta b&b": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo bassa mezza": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo media mezza": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo alta mezza": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo bassa completa": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo media completa": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo alta completa": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo bassa 24": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo media 24": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),

    "prezzo alta 24": yup
      .string()
      .required("required")
      .matches("^[0-9]*$", "inserisci solo valori numerici"),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={{
          "prezzo bassa b&b": "",
          "prezzo media b&b": "",
          "prezzo alta b&b": "",
          "prezzo bassa mezza": "",
          "prezzo media mezza": "",
          "prezzo alta mezza": "",
          "prezzo bassa completa": "",
          "prezzo media completa": "",
          "prezzo alta completa": "",
          "prezzo bassa 24": "",
          "prezzo media 24": "",
          "prezzo alta 24": "",
        }}
        onSubmit={async (values, actions) => {
          try {
            const res = await updatePricesFromFirestore(values);
            if (res === "perfect") {
              actions.setSubmitted(true);
            } else {
              console.log("error");
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <Container className="mt-5">
            <h3 className="mb-5">Usa la tabella sottostante per modificare i prezzi</h3>
          <Form onSubmit={handleSubmit}>
            {isSubmitting && (
              <Container className="alert-container">
                <Alert variant="success">Dati salvati con successo</Alert>
              </Container>
            )}
            <Table>
              <thead>
                <tr>
                  <th>--------------</th>
                  <th>Stagione Bassa</th>
                  <th>Stagione Media</th>
                  <th>Stagione Alta</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>B&B</td>
                  {data.length
                    ? data
                        .filter((item) => item.id.includes("&"))
                        .map((item) => item.prezzi)
                        .sort((a, b) => a.index - b.index)
                        .map(({ stagione, prezzo }) => (
                          <td key={stagione}>
                            <Form.Control
                              id={stagione}
                              onChange={handleChange}
                              type="text"
                              name={`prezzo ${stagione} b&b`}
                              value={values[`prezzo ${stagione} b&b`]}
                              isInvalid={!!errors[`prezzo ${stagione} b&b`]}
                              placeholder={prezzo}
                            ></Form.Control>
                            {errors[`prezzo ${stagione} b&b`] &&
                              touched[`prezzo ${stagione} b&b`] && (
                                <p className="error">
                                  {errors[`prezzo ${stagione} b&b`]}
                                </p>
                              )}
                          </td>
                        ))
                    : []}
                </tr>

                <tr>
                  <td>Mezza Pensione</td>
                  {data.length
                    ? data
                        .filter((item) => item.id.includes("mezza"))
                        .map((item) => item.prezzi)
                        .sort((a, b) => a.index - b.index)
                        .map(({ stagione, prezzo }) => (
                          <td key={stagione}>
                            <Form.Control
                              id={stagione}
                              onChange={handleChange}
                              type="text"
                              name={`prezzo ${stagione} mezza`}
                              value={values[`prezzo ${stagione} mezza`]}
                              placeholder={prezzo}
                            ></Form.Control>
                            {errors[`prezzo ${stagione} b&b`] &&
                              touched[`prezzo ${stagione} b&b`] && (
                                <p className="error">
                                  {errors[`prezzo ${stagione} b&b`]}
                                </p>
                              )}
                          </td>
                        ))
                    : []}
                </tr>

                <tr>
                  <td>Pensione Completa</td>
                  {data.length
                    ? data
                        .filter((item) => item.id.includes("completa"))
                        .map((item) => item.prezzi)
                        .sort((a, b) => a.index - b.index)
                        .map(({ stagione, prezzo }) => (
                          <td key={stagione}>
                            <Form.Control
                              id={stagione}
                              onChange={handleChange}
                              type="text"
                              name={`prezzo ${stagione} completa`}
                              value={values[`prezzo ${stagione} completa`]}
                              placeholder={prezzo}
                            ></Form.Control>
                            {errors[`prezzo ${stagione} b&b`] &&
                              touched[`prezzo ${stagione} b&b`] && (
                                <p className="error">
                                  {errors[`prezzo ${stagione} b&b`]}
                                </p>
                              )}
                          </td>
                        ))
                    : []}
                </tr>
                <tr>
                  <td>Bambini fino ai 24 mesi</td>

                  {data.length
                    ? data
                        .filter((item) => item.id.includes("24"))
                        .map((item) => item.prezzi)
                        .sort((a, b) => a.index - b.index)
                        .map(({ stagione, prezzo }) => (
                          <td key={stagione}>
                            <Form.Control
                              id={stagione}
                              onChange={handleChange}
                              type="text"
                              name={`prezzo ${stagione} 24`}
                              value={values[`prezzo ${stagione} 24`]}
                              placeholder={prezzo}
                            ></Form.Control>
                            {errors[`prezzo ${stagione} b&b`] &&
                              touched[`prezzo ${stagione} b&b`] && (
                                <p className="error">
                                  {errors[`prezzo ${stagione} b&b`]}
                                </p>
                              )}
                          </td>
                        ))
                    : []}
                </tr>
                <tr>
                  <td>Bambini fino agli 8 anni</td>
                  <td>Sconto 50%</td>
                  <td>Sconto 50%</td>
                  <td>Sconto 50%</td>
                </tr>
                <tr>
                  <td>Bambini dai 9 ai 12 anni</td>
                  <td>Sconto 30%</td>
                  <td>Sconto 30%</td>
                  <td>Sconto 30%</td>
                </tr>
              </tbody>
            </Table>
            <Container fluid className="d-flex justify-content-around">
              <Link to="/">Torna al sito</Link>
              <Button type="submit" variant="primary">
                salva
              </Button>
            </Container>
          </Form>
          </Container>
        )}
      </Formik>
    </>
  );
}

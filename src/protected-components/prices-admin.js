import { Button, Form, Table } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useState, useEffect } from "react";
import { getPrezziFromFirestore, updatePricesFromFirestore } from "../utils/firebase";

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
    "prezzo bassa b&b": yup.string(),
    "prezzo media b&b": yup.string(),
    "prezzo alta b&b": yup.string(),
    "prezzo bassa mezza": yup.string(),
    "prezzo media mezza": yup.string(),
    "prezzo alta mezza": yup.string(),
    "prezzo bassa completa": yup.string(),
    "prezzo media completa": yup.string(),
    "prezzo alta completa": yup.string(),
    "prezzo bassa 24": yup.string(),
    "prezzo media 24": yup.string(),
    "prezzo alta 24": yup.string()
  });
  return (
    <>
      <Formik
      
        initialValues={{
          "prezzo bassa b&b":"",
          "prezzo media b&b":"",
          "prezzo alta b&b":"",
          "prezzo bassa mezza":"",
          "prezzo media mezza":"",
          "prezzo alta mezza":"",
          "prezzo bassa completa":"",
          "prezzo media completa":"",
          "prezzo alta completa":"",
          "prezzo bassa 24":"",
          "prezzo media 24":"",
          "prezzo alta 24":"",
        
        }}
        onSubmit={async (values) => {
          try {
           await updatePricesFromFirestore(values)
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
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
                        .map((item) => {
                          const prezzi = item.prezzi.data;
                          return prezzi.map(({stagione, prezzo}) => (
                           
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
                            </td>
                      
                          ));
                        })
                    : [] }
                </tr>
                <tr>
                  <td>Mezza Pensione</td>
                  {data.length
                    ? data
                        .filter((item) => item.id.includes("mezza"))
                        .map((item) => {
                          const prezzi = item.prezzi.data;
                          return prezzi.map(({stagione, prezzo}) => (
                            <td key={stagione}>
                              <Form.Control
                                 id={stagione}
                                 onChange={handleChange}
                                 type="text"
                                 name={`prezzo ${stagione} mezza`}
                                 value={values[`prezzo ${stagione} mezza`]}
                                 
                                placeholder={prezzo}
                              ></Form.Control>
                            </td>
                          ));
                        })
                    : []}
                </tr>
                <tr>
                  <td>Pensione Completa</td>
                  {data.length
                    ? data
                        .filter((item) => item.id.includes("completa"))
                        .map((item) => {
                          const prezzi = item.prezzi.data;
                          return prezzi.map(({stagione, prezzo}) => (
                            <td key={stagione}>
                              <Form.Control
                                 id={stagione}
                                 onChange={handleChange}
                                 type="text"
                                 name={`prezzo ${stagione} completa`}
                                 value={values[`prezzo ${stagione} completa`]}
                                
                                placeholder={prezzo}
                              ></Form.Control>
                            </td>
                          ));
                        })
                    : []}
                </tr>
                <tr>
                  <td>Bambini fino ai 24 mesi</td>

                  {data.length
                    ? data
                        .filter((item) => item.id.includes("24"))
                        .map((item) => {
                          const prezzi = item.prezzi.data;
                          return prezzi.map(({stagione, prezzo}) => (
                            <td key={stagione}>
                              <Form.Control
                                 id={stagione}
                                 onChange={handleChange}
                                 type="text"
                                 name={`prezzo ${stagione} 24`}
                                 value={values[`prezzo ${stagione} 24`]}
                                 
                                placeholder={prezzo}
                              ></Form.Control>
                            </td>
                          ));
                        })
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
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

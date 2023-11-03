import { Container, Table } from "react-bootstrap";
import { getPrezziFromFirestore } from "../utils/firebase";
import { useEffect, useState } from "react";

export default function Prezzi({ id }) {
  const [data, setData] = useState([]);
  const GetPrezzi = async () => {
    const prezzi = await getPrezziFromFirestore();

    setData(prezzi);
  };
  useEffect(() => {
    GetPrezzi();
  }, []);
 

 
  return (
    <>
      <Container id={id}>
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

              {
              data.length
              ? data
                  .filter((item) => item.id.includes("&"))
                  .map((item) => {
                    var prezzi = item.prezzi.data; console.log(prezzi)
                    return prezzi.map(({stagione, prezzo}) => (
                    <td key={stagione}>{prezzo}</td>
                    ));
                  })
              : []
              }
            </tr>
            <tr>
              <td>Mezza Pensione</td>
              {
              data.length
              ? data
                  .filter((item) => item.id.includes("mezza"))
                  .map((item) => {
                    var prezzi = item.prezzi.data;
                    return prezzi.map(({stagione, prezzo}) => (
                    <td key={stagione}>{prezzo}</td>
                    ));
                  })
              : []
              }
            </tr>
            <tr>
              <td>Pensione Completa</td>
              {
              data.length
              ? data
                  .filter((item) => item.id.includes("completa"))
                  .map((item) => {
                    var prezzi = item.prezzi.data;
                    return prezzi.map(({stagione, prezzo}) => (
                    <td key={stagione}>{prezzo}</td>
                    ));
                  })
              : []
              }
            </tr>
            <tr>
              <td>Bambini fino ai 24 mesi</td>
              {
              data.length
              ? data
                  .filter((item) => item.id.includes("24"))
                  .map((item) => {
                    var prezzi = item.prezzi.data;
                    return prezzi.map(({stagione, prezzo}) => (
                    <td key={stagione}>{prezzo}</td>
                    ));
                  })
              : []
              }
            </tr>
            <tr>
              <td>Bambini Fino agli 8 anni</td>
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
      </Container>
    </>
  );
}

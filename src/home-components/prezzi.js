import { Container, Table } from "react-bootstrap";

export default function Prezzi({ id }) {
  return (
    <>
      <Container id={id}>
        <Table>
          <thead>
            <tr>
              <th>Stagione Bassa</th>
              <th>Stagione Media</th>
              <th>Stagione Alta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B&B</td>
              <td>€ 35,00</td>
              <td>€ 35,00</td>
              <td>€ 40,00</td>
            </tr>
            <tr>
              <td>Mezza Pensione</td>
              <td>€ 65,00</td>
              <td>€ 65,00</td>
              <td>€ 70,00</td>
            </tr>
            <tr>
              <td>Pensione Completa</td>
              <td>€ 80,00</td>
              <td>€ 85,00</td>
              <td>€ 95,00</td>
            </tr>
            <tr>
              <td>Bambini fino ai 24 mesi</td>
              <td>€ 8,00</td>
              <td>€ 9,00</td>
              <td>€ 10,00</td>
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

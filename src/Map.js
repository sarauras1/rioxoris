/* eslint-disable react/style-prop-object */
import { Container } from "react-bootstrap";
import Iframe from "react-iframe";
export default function AddressMap() {
  return (
    <Container fluid>
      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6142.910211623179!2d8.687955!3d39.661976!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sit!4v1693496381691!5m2!1sen!2sit"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></Iframe>
    </Container>
  );
}

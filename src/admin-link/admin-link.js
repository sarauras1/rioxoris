import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export default function () {
  return (
    <>
      <Container className="admin-container" fluid>
        <Link className="admin-link" to="/login">
          Admin
        </Link>
        <Outlet/>
      </Container>
    </>
  );
}

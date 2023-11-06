import { Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { authStateChanges, signoutUser } from "../utils/firebase";

export default function () {
  const [currentUser, setCurrentUser] = useState(null);
  const isLogged = currentUser !== null;

  useEffect(() => {
    const unsubscribe = authStateChanges((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <>
      <Container className="admin-container" fluid>
        {isLogged ? (
          <>
            <span onClick={signoutUser} className="admin-link">
              Logout
            </span>
          </>
        ) : (
          <Link className="admin-link" to="/login">
            Login
          </Link>
        )}
        <Outlet />
      </Container>
    </>
  );
}

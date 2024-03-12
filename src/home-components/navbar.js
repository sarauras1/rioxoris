import styled from "styled-components";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Navigation({ expanded, setExpanded }) {
  const [navBg, setNavBg] = useState("transparent");

  const StyledNavbar = styled(Navbar)`
    background-color: ${navBg}!important;
    position: fixed;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 80px;
  `;

  const OnScrollHandler = () => {
    if (window.scrollY >= 500) {
      setNavBg("rgba(0, 0, 0, 0.8)");
    } else {
      setNavBg("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", OnScrollHandler);
    return () => {
      window.removeEventListener("scroll", OnScrollHandler);
    };
  }, []);

  return (
    <StyledNavbar
      onScroll={OnScrollHandler}
      bg="dark"
      data-bs-theme="dark"
      key="md"
      expand="md"
      expanded={expanded}
      className="mb-3 bg-body-tertiary"
    >
      <Container fluid className="nav-container">
        <Navbar.Brand href="#" className="ms-3">
          <img className="logo" src="./rioxiorislogo.png" alt="Rioxoris Logo" />
        </Navbar.Brand>
        {expanded ? (
          <span
            aria-hidden="true"
            className="me-4 close-button"
            onClick={() => setExpanded(false)}
          >
            &times;
          </span>
        ) : (
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            className="me-3"
          />
        )}

        <Navbar.Collapse
          className={`${expanded? 'when-collapses text-center w-100': ''}`}
          style={{
            backgroundColor: `${expanded ? navBg : "transparent"}`,
          
          }}
        >
          <Nav
            activeKey="/home"
            className="justify-content-end flex-grow-1 pe-3 nav-links-container me-auto"
          >
            <Nav.Link
              className={`${expanded? 'line nav-link': 'nav-link'}`}
              href="\"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${expanded? 'line nav-link': 'nav-link'}`}
              href="#about"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              className={`${expanded? 'line nav-link': 'nav-link'}`}
              href="#prenota"
              onClick={() => setExpanded(false)}
            >
              Prenota
            </Nav.Link>
            <Nav.Link
              className={`${expanded? 'line nav-link': 'nav-link'}`}
              href="#galleria"
              onClick={() => setExpanded(false)}
            >
              Galleria
            </Nav.Link>
            <Nav.Link
              className={`${expanded? 'line nav-link': 'nav-link'}`}
              href="#camere"
              onClick={() => setExpanded(false)}
            >
              Camere
            </Nav.Link>
            <Nav.Link
              className={`${expanded? 'line nav-link': 'nav-link'}`}
              href="#prezzi"
              onClick={() => setExpanded(false)}
            >
              Prezzi
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="#contatto"
              onClick={() => setExpanded(false)}
            >
              Contatto
            </Nav.Link>
            <Outlet />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

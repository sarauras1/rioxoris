import styled from "styled-components";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";


export default function Navigation() {
 
  const [navBg, setNavBg] = useState("transparent");
  const StyledNavbar = styled(Navbar)`
      background-color: ${navBg}!important;
      position: fixed;
      top: 0;
      z-index: 9999;
      width: 100%;
      height: 80px;
    `;
 
  const OnScrollHandler = () => {
    window.scrollY >= 500 ? setNavBg("rgba(0, 0, 0, 0.8)") : setNavBg("transparent");
   
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
      className="mb-3"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="logo" src="./rioxiorislogo.png" alt="Rioxoris Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
            Agriturismo Rioxoris
            </Offcanvas.Title>
           
          </Offcanvas.Header>
         
          <Offcanvas.Body>
            <Nav activeKey="/home" className="justify-content-end flex-grow-1 pe-3 nav-links-container">
              <Nav.Link className="nav-link" href="\">Home</Nav.Link>
              <Nav.Link className="nav-link" href="#about">About</Nav.Link>
              <Nav.Link className="nav-link" href="#prenota">Prenota</Nav.Link>
              <Nav.Link className="nav-link" href="#galleria">Galleria</Nav.Link>
              <Nav.Link className="nav-link" href="#camere">Camere</Nav.Link>
              <Nav.Link className="nav-link" href="#prezzi">Prezzi</Nav.Link>
              <Nav.Link className="nav-link" href="#contatto">Contatto</Nav.Link>
              <Outlet/>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </StyledNavbar>
  );
}



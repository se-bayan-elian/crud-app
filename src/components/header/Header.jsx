import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header >
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
           <Nav className="ms-auto d-flex gap-2" >
            <NavLink  className="nav-link"  to="/stores">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </Nav>
        </Container>

      </Navbar>
    </header>
  );
};

export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

import "../stylesheets/navbar.css";

export default function NavbarComponent({setPageContent}) {
  return (
    <>
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => setPageContent("home")}>Home</Nav.Link>
                    <Nav.Link onClick={() => setPageContent("settings")}>Settings</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

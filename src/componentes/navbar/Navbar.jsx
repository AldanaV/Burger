import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'




function NavbarPrincipal({ onShow, cantidad, total }) {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="/">Burger Taster</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/menu">Menú</Nav.Link>
                <Nav.Link href="/locales">Locales</Nav.Link>
            </Nav>

            <Nav className="ms-auto">
            <Button onClick={onShow} variant="outline-success">
                <i className="bi bi-cart3"></i> {cantidad} - ${total.toLocaleString('es-AR')}
            </Button>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavbarPrincipal;


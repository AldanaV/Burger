import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'


function NavbarPrincipal() {
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
                <Nav.Link className='carrito' href='/carrito'><i class="bi bi-cart3"></i> 0 - $0,00</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavbarPrincipal;


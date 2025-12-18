import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Navbar.css'

// Para que funcione el carrito en todas las paginas, cambiamos el "href" que esto hacia que se recargue toda la pag
//CAMBIOS ESTAS LINEAS DE CODIGO POR LAS ACTUALES.

//<Navbar.Brand href="/">Burger Taster</Navbar.Brand>
//<Nav.Link href="/menu">Menú</Nav.Link> 
// <Nav.Link href="/locales">Locales</Nav.Link>


function NavbarPrincipal({ onShow, cantidad, total }) {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand as={Link} to="/">Burger Taster</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/menu">Menú</Nav.Link>
                <Nav.Link as={Link} to="/locales">Locales</Nav.Link>
            </Nav>

            <Nav className="ms-auto">
            <Button onClick={onShow} variant="outline-danger">
                <i className="bi bi-cart3"></i> {cantidad} - ${total.toLocaleString('es-AR')}
            </Button>
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default NavbarPrincipal;


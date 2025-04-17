import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

import NavbarPrincipal from './componentes/navbar/Navbar';
import Home from './componentes/home/home';
import Menu from './componentes/menu/Menu';
import Locales from './componentes/locales/Locales';



function App() {

  const [carrito, setCarrito] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...carrito, producto]);
    setShow(true);
  };

  const eliminarDelCarrito = (index) => {
    const nuevo = [...carrito];
    nuevo.splice(index, 1);
    setCarrito(nuevo);
  };

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div>
        <Router>
          <NavbarPrincipal
            onShow={handleShow} 
            cantidad={carrito.length} 
            total={total}
            carrito={carrito}
          />

          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/menu' element={<Menu carrito={carrito} agregarAlCarrito={agregarAlCarrito} />} />
            <Route path='/locales' Component={Locales} />
          </Routes>

          <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {carrito.length === 0 ? (
              <p>El carrito está vacío.</p>
            ) : (
              <ul className="list-group">
                {carrito.map((producto, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {producto.nombre} - ${producto.precio}
                    <Button variant="danger" size="sm" onClick={() => eliminarDelCarrito(index)}>Eliminar</Button>
                  </li>
                ))}
              </ul>
            )}
            <hr />
            <h5>Total: ${total}</h5>
            <Button className='btn-compra'>Confirmar compra</Button>
          </Offcanvas.Body>
        </Offcanvas>


        </Router>
    </div>
  )
}

export default App

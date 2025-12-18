import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

import NavbarPrincipal from './componentes/navbar/Navbar';
import Home from './componentes/home/home';
import Menu from './componentes/menu/Menu';
import Locales from './componentes/locales/Locales';

//Tenemos que ponerlo acá también para que aparezca en el navbar
const productos = [
  { id: 1, nombre: 'Missouri 1.0', precio: 8500 },
  { id: 2, nombre: 'Missouri 2.0', precio: 10499 },
  { id: 3, nombre: 'Missouri 3.0', precio: 11999 },
  { id: 4, nombre: 'Texas 1.0', precio: 9499 },
  { id: 5, nombre: 'Texas 2.0', precio: 11499 },
  { id: 6, nombre: 'Texas 3.0', precio: 12999 },
  { id: 7, nombre: 'Montana 1.0', precio: 8999 },
  { id: 8, nombre: 'Montana 2.0', precio: 10999 },
  { id: 9, nombre: 'Montana 3.0', precio: 12499 },
  { id: 10, nombre: 'Ohio 1.0', precio: 9499 },
  { id: 11, nombre: 'Ohio 2.0', precio: 11499 },
  { id: 12, nombre: 'Ohio 3.0', precio: 12999 },
];

function App() {
    //Lo hacemos acá para que el carrito sea global
  const [carrito, setCarrito] = useState([]);
  const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const agregarAlCarrito = (id) => {
    const producto = productos.find((p) => p.id === id);
    if(producto){
      setCarrito((prev) => [...prev, producto]); //"prev" es el valor anterior del estado de carrito antes de actualizarlo
      //setShow(true);                           los "..." se llaman operador spread y sirven para copiar todos los elementos del array carrito actual y agregar uno nuevo al final
    }
  };

  const eliminarDelCarrito = (index) => {
    const nuevo = [...carrito]; //En este caso usamos el "..." (operador spread) para copiar el contenido de carrito en nuevo
    nuevo.splice(index, 1); //para acá decirle a nuevo que le sacamos un producto e indice en especifico
    setCarrito(nuevo); //y actualizamos el estado con la copia modificada (si no lo hicieramos asi, tocariamos el array original que esta en el estado y eso puede causar errores )
  };

  const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

  return (
    <div>
        <Router>
          <NavbarPrincipal
            onShow={handleShow} 
            cantidad={carrito.length} //lenght para que recorra todo lo que tien carrito 
            total={total}
            carrito={carrito}
          />

          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/menu' element={<Menu carrito={carrito} agregarAlCarrito={agregarAlCarrito} eliminarDelCarrito={eliminarDelCarrito} total={total} abrirCarrito={handleShow} />} />
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

export default App;

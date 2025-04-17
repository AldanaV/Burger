import React, { useState } from 'react';
import './Menu.css';
import miss1 from '../imagenes/miss1.jpg';
import miss2 from '../imagenes/miss2.jpg';
import texas2 from '../imagenes/texas2.jpg';
import montana2 from '../imagenes/montana2.jpg';
import ohio2 from '../imagenes/ohio2.jpg';
import Footer from '../footer/Footer';
import { Button, Offcanvas } from 'react-bootstrap';

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

const Menu = ({ carrito, agregarAlCarrito, eliminarDelCarrito, total }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const agregarYMostrar = (id) => {
        agregarAlCarrito(id);
        setShow(true);
    
    };

    
    //const eliminarDelCarrito = (index) => {
    //const nuevoCarrito = [...carrito]; // los "..." se llaman operador spread y sirven para copiar todos los elementos del array carrito actual y agregar uno nuevo al final, sin modificar el original.
    //nuevoCarrito.splice(index, 1); //splice Modifica el array original. - Elimina 1 elemento a partir del índice que le pasás.
    //setCarrito(nuevoCarrito);
    //};

    //const total = carrito.reduce((acc, prod) => acc + prod.precio, 0); //reduce Suma los precios de todos los productos que hay en el carrito.

    return (
        <div className='container-principal-menu'>
        <div className='container-menu'>

        <div className='titulo-menu'>
            <h1>Menú</h1>
        </div>

        <div className='descuento'>
            <p>15% OFF en EFECTIVO</p>
        </div>

        <div className='container-burger'>
            <h2>Hamburguesas</h2>
            <p>¡Todas con papas incluidas!</p>
        </div>

        <section className='grid'>
            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={miss1} />
                    <div className='item-info'>
                        <p className='title'>Missouri 1.0</p>
                        <p className='description'>Carne x1, cheddar x2</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$10.000</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$8.500</p>
                        </div>
                        
                        <Button className='btn-agregar-miss' onClick={() => agregarYMostrar(1)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={miss2} />
                    <div className='item-info'>
                        <p className='title'>Missouri 2.0</p>
                        <p className='description'>Carne x2, cheddar x4</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$12.352</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$10.499</p>
                        </div>
                        
                        <Button className='btn-agregar-miss' onClick={() => agregarYMostrar(2)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={miss2} />
                    <div className='item-info'>
                        <p className='title'>Missouri 3.0</p>
                        <p className='description'>Carne x3, cheddar x6</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$14.117</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$11.999</p>
                        </div>
                        
                        <Button className='btn-agregar-miss' onClick={() => agregarYMostrar(3)}>
                            Agregar
                        </Button>
                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={texas2} />
                    <div className='item-info'>
                        <p className='title'>Texas 1.0</p>
                        <p className='description'>Carne, cheddar x2,</p>
                        <p className='description'>cebolla caramelizada</p>
                        <p className='description'>bacon y barbacoa</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$11.176</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$9.499</p>
                        </div>
                        
                        <Button className='btn-agregar' onClick={() => agregarYMostrar(4)}>
                            Agregar
                        </Button>
                        
                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={texas2} />
                    <div className='item-info'>
                        <p className='title'>Texas 2.0</p>
                        <p className='description'>Carne x2, cheddar x4,</p>
                        <p className='description'>cebolla caramelizada</p>
                        <p className='description'>bacon y barbacoa</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$13.529</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$11.499</p>
                        </div>
                        
                        <Button className='btn-agregar' onClick={() => agregarYMostrar(5)}>
                            Agregar
                        </Button>
                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={texas2} />
                    <div className='item-info'>
                        <p className='title'>Texas 3.0</p>
                        <p className='description'>Carne x3, cheddar x6,</p>
                        <p className='description'>cebolla caramelizada</p>
                        <p className='description'>bacon y barbacoa</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$15.294</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$12.999</p>
                        </div>

                        <Button className='btn-agregar' onClick={() => agregarYMostrar(6)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={montana2} />
                    <div className='item-info'>
                        <p className='title'>Montana 1.0</p>
                        <p className='description'>Carne, cheddar x2,</p>
                        <p className='description'>cebolla, tomate</p>
                        <p className='description'>lechuga y salsa BT</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$10.500</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$8.999</p>
                        </div>

                        <Button className='btn-agregar' onClick={() => agregarYMostrar(7)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={montana2} />
                    <div className='item-info'>
                        <p className='title'>Montana 2.0</p>
                        <p className='description'>Carne x2, cheddar x4,</p>
                        <p className='description'>cebolla, tomate</p>
                        <p className='description'>lechuga y salsa BT</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$12.941</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$10.999</p>
                        </div>

                        <Button className='btn-agregar' onClick={() => agregarYMostrar(8)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={montana2} />
                    <div className='item-info'>
                        <p className='title'>Montana 3.0</p>
                        <p className='description'>Carne x3, cheddar x6,</p>
                        <p className='description'>cebolla, tomate</p>
                        <p className='description'>lechuga y salsa BT</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$14.705</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$12.499</p>
                        </div>

                        <Button className='btn-agregar' onClick={() => agregarYMostrar(9)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={ohio2} />
                    <div className='item-info'>
                        <p className='title'>Ohio 1.0</p>
                        <p className='description'>Carne, cheddar x2,</p>
                        <p className='description'>cebolla crispy</p>
                        <p className='description'>bacon y barbacoa</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$11.176</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$9.499</p>
                        </div>

                        <Button className='btn-agregar' onClick={() => agregarYMostrar(10)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={ohio2} />
                    <div className='item-info'>
                        <p className='title'>Ohio 2.0</p>
                        <p className='description'>Carne x2, cheddar x4,</p>
                        <p className='description'>cebolla crispy</p>
                        <p className='description'>bacon y barbacoa</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$13.529</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$11.499</p>
                        </div>

                        <Button className='btn-agregar' onClick={() => agregarYMostrar(11)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

            <div className='container-img-burgas'>
                <div className='grid'> 
                    <img src={ohio2} />
                    <div className='item-info'>
                        <p className='title'>Ohio 3.0</p>
                        <p className='description'>Carne x3, cheddar x6,</p>
                        <p className='description'>cebolla crispy</p>
                        <p className='description'>bacon y barbacoa</p>
                        
                        <div>
                            <p className='price' style={{fontSize:'18px'}}>$15.294</p>
                            <p className='priceModificado' style={{fontSize:'18px'}}>$12.999</p>
                        </div>

                        <Button className='btn-agregar' onClick={() => agregarYMostrar(12)}>
                            Agregar
                        </Button>

                    </div>
                </div>
            </div>

        </section>
    </div>

    <div className='container-imagen'>
        <Footer />
    </div>

      {/* Offcanvas del carrito */}
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
    </div>
    );

};
export default Menu;

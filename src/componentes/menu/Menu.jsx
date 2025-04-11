import './Menu.css'
import miss1 from '../imagenes/miss1.jpg'
import miss2 from '../imagenes/miss2.jpg'
import texas2 from '../imagenes/texas2.jpg'
import montana2 from '../imagenes/montana2.jpg'
import ohio2 from '../imagenes/ohio2.jpg'
import Footer from '../footer/Footer'

const Menu = () => {
    return(
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
                            <img
                                src={miss1}
                            />
                            <div className='item-info'>
                                <p className='title'>Missouri 1.0</p>
                                <p className='description'>Carne x1, cheddar x2</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$10.000</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$8.500</p>
                                    </div>
                                        <div className='btn-agregar-miss'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={miss2}
                            />
                            <div className='item-info'>
                                <p className='title'>Missouri 2.0</p>
                                <p className='description'>Carne x2, cheddar x4</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$12.352</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$10.499</p>
                                    </div>
                                        <div className='btn-agregar-miss'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>


                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={miss2}
                            />
                            <div className='item-info'>
                                <p className='title'>Missouri 3.0</p>
                                <p className='description'>Carne x3, cheddar x6</p>
                                    <div className='prices'>
                                        <p className='price' style={{fontSize:'18px'}}>$14.117</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$11.999</p>
                                    </div>
                                        <div className='btn-agregar-miss'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={texas2}
                            />
                            <div className='item-info'>
                                <p className='title'>Texas 1.0</p>
                                <p className='description'>Carne, cheddar x2,</p>
                                <p className='description'>cebolla caramelizada</p>
                                <p className='description'>bacon y barbacoa</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$11.176</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$9.499</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={texas2}
                            />
                            <div className='item-info'>
                                <p className='title'>Texas 2.0</p>
                                <p className='description'>Carne x2, cheddar x4,</p>
                                <p className='description'>cebolla caramelizada</p>
                                <p className='description'>bacon y barbacoa</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$13.529</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$11.499</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={texas2}
                            />
                            <div className='item-info'>
                                <p className='title'>Texas 3.0</p>
                                <p className='description'>Carne x3, cheddar x6,</p>
                                <p className='description'>cebolla caramelizada</p>
                                <p className='description'>bacon y barbacoa</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$15.294</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$12.999</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={montana2}
                            />
                            <div className='item-info'>
                                <p className='title'>Montana 1.0</p>
                                <p className='description'>Carne, cheddar x2,</p>
                                <p className='description'>cebolla, tomate</p>
                                <p className='description'>lechuga y salsa BT</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$10.500</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$8.999</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={montana2}
                            />
                            <div className='item-info'>
                                <p className='title'>Montana 2.0</p>
                                <p className='description'>Carne x2, cheddar x4,</p>
                                <p className='description'>cebolla, tomate</p>
                                <p className='description'>lechuga y salsa BT</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$12.941</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$10.999</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={montana2}
                            />
                            <div className='item-info'>
                                <p className='title'>Montana 3.0</p>
                                <p className='description'>Carne x3, cheddar x6,</p>
                                <p className='description'>cebolla, tomate</p>
                                <p className='description'>lechuga y salsa BT</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$14.705</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$12.499</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={ohio2}
                            />
                            <div className='item-info'>
                                <p className='title'>Ohio 1.0</p>
                                <p className='description'>Carne, cheddar x2,</p>
                                <p className='description'>cebolla crispy</p>
                                <p className='description'>bacon y barbacoa</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$11.176</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$9.499</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={ohio2}
                            />
                            <div className='item-info'>
                                <p className='title'>Ohio 2.0</p>
                                <p className='description'>Carne x2, cheddar x4,</p>
                                <p className='description'>cebolla crispy</p>
                                <p className='description'>bacon y barbacoa</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$13.529</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$11.499</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-img-burgas'>
                        <div className='grid'> 
                            <img
                                src={ohio2}
                            />
                            <div className='item-info'>
                                <p className='title'>Ohio 3.0</p>
                                <p className='description'>Carne x3, cheddar x6,</p>
                                <p className='description'>cebolla crispy</p>
                                <p className='description'>bacon y barbacoa</p>
                                    <div>
                                        <p className='price' style={{fontSize:'18px'}}>$15.294</p>
                                        <p className='priceModificado' style={{fontSize:'18px'}}>$12.999</p>
                                    </div>
                                        <div className='btn-agregar'>
                                            <button>Agregar</button>
                                        </div>
                            </div>
                        </div>
                    </div>

                    
                </section>
                        
            </div>

            <div className='container-imagen'>
                <Footer/>
            </div>
        </div>
    )
}

export default Menu;
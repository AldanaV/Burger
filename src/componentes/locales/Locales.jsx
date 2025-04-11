import './Locales.css'
import Footer from '../footer/Footer'

const Locales = () =>{
    return(
        <div className='container-principal'>
            <div>
            <div className='title-local'>
                <h1>¿Dónde nos encontramos?</h1>
            </div>

            <section className='container-shop'>
                <div className='sucursales'>
                    <div className='sucursal'>
                        <h4>Berazategui <br/> Mitre 498</h4>
                            <div className='sucursal-info'>
                                <p>Horarios:
                                <br/>
                                Lunes cerrado.
                                <br/>
                                Tostados al paso: 9AM a 12PM
                                <br/>
                                Hamburguesas: 12PM a 00AM
                                <br/>
                                Delivery: 12PM a 16PM - 20PM a 00hs
                                </p>
                            </div>
                            <div className='btn-map'>
                                <a href='https://www.google.com/maps/place/Burger+Taster+Berazategui/@-34.7537111,-58.2128659,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32fbd36bf496b:0xccc91c28f82efbf9!8m2!3d-34.7537111!4d-58.2128659!16s%2Fg%2F11spwr573j?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D' target="_blank">Ver mapa</a>
                            </div>
                    </div>
                    
                    <div className='sucursal'>
                        <h4>Quilmes <br/> Moreno 339</h4>
                            <div className='sucursal-info'>
                                <p>Horarios:
                                <br/>
                                Lunes cerrado.
                                <br/>
                                Tostados al paso: 9AM a 12PM
                                <br/>
                                Hamburguesas: 12PM a 00AM
                                <br/>
                                Delivery: 12PM a 16PM - 20PM a 00hs
                                </p>
                            </div>
                            <div className='btn-map'>
                                <a href='https://www.google.com/maps/place/Burger+Taster/@-34.7183788,-58.2641396,17z/data=!4m15!1m8!3m7!1s0x95a32fe4a0125c39:0xb6ec114c4cec0485!2sBurger+Taster!8m2!3d-34.7183832!4d-58.2615647!10e1!16s%2Fg%2F11qr6mxypx!3m5!1s0x95a32fe4a0125c39:0xb6ec114c4cec0485!8m2!3d-34.7183832!4d-58.2615647!16s%2Fg%2F11qr6mxypx?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D' target="_blank">Ver mapa</a>
                            </div>
                    </div>

                    <div className='sucursal'>
                        <h4>Quilmes O.<br/>Av.Calchaqui <br/>3699</h4>
                            <div className='sucursal-info'>
                                <p>Horarios:
                                <br/>
                                Lunes cerrado.
                                <br/>
                                Tostados al paso: 9AM a 12PM
                                <br/>
                                Hamburguesas: 12PM a 00AM
                                <br/>
                                Delivery: 12PM a 16PM - 20PM a 00hs
                                </p>
                            </div>
                            <div className='btn-map'>
                                <a href='https://www.google.com/maps/place/Burger+Taster+Quilmes+Oeste/@-34.75808,-58.2829353,17z/data=!3m1!4b1!4m6!3m5!1s0x95a32f00451d5c71:0xceeaf205c95926d0!8m2!3d-34.7580844!4d-58.2803604!16s%2Fg%2F11ltkrkg83?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D' target="_blank">Ver mapa</a>
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

export default Locales;
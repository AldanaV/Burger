import './Footer.css'
import logo from '../imagenes/logo.jpg'
import milkaut from '../imagenes/milkaut.png'
import kalis2 from '../imagenes/kalis2.png'

const Footer = () => {
    return(
        <div>
            <footer>
                <div className='titulo-sponsor'>
                    <h2>¡Vení  a una de nuestras <a href='/locales'>sucursales</a>!</h2>
                </div>

                <div className="footer">
                    <div className='logo'>
                        <a href='/'>
                            <img src={logo}/>
                        </a>
                    </div>

                    <div className='logo2'>
                        <a href="https://milkautprofesional.com.ar/"
                            target="_blank">
                            <img src={milkaut}/>
                        </a>
                    </div>

                    <div className='logo2'>
                        <a 
                            href="https://kalispan.com.ar/"
                            target="_blank">
                            <img src={kalis2}/>
                        </a>
                    </div>

                    <div className='container-redes'>
                        <a href="https://www.instagram.com/burgertaster_ar/"
                            target='_blank'>
                            <p><i class="bi bi-instagram"></i> </p>
                            <span className='texto-bt'>@Burger Taster</span>
                        </a>
                        <a href="https://www.facebook.com/p/Burger-Taster-100067011044103/?locale=es_LA"
                            target='_blank'>
                            <p><i class="bi bi-facebook"></i></p>
                            <span>@Burger Taster</span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
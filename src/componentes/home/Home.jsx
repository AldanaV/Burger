import tienda from '../imagenes/tienda.jpg'
import './Home.css'
import missouri from '../imagenes/missouri.jpg'
import montana from '../imagenes/montana.jpg'
import oklahoma from '../imagenes/oklahoma.jpg'
import Footer from '../footer/Footer'

const Home = () => {
    return(
        <div className='container-imagen'>
            <img
                src={tienda}
            />
            <h1>Hamburguesas</h1>
            <div className='container-burgas'>
                <img
                    src={missouri}
                />
                <img
                    src={montana}
                />
                <img
                    src={oklahoma}
                />
            </div>

                
                    <h1>¿Te quedaste con hambre?</h1>
                
            <Footer/>
        </div>
    )
}

export default Home;
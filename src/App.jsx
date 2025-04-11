import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPrincipal from './componentes/navbar/Navbar';
import Home from './componentes/home/home';
import Menu from './componentes/menu/Menu';
import Locales from './componentes/locales/Locales';





function App() {
  
  return (
    <div>
        <Router>
          <NavbarPrincipal/>
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/menu' Component={Menu}/>
            <Route path='/locales' Component={Locales} />
          </Routes>
        </Router>
    </div>
  )
}

export default App

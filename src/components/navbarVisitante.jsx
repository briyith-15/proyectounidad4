import { Link } from 'react-router-dom';

import './header.css'

function NavbarVisitante() {
    return (
        <header>
            <div className="container">
                <h1 className="logo">Mi Pagina</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/caracteristicas">Cines</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/peliculas">Peliculas</Link></li>
                        <li><Link to="/comunidad">Comunidad</Link></li>
                        <li><Link to="/iniciar-sesion">Iniciar Sesion</Link></li>
                        <li><Link to="/registrarse">Registrarse</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavbarVisitante;
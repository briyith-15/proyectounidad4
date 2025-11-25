import { Link } from 'react-router-dom';
import './hero.css'

function Hero() {
    return(
        <section className="hero" id="inicio">
            <div className="container">
                <h2>Bienvenido a Mi Sitio</h2>
                <p>Una solución simple para comenzar tu proyecto web.</p>
                <Link to="/contacto" className="btn_hero">Cont&aacute;ctanos</Link>
            </div>
        </section>
    )
}

export default Hero;
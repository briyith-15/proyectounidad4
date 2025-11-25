import './contenido.css'

function Contenido() {
    return (
        <section className="features" id="caracteristicas">
            <div className="container">
                <h3>Características</h3>
                <div className="feature-list">
                    <div className="feature">
                        <h4>Cartelera Actualizada</h4>
                        <p>Consulta las últimas películas en estreno y horarios disponibles.</p>
                    </div>

                    <div className="feature">
                        <h4>Reseñas y Calificaciones</h4>
                        <p>Accede a opiniones, puntajes y detalles de cada película.</p>
                    </div>

                    <div className="feature">
                        <h4>Galería Multimedia</h4>
                        <p>Explora tráilers, posters y contenido exclusivo de tus películas favoritas.</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contenido;
import './caracteristicas.css'

function Caracteristicas() {
    return (<section className="features" id="caracteristicas">
        <div className="container">
            <h3 className="text-3xl font-bold mb-6 text-purple-600 text-center">
                Cines Reconocidos
            </h3>

            <div className="feature-list grid gap-6 sm:grid-cols-2 md:grid-cols-3">

                <div className="feature bg-purple-100 p-5 rounded-xl shadow">
                    <img
                        src="/Cineplanet.jpeg"
                        alt="Cineplanet"
                        className="w-40 h-auto rounded-lg shadow-md my-3"
                    />
                    <h4 className="text-xl font-semibold text-purple-700">Cineplanet</h4>
                    <p><strong>Dirección:</strong> Av. La Marina 2000, San Miguel</p>
                    <p><strong>Teléfono:</strong> (01) 619-6000</p>
                    <a
                        href="https://www.google.com/maps/place/Cineplanet+San+Miguel/"
                        target="_blank"
                        className="text-purple-700 font-semibold underline"
                    >
                        Ver en Google Maps
                    </a>
                </div>

                <div className="feature bg-purple-100 p-5 rounded-xl shadow">
                    <img
                        src="/Cinemark.jpeg"
                        alt=""
                        className="w-40 h-auto rounded-lg shadow-md my-3"
                    />
                    <h4 className="text-xl font-semibold text-purple-700">Cinemark</h4>
                    <p><strong>Dirección:</strong> Jockey Plaza, Surco</p>
                    <p><strong>Teléfono:</strong> (01) 716-3040</p>
                    <a
                        href="https://www.google.com/maps/place/Cinemark+Jockey+Plaza/"
                        target="_blank"
                        className="text-purple-700 font-semibold underline"
                    >
                        Ver en Google Maps
                    </a>
                </div>

                <div className="feature bg-purple-100 p-5 rounded-xl shadow">
                    <img
                        src="/UVK-Multicines.jpg"
                        alt=""
                        className="w-40 h-auto rounded-lg shadow-md my-3"
                    />
                    <h4 className="text-xl font-semibold text-purple-700">UVK Multicines</h4>
                    <p><strong>Dirección:</strong> Av. Caminos del Inca 257, Surco</p>
                    <p><strong>Teléfono:</strong> (01) 637-0000</p>
                    <a
                        href="https://www.google.com/maps/place/UVK+Camino+Real/"
                        target="_blank"
                        className="text-purple-700 font-semibold underline"
                    >
                        Ver en Google Maps
                    </a>
                </div>

                <div className="feature bg-purple-100 p-5 rounded-xl shadow">
                    <img
                        src="/Cine-Star.jpg"
                        alt=""
                        className="w-40 h-auto rounded-lg shadow-md my-3"
                    />
                    <h4 className="text-xl font-semibold text-purple-700">Cine Star</h4>
                    <p><strong>Dirección:</strong> Av. Alfonso Ugarte 1000, Lima</p>
                    <p><strong>Teléfono:</strong> (01) 424-7422</p>
                    <a
                        href="https://www.google.com/maps/place/Cinestar+Excelsior/"
                        target="_blank"
                        className="text-purple-700 font-semibold underline"
                    >
                        Ver en Google Maps
                    </a>
                </div>

                <div className="feature bg-purple-100 p-5 rounded-xl shadow">
                    <img
                        src="/MovieTime.jpg"
                        alt=""
                        className="w-40 h-auto rounded-lg shadow-md my-3"
                    />
                    <h4 className="text-xl font-semibold text-purple-700">MovieTime</h4>
                    <p><strong>Dirección:</strong> Mall del Sur, San Juan de Miraflores</p>
                    <p><strong>Teléfono:</strong> (01) 680-1100</p>
                    <a
                        href="https://www.google.com/maps/place/MovieTime+Mall+del+Sur/"
                        target="_blank"
                        className="text-purple-700 font-semibold underline"
                    >
                        Ver en Google Maps
                    </a>
                </div>

            </div>
        </div>




        <div className="more-info">
            <h3>¿Por qué elegirnos?</h3>
            <p>
                Ofrecemos una experiencia completa para los amantes del cine: desde
                estrenos y recomendaciones hasta información detallada de cada película.
                Nuestro objetivo es que encuentres fácilmente qué ver y disfrutes cada visita.
            </p>
        </div>
    </section >

    )
}

export default Caracteristicas;
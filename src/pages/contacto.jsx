import './contacto.css'

import { useState } from "react";

function Contacto() {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); // evitar recargar la página

        const nombre = e.target.name.value;
        const email = e.target.email.value;
        const mensaje = e.target.message.value;

        // Mostrar en consola
        console.log("📩 Nuevo formulario recibido:");
        console.log("Nombre:", nombre);
        console.log("Correo:", email);
        console.log("Mensaje:", mensaje);

        setEnviado(true);      // Mostrar alerta
        e.target.reset();      // Limpiar formulario
    };

    return (
        <section className="contacto" id="contacto">
            <div className="container">
                <h3>Contacto</h3>
                <p>
                    ¿Tienes dudas sobre funciones, estrenos o compra de entradas?
                    ¡Estamos aquí para ayudarte! Completa el formulario y nuestro equipo de cine
                    te responderá lo antes posible.
                </p>

                {/* Alerta de envío */}
                {enviado && (
                    <div
                        style={{
                            background: "#4caf50",
                            color: "white",
                            padding: "10px",
                            borderRadius: "8px",
                            marginBottom: "15px"
                        }}
                    >
                        ✔ Tu formulario fue enviado correctamente.
                    </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="btn">Enviar</button>
                </form>

                <div className="contact-info">
                    <h4>Otras formas de contactarnos:</h4>
                    <ul>
                        <li>🎬 Teléfono de taquilla: +51 987 654 321</li>
                        <li>📩 Correo de atención: soporte@cineestelar.com</li>
                        <li>📍 Dirección: Av. Cine Estelar 456, Lima, Perú</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Contacto;


import { useState } from "react";
import { useParams } from "react-router-dom";
import datos from "../data/peliculas.json";

function ComprarEntrada() {
    const { id } = useParams();

    const pelicula = datos.peliculas.find(
        (p) => String(p.id) === String(id)
    );

    const [comprado, setComprado] = useState(false);
    const [cine, setCine] = useState("");
    const [fecha, setFecha] = useState("");
    const [cantidad, setCantidad] = useState(1);

    const botonBloqueado = cine === "" || fecha === "";

    const comprarEntrada = () => {
        setComprado(true);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-6">

            {!comprado ? (
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

                    <h1 className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
                        Compra de entradas
                    </h1>

                    {/* Cine */}
                    <label className="font-semibold text-gray-700">Cine:</label>
                    <select
                        value={cine}
                        onChange={(e) => setCine(e.target.value)}
                        className="w-full p-3 mb-4 border-2 border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="">Selecciona un cine</option>
                        <option value="Cineplanet">Cineplanet</option>
                        <option value="Cinemark">Cinemark</option>
                        <option value="UVK">UVK</option>
                    </select>

                    {/* Fecha */}
                    <label className="font-semibold text-gray-700">Fecha:</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        className="w-full p-3 mb-4 border-2 border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Cantidad */}
                    <label className="font-semibold text-gray-700">Cantidad:</label>
                    <select
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                        className="w-full p-3 mb-4 border-2 border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500"
                    >
                        <option value={1}>1 entrada</option>
                        <option value={2}>2 entradas</option>
                        <option value={3}>3 entradas</option>
                        <option value={4}>4 entradas</option>
                    </select>

                    {/* Separador */}
                    <div className="border-2 border-purple-300 my-6"></div>

                    <button
                        onClick={comprarEntrada}
                        disabled={botonBloqueado}
                        className={`w-full py-3 font-bold rounded-xl transition-all
                            ${botonBloqueado
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90"
                            }`}
                    >
                        Comprar Entrada
                    </button>
                </div>
            ) : (
                <div className="bg-white p-10 rounded-2xl shadow-xl text-center animate-bounce">
                    <h2 className="text-3xl font-extrabold text-green-600 mb-4">
                        🎉🎟️ ¡Tu entrada fue comprada! 🎟️🎉
                    </h2>
                    <div className="mt-6 text-4xl">
                        🎉🏟️🎬🎟️🍿🎊
                    </div>
                </div>
            )}
        </div>
    );
}

export default ComprarEntrada;







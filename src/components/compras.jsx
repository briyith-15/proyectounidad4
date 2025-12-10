import { useParams } from "react-router-dom";
import datos from "../../datos/peliculas.json";

function Comprar() {
    const { id } = useParams();
    const pelicula = datos.peliculas.find((p) => p.id === parseInt(id));

    if (!pelicula) {
        return <h2 className="text-center text-xl mt-10">Película no encontrada</h2>;
    }

    return (
        <div className="p-10 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-[#b100ff] mb-4">
                Comprar Entradas – {pelicula.titulo}
            </h1>

            <img
                src={`../${pelicula.imagen}`}
                alt={pelicula.titulo}
                className="rounded-xl mb-4"
            />

            <p className="text-lg font-semibold text-[#4b4b7a] mb-2">
                Precio por entrada: S/. {pelicula.precio}
            </p>

            <label className="font-semibold text-[#4b4b7a]">Cantidad:</label>
            <select className="w-full p-2 my-3 border rounded-xl">
                <option>1 entrada</option>
                <option>2 entradas</option>
                <option>3 entradas</option>
                <option>4 entradas</option>
            </select>

            <button className="w-full bg-[#b100ff] text-white font-bold py-2 rounded-xl hover:bg-[#8e00cc] transition-all">
                Confirmar Compra
            </button>
        </div>
    );
}

export default Comprar;

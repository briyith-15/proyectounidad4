import datos from '../data/peliculas.json';
import { Link } from 'react-router-dom';
import Rating from "../components/Rating";


function ListaPeliculas() {
    return (
        <div className='bg-[#e6ecff] p-20'>
            <h1 className='text-center text-3xl font-bold text-[#b100ff] mb-8'>
                Lista de Películas
            </h1>

            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {datos.peliculas.map(peliculas => (
                    <div
                        key={peliculas.id}
                        className='bg-white shadow-lg p-4 rounded-2xl border border-[#c4c4ff] 
                           hover:shadow-[0_6px_20px_rgba(177,0,255,0.25)] transition-all'
                    >
                        <img
                            src={`./${peliculas.imagen}`}
                            alt={peliculas.titulo}
                            className='w-full rounded-2xl mb-4 shadow-md'
                        />

                        <h3 className='text-lg font-bold text-[#b100ff] mb-2'>
                            {peliculas.titulo}
                        </h3>

                        <p className='text-[#4b4b7a] font-semibold'>Año: {peliculas.año}</p>
                        <p className='text-[#4b4b7a] font-semibold'>Género: {peliculas.genero}</p>

                        <p className='text-[#4b4b7a] font-semibold mt-5'>
                            Sinopsis: {peliculas.sinopsis}
                        </p>

                        <p className='text-[#b100ff] font-bold mt-5'>
                            Calificación: {peliculas.calificacion}
                        </p>
                        <p className='text-[#b100ff] font-bold mt-3'>
                            Precio entrada: S/. {peliculas.precio}
                        </p>
                        <Link to="/comprarEntrada" className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 hover:shadow-xl transition-all duration-300">
                            Entrada </Link>

                        <Rating peliculaId={peliculas.id} />
                        <p className="text-center text-sm text-gray-500 mt-1">
                            Califica esta película
                        </p>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default ListaPeliculas;
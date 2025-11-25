import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { db } from '../firebase'
import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    updateDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore'

function Comunidad() {
    // Estados del usuario logueado
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [foto, setFoto] = useState('')
    const [uid, setUid] = useState('')
    const [cargando, setCargando] = useState(true)

    // Formulario para editar perfil
    const [nuevoNombre, setNuevoNombre] = useState('')
    const [nuevaFoto, setNuevaFoto] = useState('')

    // Crear posts
    const [contenidoPost, setContenidoPost] = useState('')
    const [posts, setPosts] = useState([])

    // Editar posts
    const [editandoID, setEditandoID] = useState(null)
    const [nuevoContenido, setNuevoContenido] = useState('')

    const auth = getAuth()

    // Funcion para formatear la fecha de Firestore
    const formatearFecha = (fecha) => {
        if (!fecha) return ''
        const d = fecha.toDate()
        return d.toLocaleDateString('es-PE', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    // Recuperar datos del usuario autenticado en Firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid)
                setEmail(user.email)
                setNombre(user.displayName || 'Usuario sin nombre')
                setFoto(user.photoURL || 'user.webp')

                // Rellenar los inputs del formulario
                setNuevoNombre(user.displayName || '')
                setNuevaFoto(user.photoURL || '')
            } else {
                // Si no hay usuario
                setUid('')
                setEmail('')
                setNombre('')
                setFoto('')
            }
            setCargando(false)
        })
        return () => unsubscribe() // limpiar listener
    }, [])

    // Escuchar cambios en los posts en tiempo real desde Firestore
    useEffect(() => {
        const q = query(collection(db, 'posts'), orderBy('fecha', 'desc'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setPosts(lista) // actualizar posts en pantalla
        })
        return () => unsubscribe()
    }, [])

    // Actualizar información del usuario (nombre y foto)
    const actualizarPerfil = async () => {
        const user = auth.currentUser
        if (!user) return alert('No hay un usuario activo')

        await updateProfile(user, {
            displayName: nuevoNombre || user.displayName,
            photoURL: nuevaFoto || user.photoURL,
        })

        alert('Perfil actualizado')

        // Actualizar en pantalla
        setNombre(nuevoNombre)
        setFoto(nuevaFoto)
    }

    // Crear un nuevo post en Firestore
    const crearPost = async () => {
        if (contenidoPost.trim() === '') return

        await addDoc(collection(db, 'posts'), {
            contenido: contenidoPost,
            fecha: new Date(),
            autor: nombre,
            autorFoto: foto,
            autorUid: uid,
        })

        setContenidoPost('') // limpiar textarea
    }

    // Guardar edición del contenido de un post
    const guardarEdicion = async (id) => {
        await updateDoc(doc(db, 'posts', id), {
            contenido: nuevoContenido,
        })

        setEditandoID(null)
        setNuevoContenido('')
    }

    // Eliminar un post
    const eliminarPost = async (id) => {
        if (confirm('¿Deseas eliminar este post?')) {
            await deleteDoc(doc(db, 'posts', id))
        }
    }

    if (cargando) {
        return <p>Cargando datos...</p>
    }

    return (
       <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">

    {/* INFO DEL USUARIO */}
    <div className="text-center">
        <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={foto}
            alt="foto"
        />
        <h1 className="text-2xl font-bold">Bienvenido a la comunidad</h1>
        <p className="text-gray-700 mt-2">
            Hola, <strong>{nombre}</strong>
        </p>
        <p className="text-gray-500">{email}</p>
    </div>

    <hr className="my-6" />

    {/* CREAR POST */}
    <h2 className="text-xl font-semibold mb-4">Crear un comentario</h2>

    <textarea
        placeholder="¿Cuàl es tu sugerencia o comentario?"
        value={contenidoPost}
        onChange={(e) => setContenidoPost(e.target.value)}
        className="w-full h-24 mb-4 px-4 py-2 border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>

    <button
        onClick={crearPost}
        className="bg-green-600 text-white py-2 px-4 rounded-md 
                   hover:bg-green-700 transition-colors"
    >
        Publicar
    </button>

    <hr className="my-6" />

    {/* LISTA DE POSTS */}
    <h2 className="text-xl font-semibold mb-4">Comentario</h2>

    <div>
        {posts.map((post) => (
            <div
                className="border border-gray-200 rounded-md p-4 mb-4 shadow-sm"
                key={post.id}
            >
                {/* AUTOR */}
                <div className="flex items-center mb-3 gap-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        src={post.autorFoto}
                        alt="autor"
                    />
                    <div>
                        <p className="font-semibold">{post.autor}</p>
                        <p className="text-gray-500 text-sm">
                            {formatearFecha(post.fecha)}
                        </p>
                    </div>
                </div>

                {/* CONTENIDO O EDICIÓN */}
                {editandoID === post.id ? (
                    <div>
                        <textarea
                            value={nuevoContenido}
                            onChange={(e) => setNuevoContenido(e.target.value)}
                            className="w-full h-24 mb-3 px-4 py-2 border border-gray-300 rounded-md 
                                       focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="flex gap-2">
                            <button
                                onClick={() => guardarEdicion(post.id)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md 
                                           hover:bg-blue-700"
                            >
                                Guardar
                            </button>

                            <button
                                onClick={() => setEditandoID(null)}
                                className="bg-gray-300 px-4 py-2 rounded-md 
                                           hover:bg-gray-400"
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-800 mb-3">{post.contenido}</p>
                )}

                {/* BOTONES SI ES DEL USUARIO */}
                {post.autorUid === uid && editandoID !== post.id && (
                    <div className="flex gap-3 mt-2">
                        <button
                            onClick={() => {
                                setEditandoID(post.id)
                                setNuevoContenido(post.contenido)
                            }}
                            className="text-blue-600 hover:underline"
                        >
                            Editar
                        </button>

                        <button
                            onClick={() => eliminarPost(post.id)}
                            className="text-red-600 hover:underline"
                        >
                            Eliminar
                        </button>
                    </div>
                )}
            </div>
        ))}
    </div>
</div>

    )
}

export default Comunidad

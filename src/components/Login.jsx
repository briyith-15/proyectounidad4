import { useState } from "react"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const provider = new GoogleAuthProvider();

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function iniciarSesion() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // ...
                console.log("inicio de sesion exitoso");
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error al crear cuenta");
                console.log(error);
            });
    }

    function iniciarConGoogle() {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                // ...
                console.log("Iniciaste sesion con Google");
                navigate("/");

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log("Error con iniciar con Google");
                console.log(error);
            });
    }


    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-blue-50 shadow-lg rounded-2xl border border-blue-100">
            <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">
                Iniciar Sesión
            </h1>

            <input
                type="email"
                placeholder="correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-md
                   bg-white text-blue-900
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <input
                type="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-blue-300 rounded-md
                   bg-white text-blue-900
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <button
                onClick={iniciarSesion}
                className="w-full bg-blue-600 text-white py-2 rounded-md 
                   hover:bg-blue-700 transition-colors mb-3 shadow-sm"
            >
                Iniciar Sesión
            </button>

            <button
                onClick={iniciarConGoogle}
                className="w-full bg-red-500 text-white py-2 rounded-md 
                   hover:bg-red-600 transition-colors shadow-sm"
            >
                Ingresa con Google
            </button>
        </div>


    )
}
export default Login
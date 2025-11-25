import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function RegistrarCuenta() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Funcionar para crear un usuario
    const registrar = async() => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("Usuario registrado");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error al crear tu cuenta");
            console.log(error);
        });
    }

    return(
       <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
    <h1 className="text-2xl font-bold mb-6 text-center">Registrar Cuenta</h1>

    <input
        type="email"
        placeholder="correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
        type="password"
        placeholder="contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <button
        onClick={registrar}
        className="w-full bg-blue-600 text-white py-2 rounded-md 
                   hover:bg-blue-700 transition-colors"
    >
        Registrar
    </button>
</div>

    )
}
export default RegistrarCuenta;
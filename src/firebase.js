//Iniciar Firebase
import { initializeApp } from "firebase/app";
//base de datos
import { getFirestore } from "firebase/firestore";
//autenticacion
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5ltkvWeMc4BsCQn1bP2g-2h9L8-eOZnc",
  authDomain: "mi-proyecto-4-9dbed.firebaseapp.com",
  projectId: "mi-proyecto-4-9dbed",
  storageBucket: "mi-proyecto-4-9dbed.firebasestorage.app",
  messagingSenderId: "517446434665",
  appId: "1:517446434665:web:346f881038df0534aec7f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db, getAuth };
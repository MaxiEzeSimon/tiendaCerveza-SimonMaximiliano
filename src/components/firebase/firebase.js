import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBYFyDu69oNoRzcZLd7E6DRh4HKNjhUFQo",
  authDomain: "tienda-de-cerveza.firebaseapp.com",
  projectId: "tienda-de-cerveza",
  storageBucket: "tienda-de-cerveza.appspot.com",
  messagingSenderId: "360697248192",
  appId: "1:360697248192:web:61098872d313eb7c8eb025"
};


const app = initializeApp(firebaseConfig);
export const baseDatos = getFirestore(app)
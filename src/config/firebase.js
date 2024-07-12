// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { productos } from "../data/asyncMock";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMjEn_5qgmp70qBtOy-QvNk7wHRaNBtsk",
  authDomain: "tienda-andressf.firebaseapp.com",
  projectId: "tienda-andressf",
  storageBucket: "tienda-andressf.appspot.com",
  messagingSenderId: "30113873512",
  appId: "1:30113873512:web:dd487251a0613bcd3ec5dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

//  productos.forEach((prod) => {
//    addDoc(collection(db, "productos"), prod)
//      .then((elem) => console.log(`se agregó el producto id ${elem.id}`))
//      .catch((error) => console.log(error));
//  });
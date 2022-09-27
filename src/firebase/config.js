import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Importando metodo/produto Firestore
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRJXlavyy6qSMav80AAlXfc-Q1cBMlggk",
    authDomain: "blogfotoarq.firebaseapp.com",
    projectId: "blogfotoarq",
    storageBucket: "blogfotoarq.appspot.com",
    messagingSenderId: "602148000601",
    appId: "1:602148000601:web:5c6ed4cdf8112d66923248",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore DataBase
const db = getFirestore(app);

export { db };

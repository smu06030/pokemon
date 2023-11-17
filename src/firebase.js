// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJc6ghMi8LDLXqvvFeVPfGBT-UCAdTm5w",
  authDomain: "react-poke-app-e4c8f.firebaseapp.com",
  projectId: "react-poke-app-e4c8f",
  storageBucket: "react-poke-app-e4c8f.appspot.com",
  messagingSenderId: "224367033223",
  appId: "1:224367033223:web:85b1c8c65847a6188db122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

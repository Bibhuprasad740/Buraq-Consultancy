// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzBOeNCROdfVmm5k_yq_rXbQ5opgZXcoo",
  authDomain: "buraq-consultancy.firebaseapp.com",
  projectId: "buraq-consultancy",
  storageBucket: "buraq-consultancy.appspot.com",
  messagingSenderId: "749440036862",
  appId: "1:749440036862:web:45b7d144242ec987dedaaf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9EbTniHvCVCUmoYzwRt1L0_d7Mgkdn0w",
  authDomain: "brand-shop-17027.firebaseapp.com",
  projectId: "brand-shop-17027",
  storageBucket: "brand-shop-17027.appspot.com",
  messagingSenderId: "397723762063",
  appId: "1:397723762063:web:3892b88dfb9c5cf9645ffa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4vRihiNe9eAsxlVhD9ipo5wwcm8mhAnc",
  authDomain: "house-marketplace-5cddc.firebaseapp.com",
  projectId: "house-marketplace-5cddc",
  storageBucket: "house-marketplace-5cddc.appspot.com",
  messagingSenderId: "416997830532",
  appId: "1:416997830532:web:712aa633d09e1b1886b7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()

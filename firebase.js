// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//const firebaseConfig = {
//  apiKey: "AIzaSyB_l4ucdNwqzboeqIzC0Jn2mtMaVLA1kJY",
//  authDomain: "banhang2-84805.firebaseapp.com",
//  projectId: "banhang2-84805",
//  storageBucket: "banhang2-84805.firebasestorage.app",
//  messagingSenderId: "826180486731",
//  appId: "1:826180486731:web:43ade85169ab6748322fce"
//};

const firebaseConfig = {
  apiKey: "AIzaSyD5Z5XYdbHr7RPV3wcO_PXKOSeJtzzIqqI", //AIzaSyCAC6Eio9ekaX6WofnDhuUNpcNPvqJJY2g
  authDomain: "e-comv2.firebaseapp.com",
  projectId: "e-comv2", //banhang-587e9
  storageBucket: "e-comv2.appspot.com", //com.nganhphuong.banhang
  messagingSenderId: "5333753610",
  appId: "1:5333753610:web:81fdfb2f0c3df46439a4f3" //1:368013652164:android:9549df5635815d611bd991
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export {auth,db}
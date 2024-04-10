// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABg_v93fDvZPGjxq6yKwOHp82Q4inwhJg",
  authDomain: "dragon-news-react-authen.firebaseapp.com",
  projectId: "dragon-news-react-authen",
  storageBucket: "dragon-news-react-authen.appspot.com",
  messagingSenderId: "864120731463",
  appId: "1:864120731463:web:988dff6857fc9a1f69be62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.CHEF_APIKEY,
  authDomain: import.meta.env.CHEF_AUTHDOMAIN,
  projectId: import.meta.env.CHEF_PROJECTID,
  storageBucket: import.meta.env.CHEF_STORAGEBUCKET,
  messagingSenderId: import.meta.env.CHEF_MESSAGINGSENDERID,
  appId: import.meta.env.CHEF_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

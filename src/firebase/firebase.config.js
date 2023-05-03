// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: import.meta.env.CHEF_APIKEY,
  //   authDomain: import.meta.env.CHEF_AUTHDOMAIN,
  //   projectId: import.meta.env.CHEF_PROJECTID,
  //   storageBucket: import.meta.env.CHEF_STORAGEBUCKET,
  //   messagingSenderId: import.meta.env.CHEF_MESSAGINGSENDERID,
  //   appId: import.meta.env.CHEF_APPID,
  apiKey: "AIzaSyA4SkcGeK0koO6trS4am3qd_M9hnKhkwCI",
  authDomain: "chef-recipe-hunter-6281e.firebaseapp.com",
  projectId: "chef-recipe-hunter-6281e",
  storageBucket: "chef-recipe-hunter-6281e.appspot.com",
  messagingSenderId: "582962505698",
  appId: "1:582962505698:web:70763b86b50697b97f3bbb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

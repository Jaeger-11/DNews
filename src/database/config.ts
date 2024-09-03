// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdJ2k0aaJOUSs1ObJFliJCh3R1OBCFDtg",
  authDomain: "dnews-eda11.firebaseapp.com",
  projectId: "dnews-eda11",
  storageBucket: "dnews-eda11.appspot.com",
  messagingSenderId: "585115588428",
  appId: "1:585115588428:web:6953996d173bd353c821e9",
  measurementId: "G-2JD6608Z9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
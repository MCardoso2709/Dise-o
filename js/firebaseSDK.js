// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkvXuvU1oCcrKKlUBsR_cCmYw8SHeKhxs",
  authDomain: "rover-resilience.firebaseapp.com",
  projectId: "rover-resilience",
  storageBucket: "rover-resilience.appspot.com",
  messagingSenderId: "737977492853",
  appId: "1:737977492853:web:ade421db035a08a6ccdf3c",
  measurementId: "G-9HR8B1VR9W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const analytics = getAnalytics(app);
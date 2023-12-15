import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAWrBKDkv0jb7vs9PXmg1APQN53xR3aSL0",
    authDomain: "peppubuild-vue.firebaseapp.com",
    projectId: "peppubuild-vue",
    storageBucket: "peppubuild-vue.appspot.com",
    messagingSenderId: "566741135380",
    appId: "1:566741135380:web:b452a6a2da8dd554d93701",
    measurementId: "G-X3E83PW40N"
};
// Initialize Firebase
initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const userAuth = getAuth();
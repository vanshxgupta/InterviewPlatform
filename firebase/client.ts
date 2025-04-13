// // Import the functions you need from the SDKs you need
// import { getApp, getApps, initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDiZuJ2F7hOXYtmfLg4CPFgJzGZNiN7fIA",
//   authDomain: "fir-interviewplatform.firebaseapp.com",
//   projectId: "fir-interviewplatform",
//   storageBucket: "fir-interviewplatform.firebasestorage.app",
//   messagingSenderId: "245757724416",
//   appId: "1:245757724416:web:a96dc1abe0e6a5941ad5e5",
//   measurementId: "G-FNQJXVG5T1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




// Import the functions you need from the SDKs you need
import {  initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZuJ2F7hOXYtmfLg4CPFgJzGZNiN7fIA",
  authDomain: "fir-interviewplatform.firebaseapp.com",
  projectId: "fir-interviewplatform",
  storageBucket: "fir-interviewplatform.firebasestorage.app",
  messagingSenderId: "245757724416",
  appId: "1:245757724416:web:a96dc1abe0e6a5941ad5e5",
  measurementId: "G-FNQJXVG5T1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1Kf6IBucg4hwzQ1Oo5_mtXVfqnL3MkY4",
  authDomain: "laundry-application-e4bc5.firebaseapp.com",
  projectId: "laundry-application-e4bc5",
  storageBucket: "laundry-application-e4bc5.appspot.com",
  messagingSenderId: "973360559454",
  appId: "1:973360559454:web:737d65cccdfdbdbe5d0bcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };

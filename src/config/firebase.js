
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCO95j4lLJTVs0UdWfu3LKqgzyPw9iOgKM",
  authDomain: "tiktok---jornada-cb71f.firebaseapp.com",
  projectId: "tiktok---jornada-cb71f",
  storageBucket: "tiktok---jornada-cb71f.appspot.com",
  messagingSenderId: "249929611331",
  appId: "1:249929611331:web:90ff2b93d248321ffdfcf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db

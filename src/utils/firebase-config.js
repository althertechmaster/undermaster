
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAlt4rW6OLBLH41SHsWi1gwZhTpqVctrLo",
  authDomain: "underflix-8485f.firebaseapp.com",
  projectId: "underflix-8485f",
  storageBucket: "underflix-8485f.appspot.com",
  messagingSenderId: "306518400847",
  appId: "1:306518400847:web:355ea4881ec940a44daf3a"
};
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
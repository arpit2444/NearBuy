import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWpGmdh6pw7CG40Y9qs6s14ZlNpGmyfXQ",
  authDomain: "herebuy-phone-auth.firebaseapp.com",
  projectId: "herebuy-phone-auth",
  storageBucket: "herebuy-phone-auth.appspot.com",
  messagingSenderId: "186736113943",
  appId: "1:186736113943:web:42ccb0efb3c0eef5919f52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

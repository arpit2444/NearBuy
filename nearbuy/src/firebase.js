import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8mpTQnEVYfWKyGpMGi8Ov3InpqrrredQ",
  authDomain: "cw-project-level-5.firebaseapp.com",
  projectId: "cw-project-level-5",
  storageBucket: "cw-project-level-5.appspot.com",
  messagingSenderId: "827828145649",
  appId: "1:827828145649:web:13957e375f9d7534360850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

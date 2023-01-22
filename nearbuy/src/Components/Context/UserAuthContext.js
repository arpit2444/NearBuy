import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "../../firebase";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logOut() {
    return signOut(auth);
  }

  const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    recaptchaVerifier.render();
    const phFormat = "+" + number
    return signInWithPhoneNumber(auth, phFormat, recaptchaVerifier)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <userAuthContext.Provider
      value={{ user, logOut, setUpRecaptcha }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

// export default function useUserAuth() {
//   return useContext(userAuthContext);
// }

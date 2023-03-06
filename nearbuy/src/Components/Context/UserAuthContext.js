import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase";

// creating a context for user authentication
export const userAuthContext = createContext();

// this function holds all the necessary functionalities and will be shared across the app.
export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  // sign out method.
  function SignOut() {
    setUser({});
    return signOut(auth);
  }

  // setup and verify with google captcha.
  const setUpRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    const phFormat = "+91" + number;
    return signInWithPhoneNumber(auth, phFormat, recaptchaVerifier);
  };

  // here in the useEffect user will be saved accordingly by loging in or signing out.
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
    <userAuthContext.Provider value={{ user, SignOut, setUpRecaptcha }}>
      {children}
    </userAuthContext.Provider>
  );
}

// export default function useUserAuth() {
//   return useContext(userAuthContext);
// }

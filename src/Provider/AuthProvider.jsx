import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user , setUser] = useState(null);
    const createAccount = (email, password) => {
   return  createUserWithEmailAndPassword(auth, email, password);
  };


  useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth , (user) => {
    setUser(user)

   }) 
   return () =>{
    unSubscribe()
   }
  },[])

  const userInfo = {createAccount , setUser , user};
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

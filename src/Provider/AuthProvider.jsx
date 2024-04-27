import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import Swal from "sweetalert2";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading , setLoading] = useState(true);
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleLogin = (navigate , location) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate(location?.state ? location?.state : '/' );
        Swal.fire({
          title: "Good job!",
          text: "You have successfully logged into Google.",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };
  const handleGithubLogin = (navigate , location) => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then(() => {
        navigate(location?.state ? location?.state : '/' );
        Swal.fire({
          title: "Good job!",
          text: "You have successfully logged into GitHub.",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "You've been successfully logged out",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };
  const userInfo = {
    createAccount,
    setUser,
    user,
    loginAccount,
    handleGoogleLogin,
    handleGithubLogin,
    handleLogout,
    loading
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

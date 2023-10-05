import React, { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()



const AuthProvider = ({children}) => {
   
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true);
// Google provider
  const google = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

//   github provider

const github =() =>{
    setLoading(true)
    return signInWithPopup(auth,gitProvider)
}

// createUser

const createUser = (email,pass) =>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,pass)
}

// signin user

const login =(email,pass) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,pass);
}

// logOut
const logOut = () =>{
    setLoading(true);
    return signOut(auth)
}

// current user

useEffect(()=>{
   return onAuthStateChanged(auth,(user) =>{
     setUser(user)
     setLoading(false)
    })
},[])


console.log(user)

    const info = {
        google,
        github,
        createUser,
        login,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
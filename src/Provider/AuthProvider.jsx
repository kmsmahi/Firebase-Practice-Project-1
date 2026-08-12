import { createContext, useEffect, } from "react";
import app from "../FIrebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
export const AuthContext=createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
         return createUserWithEmailAndPassword(auth, email, password);
    };
    const Login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const Logout=()=>{
        signOut(auth).then(() => {
        alert('Sign-out successful.');
        }).catch((error) => {
        alert('An error happened.') ;
        });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
        
    },[])
    const authData={
         user,
         setUser,
         createUser,
         Logout,
         Login,
    }
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;
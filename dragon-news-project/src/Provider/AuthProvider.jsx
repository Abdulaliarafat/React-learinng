import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import React, {createContext, useEffect, useState } from 'react';
import app from "../FireBase/Firebase.config";

export const AuthContext=createContext()

const auth = getAuth(app);
const AuthProvider = ({children}) => {
   
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
//   console.log(user,loading) 
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateProfileUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    const logOut=()=>{
        return signOut(auth);       
    } 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
            setUser(currentUser);
            setLoading(false)
            return ()=>{
                unsubscribe()
            }
        })
    },[]);
    

    const authData={
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        loading,
        setLoading,
        updateProfileUser
    }
    return <AuthContext value={authData}>
        {children}
         </AuthContext>
};

export default AuthProvider;
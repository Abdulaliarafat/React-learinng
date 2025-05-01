import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase.init';



const AuthProvider = ({children}) => {
   const [user,setUser]=useState(null)
   const [loading,setLoading]=useState(true)
   const googleProvider= new GoogleAuthProvider()
   const createUser=(email,password)=>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
   }
   const logInUser=(email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
   }
   const googleSignIn=()=>{
         setLoading(true)
         return signInWithPopup(auth,googleProvider)
   }
   const signOutUser=()=>{
    setLoading(true)
    return signOut(auth)
   }
  //  onAuthStateChanged(auth,(currentUser)=>{
  //   if(currentUser){
  //     console.log('has user',currentUser)
  //   }
  //   else{
  //     console.log('current user',currentUser)
  //   }
  //  })
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
      console.log('current user here',currentUser)
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unSubscribe()
    }
  },[])

 const userInfo={
   user,
   loading,
   createUser,
   logInUser,
   googleSignIn,
   signOutUser
 }
    return (
        <AuthContext value={userInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvider;
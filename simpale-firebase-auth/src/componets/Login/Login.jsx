import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../fireBase/firebase.init';



const Login = () => {
 const[user,setUser]=useState(null)
const provider=new GoogleAuthProvider();
const GithubProvider=new GithubAuthProvider();
const handleGoogleSignIn=()=>{
    console.log('sign in google')
    signInWithPopup(auth,provider)
     .then(result=>{
        console.log(result.user)
        setUser(result.user)
     })
     .catch((error=>{
        console.log(error)
     }))
}
const handleGithubSignIn=()=>{
  signInWithPopup(auth,GithubProvider)
  .then(result=>{
    console.log(result)
    setUser(result.user)
  })
  .catch((error)=>{
    console.log(error)
  })
}
    
 const handleSignOut=()=>{
    signOut(auth).then(()=>{
        console.log('Sign out')
        setUser(null)
    })
    .catch((error)=>{
        console.log(error)
    })
 }
    return (
        <div>
            <h2>please login</h2>
            {/* <button onClick={handleGoogleSignIn}>Sign in google</button>
            <button onClick={handleSignOut} >Sign out</button> */}
            {
                user ?  <button onClick={handleSignOut} >Sign out</button> :
                <div>
                    <button onClick={handleGoogleSignIn}>Sign in google</button>
                    <button onClick={handleGithubSignIn}>Sign in with Github</button>
                </div>
            }
            {
                user &&  <div>
                <h2>{user.displayName}</h2>
                <p>{user.email}</p>
                <img src={user.photoURL} alt="" />
                 </div>
            }

        </div>
    );
};

export default Login;
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

// import { auth } from '../Firebase.init';

const Signup = () => {
    const {createUser}=use(AuthContext)
    const navigate=useNavigate('/');
    const handleSignUp=(e)=>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,email,password);
    
//  create user
    createUser(email,password)
    .then(result=>{
      console.log(result);
      navigate('/');
    })
    .catch(error=>{
      console.log(error);
    })
    // create user
    // createUserWithEmailAndPassword(auth,email,password)
    // .then(result=>{
    //     console.log(result)
    // })
    // .catch(error=>{
    //     console.log(error)
    // })

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-4 shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="name" />
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
            <p>Already have an account ? please <Link className='text-green-400 underline' to='/login'>Log In</Link></p>
          </div>
        </div>
    );
};

export default Signup;
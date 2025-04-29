import React from 'react';
import { Link } from 'react-router';

const Signup = () => {
    const handleSignUp=(e)=>{
    e.preventDefault()

    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto mt-4 shrink-0 shadow-2xl">
        <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password ?</a></div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
            <p>New to this site ? please <Link className='text-green-400 underline' to='/login'>Log In</Link></p>
          </div>
        </div>
    );
};

export default Signup;
import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const LoginPage = () => {
    const [error,setError]=useState('');
    const location=useLocation()
//    console.log(location)
    const navigate=useNavigate()
    const {signIn}=use(AuthContext)
    const handleSignIn=(e)=>{
    e.preventDefault()
    const from=e.target;
    const email=from.email.value;
    const password=from.password.value;
    signIn(email,password)
    .then((result)=>{
      const user=result.user;
    //   console.log(user)
      navigate(`${location.state ? location.state : '/'}`); 
    })
    .catch((error) => {
        const errorCode = error.code;
        setError(errorCode)
        // const errorMessage = error.message;
    //    return alert(errorMessage)
      });
    
    }
    return (
        <div>
            <div className ="card bg-base-100 w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form onSubmit={handleSignIn} className="form space-y-3">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email"  required/>
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className='text-red-600 font-bold'>Please give currect password</p>
                        }
                        <button type='submit' className="btn btn-neutral w-full mt-4">Login</button>
                        <p className='mt-3 font-medium text-center'>Dont’t have an account please  ? <Link className='font-bold text-red-400 underline' to='/auth/register'>Register</Link>
                        </p>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
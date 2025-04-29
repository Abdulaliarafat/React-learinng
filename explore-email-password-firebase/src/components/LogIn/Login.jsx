import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [success,setsuccess]=useState(false)
    const [errorMassgae,setErrorMassage]=useState('')
    const [show,setshow]=useState(false)
    const handleLogin=(e)=>{
     e.preventDefault();
     const email=e.target.email.value;
     const password=e.target.password.value;
     console.log(email,password)
     setsuccess(false)
     setErrorMassage('')
     signInWithEmailAndPassword(auth,email,password)
     .then(result=>{
        console.log(result.user)
        setsuccess(true)
     })
     .catch(error=>{
        console.log(error)
        setErrorMassage(error.message)
     })
    }
    return (
        <div>
             <div className="card bg-green-50  mt-4 w-full max-w-sm mx-auto  shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handleLogin} className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                               <div className='relative'>
                               <input type={show ? 'text' : 'password'} name='password'  className="input" placeholder="Password" />
                               <button className='absolute top-3.5 right-8' onClick={()=>setshow(!show)}>
                                {
                                   show ? <FaEyeSlash size={15}/> : <FaEye size={15} />
                                }
                               </button>
                               </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p className='mt-3 font-medium text-md'>New to this website ? please <Link className='text-blue-500 underline' to='/SignUp'>SignUp</Link></p>
                            </form>
                            {
                                errorMassgae && <p className='text-red-400'>{errorMassgae}</p>
                            }
                            {
                                success && <p className='text-green-400'>User logged in Successfully</p>
                            }
                        </div>
                    </div>
                </div>
    );
};

export default Login;
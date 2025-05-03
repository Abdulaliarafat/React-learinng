import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto my-20 shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <form className="form space-y-3">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral w-full mt-4">Login</button>
                        <p className='mt-3 font-medium text-center'>Dont’t have an account please  ? <Link className='font-bold text-red-400 underline' to='/auth/register'>Register</Link>
                        </p>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
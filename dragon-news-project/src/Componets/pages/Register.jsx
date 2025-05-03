import React from 'react';
import { Link } from 'react-router';
const Register = () => {
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10">
                <div className="card-body">
                    <h1 className="text-2xl font-bold text-center">Register your account</h1>
                    <form className="form  space-y-1">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button className="btn btn-neutral w-full mt-4">Login</button>
                        <p className='mt-3 font-medium text-center'>Already have an account please   ? <Link className='font-bold text-red-400 underline' to='/auth/login'>Login</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;
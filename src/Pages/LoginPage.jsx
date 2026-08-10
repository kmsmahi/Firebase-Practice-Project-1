import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-semibold text-xl text-center'>Login your Account</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <h1 className='text-sm py-3 px-4'>Don't have an account?then <Link to='/auth/register' className='text-red-500'>Register</Link></h1>
        </fieldset>
      </div>
    </div>
    );
};

export default LoginPage;
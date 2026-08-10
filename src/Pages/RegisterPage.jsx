import React from 'react';
import { Link } from 'react-router';
const RegisterPage = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='font-semibold text-xl text-center'>Register your Account</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Enter your name" />
          <label className="label">Photo UrL</label>
          <input type="name" className="input" placeholder="Provide your photo url" />
          <button className="btn btn-neutral mt-4">Register</button>
          <h1 className='text-sm py-3 px-4'>Already have an account?then <Link to='/auth/login' className='text-red-500'>Login</Link></h1>
        </fieldset>
      </div>
    </div>
    );
};

export default RegisterPage;
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const LoginPage = () => {
  const {Login}=use(AuthContext);
  const loginBtnHandler=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log({email,password});
    Login(email,password)
    .then(res=>{
      const user=res.user;
      console.log(user);
    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode , errorMessage);
  });
  }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={loginBtnHandler} className="card-body">
        <h1 className='font-semibold text-xl text-center'>Login your Account</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <h1 className='text-sm py-3 px-4'>Don't have an account?then <Link to='/auth/register' className='text-red-500'>Register</Link></h1>
        </fieldset>
      </form>
    </div>
    );
};

export default LoginPage;
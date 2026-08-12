import React, { useState } from 'react';
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
const RegisterPage = () => {
  const {createUser,setUser}=use(AuthContext);
    const handleRegister=(e)=>{
          e.preventDefault();
          const form=e.target;
          const name=form.name.value;
          const email=form.email.value;
          const password=form.password.value;
          const photo=form.photo.value;
          console.log({name,email,password,photo});
          createUser(email,password).then((result)=>
          {
            const user=result.user;
            setUser(user);
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          alert(errorMessage);
  });
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <h1 className='font-semibold text-xl text-center'>Register your Account</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" required/>
          <label className="label">Name</label>
          <input name='name' type="name" className="input" placeholder="Enter your name" required/>
          <label className="label">Photo UrL</label>
          <input name='photo' type="name" className="input" placeholder="Provide your photo url" required/>
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <h1 className='text-sm py-3 px-4'>Already have an account?then <Link to='/auth/login' className='text-red-500'>Login</Link></h1>
        </fieldset>
      </form>
    </div>
    );
};

export default RegisterPage;
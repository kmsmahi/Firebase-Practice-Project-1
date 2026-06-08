import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { app } from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';
const auth = getAuth(app);
const SignIn = () => {
    const [user,setUser]=useState(null);
    const [show,setShow]=useState(false);
    const signinBtnHandler=(e)=>{
        e.preventDefault();
        const Email=e.target.email.value;
        const Password=e.target.password.value;
          console.log('after sign in : ',{Email,Password});    
        signInWithEmailAndPassword(auth, Email, Password)
        .then((res)=>{
                    console.log(res);
                    setUser(res.user);
                    toast.success(' Sign in successfull');
                  })
                  
                  .catch((err)=>{
                    console.log(err);
                    toast.error(err.message);
                  })
    }
    const signOutBtnHandler=(e)=>{
        e.preventDefault();
        signOut(auth).then(() => {
        toast.success('signout successful');
        }).catch((error) => {
        toast.error(error.message);
        });
        setUser(null);
    }
    return (
        // Both sections now share a clean, professional light background (bg-slate-50)
        <div className='min-h-screen grid grid-cols-12 bg-slate-50'>
            
            {/* Left Welcome Section */}
            <section className='left col-span-12 md:col-span-6 flex flex-col justify-center p-12 md:p-24'>
                <div className="max-w-md">
                    <h1 className='text-slate-900 font-extrabold text-4xl lg:text-5xl tracking-tight'>Welcome Back</h1>
                    <p className='text-slate-600 text-base mt-4 leading-relaxed'>
                        Sign in to continue your journey. Manage your account, explore more features, and discover what's new.
                    </p>
                </div>
            </section>
            
            {/* Right Form Section */}
            <section className='right col-span-12 md:col-span-6 flex items-center justify-center p-8 md:p-16'>
                { user? (<div className='flex flex-col gap-3 items-center justify-center'>
                    <h1>{user.email}</h1>
                    <bytton onClick={signOutBtnHandler} className='btn btn-secondary' >Sign out</bytton>
                </div>
                
            ): 
                    <form className='w-full max-w-md flex flex-col gap-4' action="" onSubmit={signinBtnHandler}>
                    
                    <div className='text-center mb-4'>
                        <h2 className='text-slate-900 font-bold text-3xl'>Sign In</h2>
                        <p className='text-sm text-slate-500 mt-1'>Please enter your details</p>
                    </div>

                    {/* Email Input group */}
                    <div className="form-control w-full">
                        <label className='label text-sm font-medium text-slate-700 mb-1'>Email Address</label>
                        {/* White background inputs with subtle gray borders for a clean light UI */}
                        <input name='email' type="email" placeholder="name@example.com" className="input input-bordered input-md w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-primary" />
                    </div>

                    {/* Password Input group */}
                    <div className="form-control w-full relative">
                        <div className="flex justify-between items-center mb-1">
                            <label className='label text-sm font-medium text-slate-700'>Password</label>
                            <a className='text-sm font-medium text-primary hover:underline' href="#forgot">Forgot Password?</a>
                        </div>
                        <input name='password' type={show? "text" : "password"} placeholder="••••••••" className="input input-bordered input-md w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-primary" />
                        <span onClick={()=>setShow(!show)} className='absolute right-6 top-9 cursor-pointer z-2'>{show?<FaEye />:<FaEyeSlash />}</span>
                    </div>

                    {/* Login Button */}
                    <button className='btn btn-primary w-full mt-2 font-semibold text-base text-white'>
                        Login
                    </button>

                    {/* Divider adjusted for light mode */}
                    <div className="divider text-xs text-slate-400 before:bg-slate-200 after:bg-slate-200 my-2">OR CONTINUE WITH</div>

                    {/* Social Buttons adjusted for light theme */}
                    <div className="flex flex-col gap-3">
                        <button className="btn btn-md w-full bg-white border-slate-300 text-slate-700 normal-case font-medium hover:bg-slate-50 flex items-center justify-center gap-2">
                            <svg aria-label="Google logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g>
                            </svg>
                            Sign in with Google
                        </button>

                        <button className="btn btn-md w-full bg-slate-900 border-slate-900 text-white normal-case font-medium hover:bg-slate-800 flex items-center justify-center gap-2">
                            <svg aria-label="GitHub logo" width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                            </svg>
                            Sign in with GitHub
                        </button>
                    </div>

                    {/* Bottom Link */}
                    <p className='text-center text-sm text-slate-500 mt-4'>
                        Don't have an account? <a className='link link-primary font-semibold' href="signup">Sign up</a>
                    </p>
                </form>
                }
            </section>
        </div>
    );
};

export default SignIn;
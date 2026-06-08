import React from 'react';

const SignUp = () => {
    return (
        // The whole grid now shares the exact same clean, light background (bg-slate-50)
        <div className='min-h-screen grid grid-cols-12 bg-slate-50'>
            
            {/* Left Welcome Section */}
            <section className='left col-span-12 md:col-span-6 flex flex-col justify-center p-12 md:p-24'>
                <div className="max-w-md">
                    <h1 className='text-slate-900 font-extrabold text-4xl lg:text-5xl tracking-tight'>Create your account</h1>
                    <p className='text-slate-600 text-base mt-4 leading-relaxed'>
                        Join our community and unlock exclusive features. Your journey begins here!
                    </p>
                </div>
            </section>
            
            {/* Right Form Section */}
            <section className='right col-span-12 md:col-span-6 flex items-center justify-center p-8 md:p-16'>
                <form className='w-full max-w-md flex flex-col gap-4' action="" onSubmit={(e) => e.preventDefault()}>
                    
                    <div className='text-center mb-4'>
                        <h2 className='text-slate-900 font-bold text-3xl'>Sign Up</h2>
                        <p className='text-sm text-slate-500 mt-1'>Please enter your details</p>
                    </div>

                    {/* Name Input group */}
                    <div className="form-control w-full">
                        <label className='label text-sm font-medium text-slate-700 mb-1'>Name</label>
                        <input type="text" placeholder="Enter your name" className="input input-bordered input-md w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-primary" />
                    </div>

                    {/* Photo URL Input group */}
                    <div className="form-control w-full">
                        <label className='label text-sm font-medium text-slate-700 mb-1'>Photo URL</label>
                        <input type="url" placeholder="Provide your photo url" className="input input-bordered input-md w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-primary" />
                    </div>

                    {/* Email Input group */}
                    <div className="form-control w-full">
                        <label className='label text-sm font-medium text-slate-700 mb-1'>Email Address</label>
                        <input type="email" placeholder="name@example.com" className="input input-bordered input-md w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-primary" />
                    </div>

                    {/* Password Input group */}
                    <div className="form-control w-full">
                        <div className="flex justify-between items-center mb-1">
                            <label className='label text-sm font-medium text-slate-700'>Password</label>
                        </div>
                        <input type="password" placeholder="••••••••" className="input input-bordered input-md w-full bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-primary" />
                    </div>

                    {/* Signup Button */}
                    <button className='btn btn-primary w-full mt-2 font-semibold text-base text-white'>
                        Signup
                    </button>
                    
                    {/* Bottom Link: Navigates back to the signin route */}
                    <p className='text-center text-sm text-slate-500 mt-4'>
                        Already have an account? <a className='link link-primary font-semibold' href="signin">Sign In</a>
                    </p>
                </form>
            </section>
        </div>
    );
};

export default SignUp;
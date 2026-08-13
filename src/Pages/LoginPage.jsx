import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { AuthContext } from '../Provider/AuthProvider'; // Adjust path if needed

const Login = () => {
  const { userLogin, googleLogin, githubLogin } = useContext(AuthContext);
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  // Target path: redirect back to the page the user came from (e.g., News Details), or default to home
  const from = location.state?.from?.pathname || '/';

  // Handle Email & Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    userLogin(email, password)
      .then((result) => {
        // Redirect back to protected page (News Details) or home
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message || 'Invalid email or password. Please try again.');
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    setError('');
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message || 'Google sign-in failed.');
      });
  };

  // Handle GitHub Login
  const handleGithubLogin = () => {
    setError('');
    githubLogin()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message || 'GitHub sign-in failed.');
      });
  };

  return (
    <div className="min-h-[calc(100vh-120px)] flex justify-center items-center px-4 py-10 bg-gray-50">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl border border-gray-100 rounded-2xl p-6 sm:p-8">
        
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-2">
          Login your account
        </h2>
        <hr className="my-4 border-gray-200" />

        {/* Error Notification */}
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center font-medium mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          
          {/* Email Address */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full focus:outline-none focus:border-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10 focus:outline-none focus:border-gray-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[46px] text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
            </button>
          </div>

          {/* Forget Password */}
          <div className="flex justify-end">
            <Link to="/auth/forgot-password" className="text-sm text-gray-500 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-2">
            <button className="btn bg-gray-900 hover:bg-black text-white w-full text-base font-semibold py-3 rounded-lg transition-colors">
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="divider my-6 text-xs text-gray-400">OR LOGIN WITH</div>

        {/* Social Logins */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="btn w-full bg-white text-gray-700 border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-2 font-medium"
          >
            <FaGoogle className="text-blue-500 w-4 h-4" />
            Login with Google
          </button>

          <button
            onClick={handleGithubLogin}
            type="button"
            className="btn w-full bg-gray-900 text-white hover:bg-black flex items-center justify-center gap-2 font-medium"
          >
            <FaGithub className="w-5 h-5" />
            Login with GitHub
          </button>
        </div>

        {/* Switch to Register */}
        <p className="text-center text-sm font-semibold text-gray-500 mt-6">
          Don’t Have An Account?{' '}
          <Link to="/auth/register" className="text-red-600 hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
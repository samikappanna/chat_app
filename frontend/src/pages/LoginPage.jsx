import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from "react-router";
import { Loader2 } from 'lucide-react';
import AuthImagePattern from '../components/AuthImagePattern';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [showPassword,setShowPassword] = useState(false);
  const [ formData, setFormData] = useState({
    email:"",
    password:""
  })

  const {login,isLoggingIn}=useAuthStore();

  const handleSubmit=(e)=>{
    e.preventDefault();
    login(formData)
  }
  return (
    <div className='min-h-screen flex flex-col lg:grid lg:grid-cols-2'>
      <div className='flex-grow flex items-center justify-center flex-col'>
        <div className='p-10 text-2xl lg:p-20 lg:text-[35px]'>
          Login
        </div>
        <form onSubmit={handleSubmit} className="max-w-md w-full flex flex-col space-y-6 px-4 lg:px-0">
          <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type={showPassword ? "text" : "password"} name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer">
              <Icon icon={showPassword ? eyeOff : eye} size={20} />
            </span>
          </div>
          <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}>
            {isLoggingIn ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Log in"
            )}
          </button>
          <Link to={"/signup"} className='ml-[140px]'>Create an account here</Link>
        </form>
      </div>
      {/* Right side of the grid, hidden on small screens */}
      <div className='hidden lg:block'>
        <AuthImagePattern 
          title="Hop on"
          subtitle="Connect with your friends and family"
        />
      </div>
    </div>
  );
};

export default LoginPage;

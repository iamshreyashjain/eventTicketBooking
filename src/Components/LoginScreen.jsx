//react
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//icons
import { FaRegCopyright } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

//component
import LoginScreenSkeleton from '../LoginScreenSkeleton';
//img

import Logo from './../assets/images/2.png'
import frontPage from './../assets/images/frontPage.jpg'

export default function LoginScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500); // Adjust the time as necessary
    }, []);

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <>
            {loading ? (
                <LoginScreenSkeleton /> // Show the skeleton while loading
            ) : (
                <div className="min-w-screen min-h-screen bg-purple-500 sm:flex">
                    <div className="hidden sm:w-2/3 sm:bg-purple-100 sm:flex sm:justify-center sm:items-center min-h-screen  ">
                        <div className="w-1/2 p-4 rounded-lg bg-white flex flex-col items-center min-h-[82%] shadow-lg">
                            <img src={Logo} className='w-1/6 shadow-md shadow-gray-400 rounded-full' />
                            <img src={frontPage} className='max-h-96 mt-2' />
                            <p className='text-sm'>
                            <i>A great way to manage your day-to-day tasks<br /></i>
                            </p>
                            <div className='flex gap-2 items-center'>
                                <FaRegCopyright /><span className='text-slate-500'>Shreyash Jain</span>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-1/3 h-screen bg-purple-900 p-4 gap-3 flex flex-col">
                        <div className='sm:hidden h-1/3 py-11 '>
                            <img src={Logo} className='w-1/6 h-16  mx-auto rounded-full' />
                        </div>
                        <div className='sm:h-screen flex flex-col justify-center items-center gap-3'>
                            <input type='text' className='w-full rounded-md px-2 py-3 outline-none' placeholder='Email' />
                            <div className='w-full relative'>
                                <input type={passwordVisible ? 'text' : 'password'} className='w-full rounded-md px-2 py-3 outline-none' placeholder='Password' />
                                <div className='absolute top-4 right-3 cursor-pointer text-xl text-slate-500' onClick={togglePasswordVisibility}>
                                    {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='text-slate-300 text-sm underline'>Forgot Password?</p>
                                <Link to="/">
                                    <button className='bg-slate-300 text-slate-800 px-6 py-1 rounded-md'>Login</button>
                                </Link> 
                            </div>
                            <hr className='text-slate-300 w-full mt-4' />
                            <h1 className='text-slate-300'><i>Or</i></h1>
                            <Link to ="/register" className='w-full rounded-md px-2 py-3 bg-slate-300 text-slate-800 mt-4 flex items-center justify-center gap-2'>
                            Create Account With Us
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const { register,reset, handleSubmit} = useForm();
    const navigate = useNavigate()

    const onSubmit=async(data)=>{
        const res = await axios.post("http://localhost:5000/user/signup",data).catch(e=>toast.error(e?.response?.data?.message));
        if(res?.data){
            reset();
            toast.success("Signup successful !!");
            navigate('/login');
        }
    }
    return (
        <section className="bg-gray-50 mt-4">
            <div className="flex flex-col items-center justify-center px-6  mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div style={{fontFamily:'teko'}} className="p-2 space-y-2 md:space-y-6 sm:p-8">
                        <h1  className="text-xl font-bold leading-tight tracking-tight text-[#324d67] md:text-2xl capitalize text-center">
                            Create account
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 md:space-y-6" >
                        <div>
                                <label htmlFor="name" className="block mb-2 text-md font-bold text-gray-900">Your name</label>
                                <input {...register("name", { required: true})} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="Enter Name" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-md font-bold text-gray-900">Your email</label>
                                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-md font-bold text-gray-900">Password</label>
                                <input {...register("password", { required: true})} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label  className="block mb-2 text-md font-bold text-gray-900">Phone Number</label>
                                <input {...register("phone", { required: true})} type="number" name="phone"  placeholder="Enter Phone number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required />
                            </div>
                         
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                </div>
                                <div className="ml-3 text-md">
                                    <label htmlFor="terms" className=" text-gray-500 dark:text-gray-300">I accept the <span className="font-bold text-blue-600 hover:underline " >Terms and Conditions</span></label>
                                </div>
                            </div>
                            <button style={{fontFamily:"anton"}} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 text-center ">Create an account</button>
                            <p className="text-md  text-gray-600 text-center">
                                Already have an account? <Link to="/login" className="font-bold text-blue-600 hover:underline">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
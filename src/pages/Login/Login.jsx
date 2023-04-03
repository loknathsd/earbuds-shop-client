import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/StateContext';

const Login = () => {
    const { register, reset, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { login } = useStateContext();
    console.log(from);
    const adminEmail = 'admin@admin.com'
    const adminPassword = 'admin'

    const onSubmit = async (data) => {
        const response = await axios.post("http://localhost:5000/user/signin", data).catch(e => toast.error(e?.response?.data?.message))
        if (response?.data) {
            const { token } = response.data;
            login(token)
            // save token to local storage
            reset();
            toast.success("Logged in successfully");
            navigate(from, { replace: true });
        }
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6   mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow  md:-mt-16 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl">
                            Sign in  {from==='/dashboard' ? 'as Admin' :'to your account'}
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input defaultValue={from ==='/dashboard' ? adminEmail : null} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input defaultValue={from ==='/dashboard' ? adminPassword : null}  {...register("password", { required: true })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</p>
                            </div>
                            <button type="submit" className="w-full bg-blue-700 text-white  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                            <p className="text-lg font-semibold text-gray-500 ">
                                Don’t have an account yet? <Link to="/register" className="font-medium text-blue-700 hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
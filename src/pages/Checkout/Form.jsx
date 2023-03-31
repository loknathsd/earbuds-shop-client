import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({cartItems}) => {
    const { register,reset, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data,cartItems,' data')   
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-gray-200 px-5 py-2 w-full rounded' type="text" placeholder="Full Name" {...register("fullname", { required: true, maxLength: 80 })} />
                {/* <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} /> */}
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' type="number" placeholder="Mobile number" {...register("phonenumber", { required: true })} />
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' placeholder='Card Number' {...register("Cardnumber", { required: true })} type="number" />
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' placeholder='Billing Address' {...register("address", { required: true })} type="text" />
                <input className='border border-gray-200 px-5 py-2 w-full rounded bg-blue-500 text-white' type="submit" />
            </form>
        </div>
    );
};

export default Form;
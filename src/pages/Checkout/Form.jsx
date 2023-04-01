import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Form = ({cartItems,totalPrice}) => {
    const { register,reset, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = async(data )=> {
        data.products = cartItems;
        data.totalprice = totalPrice;
        const res = await axios.post('http://localhost:5000/order/add',data).catch(e=>toast.error(e?.response?.data?.message));
        if(res?.data){
            toast.success(res?.data?.message);
            reset();
            navigate("/success");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border border-gray-200 px-5 py-2 w-full rounded' type="text" placeholder="Full Name" {...register("fullname", { required: true, maxLength: 80 })} />
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' type="number" placeholder="Mobile number" {...register("phonenumber", { required: true })} />
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' placeholder='Card Number' {...register("cardnumber", { required: true })} type="number" />
                <input className='border border-gray-200 px-5 py-2 w-full rounded my-3' placeholder='Billing Address' {...register("address", { required: true })} type="text" />
                <input className='border border-gray-200 px-5 py-2 w-full rounded bg-blue-500 text-white cursor-pointer' type="submit" />
            </form>
        </div>
    );
};

export default Form;
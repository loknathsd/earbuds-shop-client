import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("")
    const reset = () => {
        setName("");
        setPrice("");
        setImgUrl("");
        setDescription("")
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { name, price, imgUrl, description }
            const res = await axios.post("http://localhost:5000/product/add", data);
            if (res.data) {
                reset();
                toast.success(res?.data?.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='lg:w-[100%] shadow-lg bg-gray-100 rounded-lg p-12 lg:mx-[20%] mt-5 md:mx-10 max-sm:mx-6 text-center  '>
            <h1 className='text-center text-xl font-semibold '>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} value={name} className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="text" required placeholder='Name' /><br />
                <input onChange={(e) => setPrice(e.target.value)} value={price} className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="number" required placeholder='Price' /><br />
                <input onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="text" required placeholder='Image Url' /><br />
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="text" required placeholder='Description' /><br />
                <button className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 bg-slate-500 text-white border rounded-md my-3 border-gray-300' type='submit'>Save</button>
            </form>
        </div>
    );
};

export default AddProduct;
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [description, setDescription] = useState("");
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/product/${id}`)
                .then((data) => {
                    const { name, price, imgUrl, description } = data?.data?.result[0];
                    setName(name);
                    setPrice(price);
                    setImgUrl(imgUrl);
                    setDescription(description)
                }).catch(err => console.log(err))
        }
    }, [id]);

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
            if (id) {
                const res = await axios.put(`http://localhost:5000/product/edit/${id}`, data);
                toast.success(res?.data?.message);
                reset();
                navigate('/dashboard/products')
            } else {
                const res = await axios.post("http://localhost:5000/product/add", data);
                if (res.data) {
                    reset();
                    toast.success(res?.data?.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className='lg:w-[100%] shadow-lg bg-gray-100 rounded-lg p-12 lg:mx-[20%] mt-5 md:mx-10 max-sm:mx-6 text-center  '>
            <h1 className='text-center text-xl font-semibold '>{id ? "Update" : "Add"} Product</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setName(e.target.value)} value={name} className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="text" required placeholder='Name' /><br />
                <input onChange={(e) => setPrice(e.target.value)} value={price} className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="number" required placeholder='Price' /><br />
                <input onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="text" required placeholder='Image Url' /><br />
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="text" required placeholder='Description' /><br />
                <button className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 bg-slate-500 text-white border rounded-md my-3 border-gray-300' type='submit'>{id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

export default AddProduct;
import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const ProductsAll = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://earbuds.onrender.com/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleDelete =  (id) => {
        fetch(`https://earbuds.onrender.com/product/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
        .then(data => {
            const filter = products.filter(pd=>pd._id !== id);
            setProducts(filter);
            toast.success(data.message);
        }).catch(err=>{
            toast.error("Something went wrong");
        })
    }
    return (
        <div style={{fontFamily:'rokkitt'}} className="relative overflow-y-scroll h-screen shadow-md sm:rounded-lg lg:mx-16 mt-5 w-[100%]">
            <table className="w-full text-lg text-left text-gray-600 dark:text-gray-400 ">
                <thead className="text-xs text-gray-700  uppercase bg-gray-300  dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-5 ">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Action
                        </th>
                        <th scope="col" className="px-10 py-5">
                            Action
                        </th>
                    </tr>
                </thead>
                {products.map(pd => <tbody key={pd._id}>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {pd.name}
                        </th>
                        <td className="px-6 py-4">
                            ${pd.price}
                        </td>
                        <td className="px-6 py-4">
                            {pd?.description?.slice(0, 15)}...
                        </td>
                        <td className="px-6 py-4">
                            <Link to={`/dashboard/edit/${pd._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td>
                        <td className="px-12 text-lg text-red-500 py-4">
                            <button onClick={() => handleDelete(pd._id)} ><AiFillDelete /></button>
                        </td>
                    </tr>
                </tbody>)}
            </table>
            {products.length === 0 && <Loader />}
        </div>
    );
};

export default ProductsAll;
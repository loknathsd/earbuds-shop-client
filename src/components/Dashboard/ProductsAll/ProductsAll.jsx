import React from 'react';
import { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loader from '../../Shared/Loader/Loader';

const ProductsAll = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div class="relative overflow-auto shadow-md sm:rounded-lg mx-16 mt-5 w-[100%]">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                <thead class="text-xs text-gray-700  uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 ">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                        <th scope="col" class="px-10 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
               {products.map(pd=><tbody>
                    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           {pd.name}
                        </th>
                        <td class="px-6 py-4">
                            ${pd.price}
                        </td>
                        <td class="px-6 py-4">
                           {pd.description?.slice(0,15)}...
                        </td>
                        <td class="px-6 py-4">
                            <Link to="/dashboard/add" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                        </td>
                        <td class="px-12 text-lg text-red-500 py-4 cursor-pointer ">
                            <AiFillDelete  />
                        </td>
                    </tr>
                </tbody>)}
            </table>
            {products.length===0 && <Loader  />}
        </div>


    );
};

export default ProductsAll;
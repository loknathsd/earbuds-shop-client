import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import Loader from '../../Shared/Loader/Loader';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const qty = (products) => products.reduce((prev, cur) => prev + cur.quantity, 0);
    useEffect(() => {
        fetch("https://earbuds.onrender.com/order",{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
}, [])
const handleDelete = async (id) => {
    const res = await axios.delete(`https://earbuds.onrender.com/order/${id}`).catch(e => toast.error("Something went wrong"))
    if(res?.data) {
                    const filter = orders.filter(order => order._id !== id);
                    setOrders(filter);
                    toast.success(res?.data)
                }
            }
return(
    <div style = {{ fontFamily: 'rokkitt' }} className = "overflow-y-scroll h-screen relative shadow-md sm:rounded-lg lg:mx-16 mt-5 w-full max-w-full" >
        <table className="  w-full min-w-0 text-lg text-center text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700  uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-5 ">
                        name
                    </th>
                    <th scope="col" className="px-6 py-5">
                        email
                    </th>
                    <th scope="col" className="px-6 py-5">
                        items
                    </th>
                    <th scope="col" className="px-10 py-5">
                        total Price
                    </th>
                    <th scope="col" className="px-10 py-5">
                        action
                    </th>
                </tr>
            </thead>
            {orders.map(order => <tbody key={order._id}>
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {order.fullname}
                    </th>
                    <td className="px-6 py-4">
                        {order.email}
                    </td>
                    <td className="px-6 py-4">
                        {qty(order?.products)}
                    </td>
                    <td className="px-6 py-4">
                        ${order.totalprice}
                    </td>
                    <td className="px-12 text-lg text-red-500 py-4">
                        <button onClick={() => handleDelete(order._id)} ><AiFillDelete /></button>
                    </td>
                </tr>
            </tbody>)}
        </table>
        { orders.length === 0 && <Loader /> }
    </div >
);
};

export default Orders;
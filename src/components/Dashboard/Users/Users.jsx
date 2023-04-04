import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import Loader from '../../Shared/Loader/Loader';

const Users = () => {
    const [users, setUsers] = useState([]);
    const filterUsers = users.filter(fuser => fuser.role !== 'admin');
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDelete = async(id) => {
        console.log(id);
        const res = await axios.delete(`http://localhost:5000/user/${id}`).catch(e=>toast.error('Something went wrong'))
        console.log(res,'res')
        if(res?.data){
            toast.success(res?.data?.message);
            let remainUser = filterUsers.filter(us=>us._id !== id);
            setUsers(remainUser);
        }
    }
    return (
        <div style={{fontFamily:'rokkitt'}} className="relative overflow-auto shadow-md sm:rounded-lg mx-16 mt-5 w-[100%]">
            <table className="w-full text-lg text-left text-gray-600 dark:text-gray-400">
                <thead className="text-xs text-gray-700  uppercase bg-gray-300  dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-5 ">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Create Date
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Action
                        </th>

                    </tr>
                </thead>
                {filterUsers.map(user => <tbody key={user._id}>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {user.name}
                        </th>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        <td className="px-6 py-4">
                            {user?.phone}
                        </td>
                        <td className="px-6 py-4">
                            {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-12 text-lg text-red-500 py-4">
                            <button onClick={() => handleDelete(user._id)} ><AiFillDelete /></button>
                        </td>
                    </tr>
                </tbody>)}
            </table>
            {filterUsers.length === 0 && <Loader />}
        </div>
    );
};

export default Users;
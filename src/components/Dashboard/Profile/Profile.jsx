import React from 'react';
import Avatar from '../../../assets/001-man.svg'
import { useStateContext } from '../../../context/StateContext';

const Profile = () => {
    const { user } = useStateContext();
    return (
        <div className='lg:w-[60%] md:w-[80%]  mx-auto border border-gray-200 rounded-md shadow-2xl p-10'>
            <div className='lg:w-[70%] md:w-[90%] mx-auto border border-gray-400 rounded lg:p-10 md:p-8 max-sm:p-5'>
                <img className='lg:w-44 md:w-40 max-sm:w-24 mx-auto border border-gray-200 rounded' src={Avatar} alt="" />
                <div className='mt-5 lg:text-xl md:text-lg max-sm:text-sm font-bold text-center text-gray-500'>
                    <p>Name : {user.name}</p>
                    <p className='my-2'>Email : {user.email}</p>
                    <p>Phone Number : {user.phone}</p>
                    <p>Role : {user.role}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
import React from 'react';

const AddProduct = () => {
    return (
        <div className='lg:w-[100%] shadow-lg bg-gray-100 rounded-lg p-12 lg:mx-[20%] mt-5 md:mx-10 max-sm:mx-6 text-center  '>
           <h1 className='text-center text-xl font-semibold '>Add Product</h1>
           <form action="" className=''>
              <input className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="text" placeholder='Name'  /><br />
              <input className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="number" placeholder='Price' /><br />
              <input className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 border rounded-md my-3 border-gray-300' type="file"  /><br />
              <button className=' py-1 px-5 lg:w-96 md:w-72 max-sm:w-48 bg-slate-500 text-white border rounded-md my-3 border-gray-300' type='submit'>Save</button>
           </form>
            
        </div>
    );
};

export default AddProduct;
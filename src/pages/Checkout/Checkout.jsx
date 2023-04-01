import React from 'react';
import { useStateContext } from '../../context/StateContext';
import Form from './Form';

const Checkout = () => {
    const {cartItems,totalPrice} = useStateContext();
    return (
      <section>
        <div className="mx-auto grid max-w-screen-lg px-16 grid-cols-1 md:grid-cols-2 bg-gray-50">
          <div className=" py-12 md:py-24">
            <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-full bg-blue-700"></span>
                <h2 className="font-medium text-gray-900">BambooYou</h2>
              </div>
              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">Total Price :
                  ${totalPrice}
                </p>
                <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
              </div>
              <div>
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-100">
                    {cartItems.length >=1 && cartItems.map(item=><li key={item._id} className="flex items-center gap-4 py-4">
                      <img
                        src={item.imgUrl}
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                      />
                      <div>
                        <h3 className="text-lg text-gray-900">{item.name}</h3>
                        <dl className="mt-0.5 space-y-px  text-gray-600">
                          <div>
                            <dt className="inline">Qty : {item.quantity}</dt>
                          </div>
                        </dl>
                      </div>
                    </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-5 md:py-24 border border-gray-200">
            <div className="mx-auto max-w-lg px-4 lg:px-8 ">
            <Form cartItems={cartItems} totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default Checkout;
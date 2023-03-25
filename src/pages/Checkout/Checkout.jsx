import React from 'react';
import { useStateContext } from '../../context/StateContext';
import Form from './Form';

const Checkout = () => {
    const {cartItems,totalPrice} = useStateContext();
    return (
      <section>
        <div class="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
          <div class="bg-gray-50 py-12 md:py-24">
            <div class="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div class="flex items-center gap-4">
                <span class="h-10 w-10 rounded-full bg-blue-700"></span>
                <h2 class="font-medium text-gray-900">BambooYou</h2>
              </div>
      
              <div>
                <p class="text-2xl font-medium tracking-tight text-gray-900">Total Price :
                  ${totalPrice}
                </p>
                <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
              </div>
              <div>
                <div class="flow-root">
                  <ul class="-my-4 divide-y divide-gray-100">
                    {cartItems.length >=1 && cartItems.map(item=><li class="flex items-center gap-4 py-4">
                      <img
                        src={item.img}
                        alt=""
                        class="h-16 w-16 rounded object-cover"
                      />
                      <div>
                        <h3 class="text-lg text-gray-900">{item.name}</h3>
                        <dl class="mt-0.5 space-y-px  text-gray-600">
                          <div>
                            <dt class="inline">Qty : {item.quantity}</dt>
                          </div>
                        </dl>
                      </div>
                    </li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white py-12 md:py-24">
            <div class="mx-auto max-w-lg px-4 lg:px-8">
            <Form />
            </div>
          </div>
        </div>
      </section>
      
    );
};

export default Checkout;
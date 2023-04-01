import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useStateContext } from '../../context/StateContext'
import { useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';

export default function Cart() {
    const { totalPrice, showCart, setShowCart, totalQuantities, cartItems, removeProduct, toggleCartItemQuantity } = useStateContext();
    const navigate = useNavigate();
    const handleCheckout=()=>{
        navigate("/checkout");
        setShowCart(false);
    }
    return (
        <Transition.Root show={showCart} as={Fragment}>
            <Dialog as="div" className="relative z-20" onClose={setShowCart}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart ({totalQuantities} items)</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="px-2 rounded text-red-600 border border-red-600 "
                                                        onClick={() => setShowCart(false)}
                                                    >
                                                        <span className="">X</span>
                                                        {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
                                                    </button>
                                                </div>
                                            </div>
                                            {cartItems.length < 1 && <EmptyCart />}
                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cartItems.map((product) => (
                                                            <li key={product.id} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        src={product?.imgUrl}
                                                                        alt={product.imageAlt}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>
                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>
                                                                                <a href={product.href}>{product?.name}</a>
                                                                            </h3>
                                                                            <p className="ml-4">${product?.price}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm ">
                                                                        <div className='flex'>
                                                                            <button onClick={() => toggleCartItemQuantity(product._id, 'dec')} className="px-3  bg-gray-400 rounded text-red-600">-</button>
                                                                            <p className="text-gray-500 px-2"> {product?.quantity}</p>
                                                                            <button onClick={() => toggleCartItemQuantity(product._id, 'inc')} className="px-2 bg-gray-400 rounded text-red-600">+</button>
                                                                        </div>

                                                                        <div className="flex">
                                                                            <button
                                                                                onClick={() => removeProduct(product)}
                                                                                type="button"
                                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                            >
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {cartItems.length >= 1 && <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>${totalPrice}</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                            <div className="mt-6 text-center">
                                                <button
                                                   onClick={handleCheckout}
                                                    className="rounded-md border border-transparent bg-indigo-600 px-6 w-full py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                >
                                                    Checkout
                                                </button>
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={() => setShowCart(false)}
                                                    >
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

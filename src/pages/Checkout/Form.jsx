import React from 'react';

const Form = () => {
    return (
        <div>
            <form className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                    <label
                        for="FirstName"
                        className="block text-xs font-medium text-gray-700"
                    >
                        First Name
                    </label>

                    <input
                        type="text"
                        id="FirstName"
                        className="mt-1 w-full rounded-md border border-gray-400 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <div className="col-span-3">
                    <label
                        for="LastName"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Last Name
                    </label>

                    <input
                        type="text"
                        id="LastName"
                        className="mt-1 w-full rounded-md border border-gray-500 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <div className="col-span-6">
                    <label for="Email" className="block text-xs font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        id="Email"
                        className="mt-1 w-full rounded-md border border-gray-500 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <div className="col-span-6">
                    <label for="Phone" className="block text-xs font-medium text-gray-700">
                        Phone
                    </label>

                    <input
                        type="tel"
                        id="Phone"
                        className="mt-1 w-full rounded-md border border-gray-500 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <fieldset className="col-span-6">
                    <legend className="block text-sm font-medium text-gray-700">
                        Card Details
                    </legend>

                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                        <div>
                            <label for="CardNumber" className="sr-only"> Card Number </label>

                            <input
                                type="number"
                                id="CardNumber"
                                placeholder="Card Number"
                                className="relative mt-1 mb-2 w-full rounded-t-md border border-gray-500 focus:z-10 sm:text-sm py-2"
                            />
                        </div>

                        <div className="flex -space-x-px gap-2 ">
                            <div className="flex-1">
                                <label for="CardExpiry" className="sr-only"> Card Expiry </label>

                                <input
                                    type="number"
                                    id="CardExpiry"
                                    placeholder="Expiry Date"
                                    className="relative w-full rounded-bl-md   border border-gray-500 focus:z-10 sm:text-sm py-2"
                                />
                            </div>

                            <div className="flex-1">
                                <label for="CardCVC" className="sr-only"> Card CVC </label>

                                <input
                                    type="number"
                                    id="CardCVC"
                                    placeholder="CVC"
                                    className="relative w-full rounded-br-md border border-gray-500 focus:z-10 sm:text-sm py-2"
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="col-span-6">
                    <legend className="block text-sm font-medium text-gray-700">
                        Billing Address
                    </legend>

                    <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                        <input type="text" placeholder='Your Address' className="relative w-full mb-3 rounded-br-md border border-gray-500 focus:z-10 sm:text-sm py-2" />

                        <div>
                            <label className="sr-only" for="PostalCode"> ZIP/Post Code </label>

                            <input
                                type="text"
                                id="PostalCode"
                                placeholder="ZIP/Post Code"
                                className="relative w-full rounded-b-md  border border-gray-500 focus:z-10 sm:text-sm py-2"
                            />
                        </div>
                    </div>
                </fieldset>

                <div className="col-span-6">
                    <button
                        className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                    >
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
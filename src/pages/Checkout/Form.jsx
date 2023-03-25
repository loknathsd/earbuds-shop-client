import React from 'react';

const Form = () => {
    return (
        <div>
            <form class="grid grid-cols-6 gap-4">
                <div class="col-span-3">
                    <label
                        for="FirstName"
                        class="block text-xs font-medium text-gray-700"
                    >
                        First Name
                    </label>

                    <input
                        type="text"
                        id="FirstName"
                        class="mt-1 w-full rounded-md border border-gray-400 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <div class="col-span-3">
                    <label
                        for="LastName"
                        class="block text-xs font-medium text-gray-700"
                    >
                        Last Name
                    </label>

                    <input
                        type="text"
                        id="LastName"
                        class="mt-1 w-full rounded-md border border-gray-500 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <div class="col-span-6">
                    <label for="Email" class="block text-xs font-medium text-gray-700">
                        Email
                    </label>

                    <input
                        type="email"
                        id="Email"
                        class="mt-1 w-full rounded-md border border-gray-500 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <div class="col-span-6">
                    <label for="Phone" class="block text-xs font-medium text-gray-700">
                        Phone
                    </label>

                    <input
                        type="tel"
                        id="Phone"
                        class="mt-1 w-full rounded-md border border-gray-500 shadow-sm sm:text-sm py-2"
                    />
                </div>

                <fieldset class="col-span-6">
                    <legend class="block text-sm font-medium text-gray-700">
                        Card Details
                    </legend>

                    <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                        <div>
                            <label for="CardNumber" class="sr-only"> Card Number </label>

                            <input
                                type="number"
                                id="CardNumber"
                                placeholder="Card Number"
                                class="relative mt-1 mb-2 w-full rounded-t-md border border-gray-500 focus:z-10 sm:text-sm py-2"
                            />
                        </div>

                        <div class="flex -space-x-px gap-2 ">
                            <div class="flex-1">
                                <label for="CardExpiry" class="sr-only"> Card Expiry </label>

                                <input
                                    type="number"
                                    id="CardExpiry"
                                    placeholder="Expiry Date"
                                    class="relative w-full rounded-bl-md   border border-gray-500 focus:z-10 sm:text-sm py-2"
                                />
                            </div>

                            <div class="flex-1">
                                <label for="CardCVC" class="sr-only"> Card CVC </label>

                                <input
                                    type="number"
                                    id="CardCVC"
                                    placeholder="CVC"
                                    class="relative w-full rounded-br-md border border-gray-500 focus:z-10 sm:text-sm py-2"
                                />
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset class="col-span-6">
                    <legend class="block text-sm font-medium text-gray-700">
                        Billing Address
                    </legend>

                    <div class="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                        <input type="text" placeholder='Your Address' class="relative w-full mb-3 rounded-br-md border border-gray-500 focus:z-10 sm:text-sm py-2" />

                        <div>
                            <label class="sr-only" for="PostalCode"> ZIP/Post Code </label>

                            <input
                                type="text"
                                id="PostalCode"
                                placeholder="ZIP/Post Code"
                                class="relative w-full rounded-b-md  border border-gray-500 focus:z-10 sm:text-sm py-2"
                            />
                        </div>
                    </div>
                </fieldset>

                <div class="col-span-6">
                    <button
                        class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                    >
                        Pay Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
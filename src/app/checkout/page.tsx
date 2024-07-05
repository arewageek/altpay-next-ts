
import React from 'react'

const CheckoutPage = () => {
    return (
        <div className='w-full h-screen overflow-x-auto bg-white'>
            <div className=' border-b-2'>
                <div className='w-full flex items-center justify-center lg:justify-start lg:w-[67%] m-auto'>
                    <img src=".." alt=".." className='h-[70pt] w-[70pt] border-2' />
                </div>
            </div>
            <div className='flex justify-end'>
                <form action="" className='flex flex-col-reverse lg:flex-row justify-end w-full lg:w-[83.5%] divide-x-2'>

                    <div className='lg:w-1/2 w-full pb-10'>
                        <div className='flex flex-col gap-y-10 w-full mt-8 lg:pr-10 px-10 lg:px-0'>
                            <div className='flex flex-col gap-y-2'>
                                <h3 className='font-medium text-xl'>
                                    Contact
                                </h3>
                                <div className='relative group transition-all p-0'>
                                    <input type='text' required className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                    <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                        Email
                                    </label>
                                </div>

                            </div>


                            <div className='flex flex-col gap-y-5'>
                                <h3 className='font-medium text-xl'>
                                    Delivery
                                </h3>
                                <div className='relative group transition-all p-0'>
                                    <select className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer bg-white'>
                                        <option value="">Opps</option>
                                    </select>
                                    <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                        Country/Region
                                    </label>
                                </div>

                                <div className='flex gap-3 w-full'>
                                    <div className='relative group transition-all p-0 w-1/2'>
                                        <input type='text' required className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                        <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                            First Name
                                        </label>
                                    </div>

                                    <div className='relative group transition-all p-0 w-1/2'>
                                        <input type='text' required className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                        <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                            Last Name
                                        </label>
                                    </div>
                                </div>

                                <div className='relative group transition-all p-0'>
                                    <input type='text' required className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                    <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                        Address
                                    </label>
                                </div>

                                <div className='flex gap-3 w-full'>
                                    <div className='relative group transition-all p-0 w-1/3'>
                                        <input type='text' required className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                        <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                            City
                                        </label>
                                    </div>

                                    <div className='relative group transition-all p-0 w-1/3'>
                                        <input type='text' required className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                        <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                            State
                                        </label>
                                    </div>

                                    <div className='relative group transition-all p-0 w-1/3'>
                                        <input type='text' required className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                        <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                            Postal Code
                                        </label>
                                    </div>
                                </div>

                                <div className='relative group transition-all p-0'>
                                    <input type='text' className='border-2 rounded w-full border-black/30 px-3 pt-3.5 pb-1 peer' />
                                    <label className='absolute left-3 top-2 group-focus-within:top-0 group-focus-within:left-2.5 group-focus-within:text-[9pt]  peer-valid:top-0 peer-valid:left-2.5 peer-valid:text-[9pt] transition-all font-medium py-1'>
                                        Phone Number (Optional)
                                    </label>
                                </div>

                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <h3 className='font-medium text-xl'>
                                    Shipping Method
                                </h3>
                                <div className='relative group transition-all p-0'>
                                    <div className='w-full h-full py-4 text-xs border-2 text-center'>
                                        Input delivery details to get shipping rates
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <h3 className='font-medium text-xl'>
                                    Payment
                                </h3>
                                <div className='relative group transition-all p-0'>
                                    <button className='border-0 bg-primary-base hover:bg-primary-fade w-full p-3 rounded text-white font-medium transition'>
                                        Proceed to Payment
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='bg-gray-100 p-4 lg:p-10 w-full lg:w-1/2 h-full lg:min-h-screen'>
                        <div className="w-full lg:w-3/5 grid gap-8">
                            <div className='lg:hidden font-bold flex justify-between items-center'>
                                <div>
                                    Hide Order Summary
                                </div>
                                <div>
                                    NaN
                                </div>
                            </div>
                            <div className='font-thin text-center'>
                                No cart items
                            </div>

                            <div className='flex'>
                                <input type='text' className='border p-2 w-full' placeholder='Discount Code' />
                                <button className='bg-primary-base hover:bg-primary-fade transition font-medium px-10 rounded-r text-white'>
                                    Apply
                                </button>
                            </div>

                            <div className='flex flex-wrap'>
                                <div className='w-1/2'>
                                    Subtotal
                                </div>
                                <div className='w-1/2 flex justify-end'>
                                    NaN
                                </div>

                                <div className='w-1/2'>
                                    Shipping
                                </div>
                                <div className='w-1/2 flex justify-end'>
                                    0.00
                                </div>

                                <div className='w-1/2'>
                                    Discount
                                </div>
                                <div className='w-1/2 flex justify-end'>
                                    0.00
                                </div>

                                <div className='w-1/2 font-bold'>
                                    Total
                                </div>
                                <div className='w-1/2 flex justify-end font-bold'>
                                    NaN
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutPage
import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
const FirstSidebar = () => {
    return (
        <div className=' pt-[50px] lg:bg-gray-50'>
            <div className='flex space-x-6 justify-center'>
                <img className='w-16 h-16 rounded-full drop-shadow-2xl ' src="https://i.ibb.co/mNDKM1W/4.jpg" alt="" />
                <div>
                    <h1 className=' text-3xl text-cyan-600 font-bold'>Hi Mike,</h1>
                    <p>Welcome back,</p>
                </div>
            </div>
            <div className=' flex justify-center'>

                <div className=' space-y-4 mt-12'>
                    <div className=' space-y-4 p-6 lg:p-0 rounded-xl bg-gray-200 lg:bg-inherit'>
                        <div>
                            <h1 className=' text-xl font-bold '>Today</h1>
                        </div>

                      
                            <div>
                                <h1 className=' text-2xl font-bold'>$19,822</h1>
                                <p className=' text-gray-400'>Account balance</p>
                            </div>

                            <div >
                                <h1 className=' text-xl font-bold'>$4,822</h1>
                                <p className=' text-gray-400'>Year-to-date contribution</p>
                            </div>
                            <div>
                                <h1 className=' text-xl font-bold'>$1,822</h1>
                                <p className=' text-gray-400'>Total interest</p>
                            </div>
                      

                        <div >
                            <button className='btn bg-cyan-600 text-white px-4 py-1 rounded-xl w-full lg:w-1/2'> <div className=' flex justify-center'>
                                <span>I want to</span> <span><AiOutlineCaretDown className=' mt-1 pl-2 '></AiOutlineCaretDown>
                                </span>
                            </div>
                            </button>
                        </div>
                    </div>



                    <div className=' pace-y-4 p-6 lg:p-0 rounded-xl bg-gray-200 lg:bg-inherit'>
                        <div className=' '>
                            <p className=' text-xl font-bold'>Recent Transaction</p>
                        </div>
                        <div className=' space-y-8 divide-y '>
                            <div className=' '>
                                <p className=' text-gray-400'>2020-8-7</p>
                                <p className=' font-bold divide-y'>Withdrawal Transfer Bank-XXX11</p>

                            </div>
                            <div>
                                <p className=' text-gray-400'>2020-8-7</p>
                                <p className=' font-bold'>Withdrawal Transfer Bank-XXX11</p>
                            </div>
                            <div>
                                <p className=' text-gray-400'>2020-8-7</p>
                                <p className=' font-bold'>Withdrawal Transfer Bank-XXX11</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FirstSidebar;
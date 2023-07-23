import React from 'react';
import { Line, } from 'rc-progress';
import { AiOutlineRight } from 'react-icons/ai';
const ThirdSlidebar = () => {
    return (
        <>
            <div className='px-8 mx-auto '>
                <div className=' space-y-4 mb-8'>
                    <h1 className=' font-bold'>Retirement strategy</h1>
                    <div className=' '>
                        <h1 className=' font-semibold'>Employee contribution</h1>
                        <div className=' flex space-x-2'>
                            <Line className="w-1/2 " percent={59} strokeWidth={2} trailWidth={2} strokeColor="#4B89A8" />
                            <p className=' font-semibold'>12%</p>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className=' font-semibold'>Requirement age</h1>
                        <div className=' flex space-x-2'>
                            <Line className="w-1/2 " percent={79} strokeWidth={2} trailWidth={2} strokeColor="#4B89A8" />
                            <p className=' font-semibold'>69</p>
                        </div>
                    </div>
                </div>
                <div className=' font-semibold space-y-4 pt-8'>
                    <div className=' flex space-x-4'>
                        <p>Employee Contribution</p>
                        <p>8.4%</p>
                    </div>
                    <div className=' flex space-x-4'>
                        <p>Employee Contribution</p>
                        <p>8.4%</p>
                    </div>
                </div>
                <div className=' pt-8'>
                    <button className='btn w-full flex mx-auto bg-cyan-600 text-white px-4 py-1 rounded-xl w-full lg:w-3/4'> <div className=' flex mx-auto justify-center'>
                        <span className=' mx-auto'>Update</span>
                    </div>
                    </button>
                    <p className='hidden  sm:block cursor-pointer hover:text-cyan-600 flex mt-8 justify-center text-cyan-500 font-semibold'>View help Docs > </p>
                </div>
                <div className=' mt-8 hidden sm:block border-l-4 border-cyan-500 pl-4'>
                    <p>Are you considering a </p>
                    <p className='font-bold'>Housing advance ?</p>
                    <p className=' text-gray-400 text-sm mt-2'>Limited time reduce interest</p>
                    <p className=' text-cyan-400 cursor-pointer hover:text-cyan-600'>Learn more ></p>
                </div>
            </div>
        </>
    );
};

export default ThirdSlidebar;
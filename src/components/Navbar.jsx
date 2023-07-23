import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiHome } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti';
import { FaWpforms } from 'react-icons/fa';
import { LuBellDot } from 'react-icons/lu';
import { HiOutlineLogout } from 'react-icons/hi';
const Navbar = () => {
    return (
        <>
            <div className='  w-full bottom-0 sm:inherit flex  justify-between  items-center px-6 bg-gray-200  rounded-t-2xl'>
                <div className=' flex items-center '>
                   <div className=' flex space-x-5 items-center '>
                   <img className='h-12 hidden sm:block' src="https://i.ibb.co/DwKZGX4/pro.jpg" alt="" />
                    <p><BiSearch className='text-xl mt-2 lg:mr-5'></BiSearch></p>
                   </div>
                    <div className=' flex space-x-8'>
                    <p><FiHome className='text-xl  '></FiHome></p>
                    <p><TiDocumentText className='text-xl'></TiDocumentText></p>
                    <p><AiOutlineUser className='text-xl'></AiOutlineUser></p>
                    <p><FaWpforms className='text-xl'></FaWpforms></p>
                    </div>
                </div> 
                <div className=' flex space-x-8 ' >
                    <p><LuBellDot className='text-xl '></LuBellDot></p>
                    <p><HiOutlineLogout className='text-xl'></HiOutlineLogout></p>
                </div>
            </div>
            
        </>
    );
};

export default Navbar;






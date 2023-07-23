import Recharts from "./Recharts";
import { AiOutlineCaretDown } from 'react-icons/ai';
import { Line, Circle } from 'rc-progress';
const SecondSlider = () => {
    return (
        <div className='px-8 pt-8 '>
            <div className=' '>
                <p className=' font-bold text-cyan-600'>Requirement income</p>
                <h1 className=' text-2xl font-bold'>Starting Year 2056</h1>
            </div>
            <div className=' grid lg:grid-cols-3  mt-8 w-full'>
                <div className=''>
                    <h1 className=' text-xl font-bold'>$30,0000</h1>
                    <p className=' text-gray-400 decoration-cyan-600 underline underline-offset-[20px]'>My goal</p>
                </div>

                <div >
                    <h1 className=' text-xl font-bold'>$30,0000</h1>
                    <p className=' decoration-cyan-600 text-gray-400 underline underline-offset-[20px]'>My goal</p>
                </div>
                <div>
                    <h1 className=' text-xl font-bold'>$30,0000</h1>
                    <p className='decoration-cyan-600 text-gray-400 underline underline-offset-[20px]'>My goal</p>
                </div>
            </div>
            <div className=' mt-8'>
                <p className=' font-bold'>Contract overtime</p>
            </div>
            <div className=' space-y-4 mt-4'>
                <div className='lg:flex '>
                    <p className='text-gray-400'>Employer</p>
                    <p className='  font-bold'>$32000</p>
                </div>
                <div className=' lg:flex'>
                    <p className='text-gray-400'>Employer</p>
                    <p className='  font-bold'>$12000</p>
                </div>
                <div className=' lg:flex'>
                    <p className='text-gray-400'>Total internet</p>
                    <p className=' font-bold'>$32000</p>
                </div>
            </div>
            <div className=" mt-8">
                <Recharts></Recharts>
            </div>
            <div className=" mt-8">
                <div>
                    <h1 className="  font-bold">How my complete my peers ?</h1>
                    <p className=" text-gray-400">This number represent current goal achievement</p>
                </div>
                <div className=" grid md:grid-cols-2">
                    <div className=" mt-8 space-y-4 divide-y">
                        <div className=" flex items-center space-x-2"> <span><span className=" font-bold">Age:</span>  Under 30</span>   <span className="mt-1"><AiOutlineCaretDown></AiOutlineCaretDown></span></div>
                        <div className=" flex items-center space-x-2"> <span><span className=" font-bold">Salary:</span>  K30-K30</span>   <span className="mt-1"><AiOutlineCaretDown></AiOutlineCaretDown></span></div>
                        <div className=" flex items-center space-x-2"> <span><span className=" font-bold">Gender:</span>  Male</span>   <span className="mt-1"><AiOutlineCaretDown></AiOutlineCaretDown></span></div>
                    </div>
                    <div className=" flex space-x-6 lg:space-x-4  justify-center items-center md:w-full">
                        <div>
                           
                            <Circle className="w-16 " percent={78} strokeWidth={8} trailWidth={8} strokeColor="#4B89A8" />
                            <p className=" font-bold flex justify-center">78%</p>
                        </div>
                        <div>
                           
                            <Circle className="w-16 " percent={95} strokeWidth={8} trailWidth={8} strokeColor="#4B89A8" />
                            <p className=" font-bold flex justify-center  ">95%</p>
                        </div>
                        <div>
                           
                            <Circle className="w-16 " percent={60} strokeWidth={8} trailWidth={8} strokeColor="#4B89A8" />
                            <p className=" font-bold flex justify-center  ">60%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSlider;
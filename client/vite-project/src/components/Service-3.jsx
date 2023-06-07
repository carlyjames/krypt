import React from 'react'
import { HiArrowRight } from 'react-icons/hi';


const Services3 = () => {
    return (
        <div className='h-screen flex justify-center items-center lg:mt-0 mt-16'>
            <div className='blur lg:block hidden h-[400px] w-[400px] rounded-full transform -translate-x-[200px] -translate-y-[200px]'></div>
            <div className='text-center lg:w-[30%]'>
                <h1 className='text-6xl font-black bold-text text-white'>Secured by <br /> the ATOM.</h1>
                <p className='lg:text-xl text-gray-400 mt-8 llg:px-0 px-4'>In return for securing the services on the Krypt Hub, transaction fees and staking rewards are distributed to ATOM stakers.</p>
                <div className='flex lg:flex-row flex-col lg:px-0 px-8 mt-8 gap-4'>
                    <div className=' lg:flex join_btn rounded-xl p-5 text-xl px-6 cursor-pointer text-black bg-white flex items-center justify-center gap-2 '>
                        Connect Wallet
                        <HiArrowRight className='join_arrow' />
                    </div>
                    <div className=' lg:flex join_btn rounded-xl p-3 px-6 cursor-pointer text-white text-xl flex items-center justify-center gap-2 hover:text-gray-400 ease'>
                        Join Us
                        <HiArrowRight className='join_arrow' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services3
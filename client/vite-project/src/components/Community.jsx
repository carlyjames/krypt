import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

const Community = () => {
    return (
        <div className='community flex lg:justify-center  items-center gap-8 h-screen w-[100%]  text-white lg:mt-0 mt-8'>
            <div className='flex lg:flex-row flex-col lg:ml-24 lg:p-0 p-4'>
                <div className='flex flex-col items-start  gap-8 lg:w-[50%] '>
                    <h1 className='lg:text-6xl text-5xl font-black bold-text'>Meet the <br /> worldwide <br /> community.</h1>
                    <p className='lg:text-xl text-gray-400'>Join a fast-growing community of developers and innovators connected all over the world, building the new era of the internet.</p>
                    <div className=' lg:flex join_btn rounded-xl py-3 cursor-pointer text-white text-xl flex items-center justify-center gap-4 hover:text-gray-400 ease'>
                        Community
                        <HiArrowRight className='transform -rotate-45' />
                    </div>
                </div>
                <div className='flex flex-col gap-8   lg:px-4 lg:mt-0 mt-8'>

                <div className='flex gap-4 lg:px-16 hover:text-gray-200 ease-in transform hover:-translate-y-1 cursor-pointer'>
                        <TelegramIcon />
                        <div className='flex flex-col'>
                            <h1 className='flex gap-4 font-bold text-xl'>Community Chat <HiArrowRight className='transform -rotate-45' /></h1>
                            <p className='text-gray-400 lg:text-xl'>Ask general questions and chat with the worldwide community on Telegram.</p>
                        </div>
                    </div>


                    <div className='flex gap-4 lg:px-16 hover:text-gray-200 ease-in transform hover:-translate-y-1 cursor-pointer'>
                        <TwitterIcon   />
                        <div className='flex flex-col'>
                            <h1 className='flex gap-4 font-bold text-xl'>Twitter  <HiArrowRight className='transform -rotate-45' /></h1>
                            <p className='text-gray-400 lg:text-xl'>Follow @Krypt to get the latest news and updates from across the ecosystem. </p>
                        </div>
                    </div>


                    <div className='flex gap-4 lg:px-16 hover:text-gray-200 ease-in transform hover:-translate-y-1 cursor-pointer'>
                        <DeveloperBoardIcon />
                        <div className='flex flex-col'>
                            <h1 className='flex gap-4 font-bold text-xl'>Developers Chat <HiArrowRight className='transform -rotate-45' /></h1>
                            <p className='text-gray-400 lg:text-xl'>Follow @Krypt to get the latest news and updates from across the ecosystem.</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Community
import React from 'react'
import { HiArrowRight } from 'react-icons/hi';


const Service = () => {
  return (
    <div className='services_bg h-screen'>
      <div className='h-max grid lg:grid-cols-5 grid-cols-1  text-white lg:px-8 gap-2 '>
        <div className='col-start-2 col-span-3 px-6 pt-4   '>
          <h2 className='text-gray-400 font-bold'>COMMUNITY-OWNED AND OPERATED</h2>
          <h1 className='text-white lg:text-6xl text-4xl font-extrabold mt-8'>
            Enter a new <br /> universe of <br /> connected <br /> services.
          </h1>
          <p className='lg:w-[70%] mt-8 lg:text-xl text-gray-400'>
            Krypt apps and services connect using IBC, the Inter-Blockchain Communication protocol. This innovation enables you to freely exchange assets and data across sovereign,
          </p>
          <div className='flex lg:flex-row flex-col mt-8 gap-4'>
            <div className=' lg:flex join_btn rounded-xl p-5  text-xl text-medium px-6 cursor-pointer text-black bg-white flex items-center justify-center gap-2 '>
              Connect Wallet
              <HiArrowRight className='join_arrow' />
            </div>
            <div className=' lg:flex join_btn rounded-xl p-3 px-6 cursor-pointer text-white text-xl flex items-center justify-center gap-2 hover:text-gray-400 ease'>
              Join Us
              <HiArrowRight className='join_arrow' />
            </div>
          </div>
        </div>
        <div className='flex lg:gap-16 flex-col col-span-1 lg:px-0 px-8 lg:gap-0 gap-8 pt-4 w-[100%] '>
          <div className='lg:mt-16 py-2 w-max '>
            <h1 className='lg:text-6xl text-5xl font-black bold-text'>275+</h1>
            <p className='text-gray-400'>Apps & services, and growing.</p>
          </div>
          <div className='lg:mt-16 py-2 w-max'>
            <div className='flex'>
              <h1 className='lg:text-6xl text-5xl font-black bold-text'>$56B+</h1>
              <p className='vertical-rl text-gray-400 text-sm mt-3 m-2'>USD</p>
            </div>
            <p className='text-gray-400'>Digital assets under management.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
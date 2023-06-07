import React from 'react'
import { ServicesData } from './service-2-data'
import { HiArrowRight } from 'react-icons/hi';
import coin2 from '../Assets/images/2-coins.svg'
import coin1 from '../Assets/images/coin.svg'

const Services2 = () => {
    return (
        <div className='service-2 text-white h-max lg:mt-0 mt-[15rem] '>
            <div className='grid grid-cols-3 pt-4 '>
                <img src={coin1} className='lg:absolute right-10 transform lg:mt-16' alt="" />
                <img src={coin2} className='lg:absolute right-10 transform rotate-45' alt="" />
                <div className='px-4 lg:col-start-2 col-span-3'>
                    <p className='text-gray-400 font-bold'>ENTER THE KRYPT HUB</p>
                    <h1 className='text-6xl font-black bold-text mt-8'>The heart of the <br /> Interchain.</h1>
                    <div className='text-gray-400 mt-8 lg:ml-16 text-xl lg:w-[500px] w-[100%]'>
                        <p>Serving as the economic center of the Interchain, the Krypt Hub is a blockchain that provides vital ecosystem services.</p>
                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1 mt-16 lg:ml-16 ml-0  lg:w-max lg:gap-16 gap-8 items'>
                        {ServicesData.map((item, index) => (
                            <div className='flex flex-col gap-4 lg:w-[250px] w-[100%] p-2'>
                                <div className='h-[80px] w-[80px] bg-gray-900/70 rounded-2xl flex items-center justify-center'>
                                    <img src={item.svg} width='100' height='100' className={`transform translate-x-4 ${item.classProp}`} alt="" />
                                </div>
                                <h1 className='font-bold text-xl' key={item.id + index}>{item.header}</h1>
                                <p className='mt-4 ' key={item.id + index}>{item.info}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services2
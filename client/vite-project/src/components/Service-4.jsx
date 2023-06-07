import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import coin from '../Assets/images/coin.svg'

const Interchain = ({ classProps }) => {
    return (
        <svg className={`${classProps} z-10`} data-v-5ac22525="" width="277" height="300" viewBox="180 150 277 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="gem"><path d="M281.5 250.866L346.447 250.866L374 272.499L281.5 361.004L189 272.499L247.059 252.832L281.5 250.866Z" fill="url(#paint0_linear-173438)"></path> <path d="M281.501 360.999L226.394 294.132L336.607 294.132L281.501 360.999Z" fill="url(#paint1_linear-246308)"></path> <path d="M336.606 294.13L374 272.497L281.5 183.992L189 272.497L226.394 294.13L336.606 294.13Z" fill="url(#paint2_linear-251320)"></path> <path d="M281.501 184L336.607 294.134L226.395 294.134L281.501 184Z" fill="url(#paint3_linear-674502)"></path> <g opacity="0.15" filter="url(#filter0_f-125678)"><path d="M125.563 229.212C125.563 229.212 91.2533 354.384 207.402 427.363C305.625 489.081 404.826 362.325 330.981 297.68C280.385 253.39 279.066 220.249 275.853 177.036C270.756 108.488 165.735 76.6897 125.563 229.212Z" fill="url(#paint4_radial-728508)"></path></g> <defs><filter id="filter0_f-125678" x="0.831055" y="0.0448456" width="475.825" height="563.808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur"></feGaussianBlur></filter> <linearGradient id="paint0_linear-173438" x1="332.671" y1="250.866" x2="332.671" y2="390.504" gradientUnits="userSpaceOnUse"><stop stop-color="#78CCFB"></stop> <stop offset="1" stop-color="#00BD90"></stop></linearGradient> <linearGradient id="paint1_linear-246308" x1="281.501" y1="390.499" x2="281.501" y2="294.132" gradientUnits="userSpaceOnUse"><stop stop-color="#17DAB0"></stop> <stop offset="1" stop-color="#58E1FF"></stop></linearGradient> <linearGradient id="paint2_linear-251320" x1="229.591" y1="331.497" x2="229.591" y2="154.492" gradientUnits="userSpaceOnUse"><stop stop-color="#86F8FF"></stop> <stop offset="1" stop-color="#ECA2FF"></stop></linearGradient> <linearGradient id="paint3_linear-674502" x1="280.66" y1="154.5" x2="280.66" y2="294.134" gradientUnits="userSpaceOnUse"><stop stop-color="#DEB5FF"></stop> <stop offset="1" stop-color="#A7FAFF"></stop></linearGradient> <radialGradient id="paint4_radial-728508" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(278.952 191.945) rotate(92.6593) scale(223.544 199.613)"><stop stop-color="#DBBBFF"></stop> <stop offset="1" stop-color="#0FF7EC"></stop></radialGradient></defs></svg>
    );
}

const Services4 = () => {
    return (
        <div className='service-4 flex flex-col h-max px-4 b'>
            {/* header */}
            <div className='lg:ml-[15rem] flex flex-col items-start'>
                <h1 className='lg:text-6xl text-4xl font-black bold-text text-white'>Join the Interchain.</h1>
                <div className='mt-4  lg:flex join_btn rounded-xl p-3 px-6 cursor-pointer text-white text-2xl font-medium flex items-center justify-center gap-2 hover:text-gray-400 ease'>
                    Powerful Features
                    <HiArrowRight className='join_arrow' />
                </div>
            </div>
            <div className='flex items-center justify-center mt-8 lg:mt-16 pb-8 '>
                <div className='flex lg:flex-row flex-col gap-8 z-10  lg:w-[80%] '>
                    <div className=' flex flex-col bg-gray-900/70 backdrop-blur-md justify-between gap-16 text-white h-max rounded-[20px] p-3 px-8 py-8 w-[400px]'>
                        <p className='text-gray-400 ml- text-sm font-bold'>INTERCHAIN ACCOUNTS</p>
                        <div className=''>
                            <Interchain classProps='drop-shadow-2xl  ' />
                        </div>
                        <h1 className='text-5xl font-black bold-text'>One secure account for all your digital assets.</h1>
                        <p className='text-gray-400'>Coming Soon</p>
                    </div>
                    <div className='lg:w-[60%] grid lg:px-0'>
                        <div className='grid  grid-cols-2 col-span-1 flex flex-col bg-gray-900/70 backdrop-blur-md justify-between gap-8 text-white h-max rounded-[20px] p-3 px-8 py-8'>
                            <div className='flex flex-col gap-16'>
                                <p className='text-gray-400 ml- text-sm font-bold'>DECENTRALIZED EXCHANGE</p>
                                <h1 className='text-4xl font-black bold-text'>Swap tokens & collectibles.</h1>
                                <p className='text-gray-400'>Coming Soon</p>
                            </div>
                            <img src={coin} alt="" />
                            {/* <div className='glow-ball backdrop-filter blur-sm'></div> */}
                        </div>
                        <div className='grid lg:grid-cols-2 lg:-mt-4 mt-8 gap-8 text-white'>
                            <div className='bg-gray-900/70 backdrop-blur-md rounded-[20px] p-3 px-8 py-8'>
                                <div className='flex flex-col gap-16'>
                                    <p className='text-gray-400 ml- text-sm font-bold'>LIQUID POOLS</p>
                                    <h1 className='text-4xl font-black bold-text'>Provide liquidity. <br />
                                        Earn rewards.</h1>
                                    <p className='text-gray-400'>Coming Soon</p>
                                </div>
                            </div>
                            <div className='bg-gray-900/70 backdrop-blur-md rounded-[20px] p-3 px-8 py-8'>
                                <div className='flex flex-col gap-16'>
                                    <p className='text-gray-400 ml- text-sm font-bold'>WRAPPED ETH / BTC</p>
                                    <h1 className='text-4xl font-black bold-text'>+ Ethereum. <br />
                                        + Bitcoin.</h1>
                                    <p className='text-gray-400'>Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='absolute z-0 blur-2 backdrop-filter  lg:block hidden h-[350px] w-[350px] rounded-full transform translate-y-[100%] translate-x-[100%]'></div>
            </div>
        </div>
    )
}

export default Services4
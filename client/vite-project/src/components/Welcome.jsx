import React from 'react'

const Welcome = () => {
  return (
    <div className='welcome_banner overlay flex justify-center  flex-col h-[100vh] text-white '>
      <div className='inner-welcome text-center px-4 mt-16'>
        <h1 className='text-5xl lg:text-8xl font-extrabold text-gradient'>Build on the <br /> Interchain.</h1>
        <p className='text-sm lg:text-xl text-gray-400  text-center mt-2'>Build a blockchain using the best-in-class open source libraries and services.</p>
      </div>
    </div>
  )
}

export default Welcome
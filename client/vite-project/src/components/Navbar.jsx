import React, { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { HiArrowRight } from 'react-icons/hi';
import logo from '../Assets/images/logo.png'

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`my-2 mx-4 cursor-pointer ${classProps} `}>
      {title}
    </li>
  );
}

const JoinBtn = () => {
  return (
    <div className='hidden lg:flex join_btn rounded-xl p-3 px-6 cursor-pointer text-black bg-white flex items-center justify-center gap-2 '>
      Connect Wallet
      <HiArrowRight className='join_arrow' />
    </div>
  );
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='w-full flex justify-around lg:justify-around items-center  text-gray-400 py-3 bg-gray-700/30 backdrop-blur-md  border-b border-white'>
      
      {/* logo */}
      <div className=''>
        <img src={logo} className='w-32 flex items-center' alt="" />
      </div>
      <div className='hidden lg:flex'>
        <ul className='flex items-center justify-around w-80'>
          {["Learn", "Build", "Explore"].map((items, index) => (
            <NavbarItem key={index + items} title={items} />
          ))}
        </ul>
      </div>
      {/* mobile nav */}
      <div className='lg:hidden flex'>
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul className='className="z-10 fixed -top-0 -right-2 p-6 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col gap-2 justify-start items-end  blue-glassmorphism text-gray-400 animate-slide-in"'>
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Learn", "Build", "Explore"].map((items, index) => (
              <NavbarItem key={index + items} title={items} classprops="my-6 text-xl " />
            ))}
            <div className='flex join_btn rounded-xl p-3 px-6 cursor-pointer text-black bg-white flex items-center justify-center gap-2 mt-4'>
              Connect Wallet
              <HiArrowRight className='join_arrow' />
            </div>
          </ul>
        )}
      </div>
      <JoinBtn />
    </nav>
  )
}

export default Navbar
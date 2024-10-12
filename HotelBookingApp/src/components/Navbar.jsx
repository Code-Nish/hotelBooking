import React, { useState } from 'react'
import Logo from "../assets/logo.png";
import {MenuIcon, CloseIcon, SearchIcon } from '../utils/icons';
import { navigationItems } from '../utils/dataArrays';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu on button click
  };
  return (
    <div className="absolute top-0 left-0 flex flex-col md:flex-row w-full md:items-center justify-between  md:bg-white/10   md:h-[120px]  px-4 md:px-[7.5%]">
        
          {/* Logo */}
          <div className="logo w-[100px] md:w-[140px] h-[40px] md:h-[140px]  " >
            <img src={Logo} alt="Logo"/>
          </div>
        
          
      
          
    <div className="flex justify-end items-center w-full md:gap-8 gap-4">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-4 md:gap-7">
        {navigationItems.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="text-[#d6df70] font-bold text-[18px]">
            {item.title}
          </a>
        ))}
      </div>

      {/* Menu Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

       {/* Navigation Links */}
       {isMenuOpen && (
        <div className="block md:hidden absolute w-full top-24 left-0  bg-[#bfdee9] z-10  space-y-2">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block text-black font-bold text-[18px]"
          >
            {item.title}
          </a>
        ))}
      </div>
      )}

        {/* Search Button */} 
        <div className="flex items-center">
          <SearchIcon />
        </div>

        {/* Booking Button */}
        <button className="text-[#d6df70] font-bold border-2 border-[#d6df70] p-1 md:p-2 text-[14px] md:text-[20px] md:w-[160px] md:h-[50px] w-[100px] h-[40px]">
          Book Now
        </button>
    </div>

  </div>
  )
}

export default Navbar

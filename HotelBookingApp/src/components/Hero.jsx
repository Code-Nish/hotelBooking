import React from 'react'
import homebg from "../assets/home.jpg"
import Navbar from './Navbar';


const BgStyle = {
    backgroundImage: `url(${homebg})`,
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
     width:'100%',
  };
  

const Hero = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar/>

      {/* Hero Content Section */}
      <div class="bg-cover  h-[260px] md:h-[827px]" style={BgStyle}>
        <div className="absolute gap-2 md:gap-4 top-[200px] md:top-[335px]  text-center md:mx-32 mx-4">
          <h2 className=" text-[20px] md:text-[70px] font-semibold leading-[30px] md:leading-[120px] text-[#ECFF0D]">
            Your Gateway to Unforgettable Stays
          </h2>
          <p className="text-white text-[16px] md:text-[34px] font-bold leading-[21px] md:leading-[60px]">
            Book Luxurious Hotels at the Best Prices
          </p>
        </div>
      </div>

    </div>
  )
}

export default Hero

import React from 'react'
import { FcHome } from "react-icons/fc";
import Icon1 from '../assets/i1.png'
import Icon6 from '../assets/i6.png'
import Icon3 from '../assets/i3.png'
import Icon4 from '../assets/i4.png'


function Footer() {
  return (
    <>
    <div className='bg-[#28322A] py-10'>
    <div className='flex justify-evenly p-10 text-[#ffffff]  max-md:flex-col'>
        <div>
        <h1 className='flex  text-xl items-center max-md:flex-1'><span className='font-extrabold'>Rent</span>Home <FcHome className='ml-1'/></h1>
            <p>The best and easy way <br /> to rent home</p>
        </div>

        <div className='font-medium text-[#b1acac]'>
            <p className='font-bold text-[#ffffff] mb-5'>UseFull Links</p>
            <p className='my-3'>AboutUs</p>
            <p className='my-3'>Events</p>
            <p className='my-3'>Blogs</p>
            <p className='my-3'>FAQ</p>
        </div>

        <div className='font-medium text-[#b1acac]'>
            <p className='font-bold text-[#ffffff] mb-5'>Main Menu</p>
            <p className='my-3'>Home</p>
            <p className='my-3'>Offers</p>
            <p className='my-3'>Menu</p>
            <p className='my-3'>Reservation</p>
        </div>

        <div className='font-medium text-[#b1acac]'>
            <p className='font-bold text-[#ffffff] mb-5'>Contact Us</p>
            <p className='text-[#b1acac]'>Example@gmail.com</p>
            <p className='my-3'>+2348166280639</p>
            <p className='my-3'>Social Media</p>
        </div>
    </div>

    <div className='flex items-center lg:mt-32 max-md:flex-col'>
        <div className='flex items-center lg:ml-48 md:ml-20 max-md:my-5'>
            <span className='mx-2 border-2 border-[#EDFFEF] bg-[#EDFFEF] rounded-full    '><img src={Icon6} alt="social media icons" /></span>
            <span className='mx-2 border-2 border-[#EDFFEF] bg-[#EDFFEF] rounded-full p-3'><img src={Icon1} alt="social media icons" /></span>
            <span className='mx-2 border-2 border-[#EDFFEF] bg-[#EDFFEF] rounded-full p-3'><img src={Icon3} alt="social media icons" /></span>
            <span className='mx-2 border-2 border-[#EDFFEF] bg-[#EDFFEF] rounded-full p-3'><img src={Icon4} alt="social media icons" /></span>
        </div>
        <p className=' lg:ml-24 text-white'>Copyright &#169; 2023 Dscode | All rights reserved</p>
    </div>

    </div>
    
    </>
  )
}

export default Footer
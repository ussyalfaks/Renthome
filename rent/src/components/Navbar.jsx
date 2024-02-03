import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setMenuOpen(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    //   scroll no

    useEffect(() => {
        if (isMenuOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
    
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, [isMenuOpen]);
    
  return (
    <>
    <div className='flex justify-evenly max-md:justify-around bg-[#465C47] text-white py-5'>
        <div className=''>
            <h1 className=''><span className='font-extrabold'>Rent</span>Home</h1>
            </div>
    <nav  className={` ${isMenuOpen ? 'flex  justify-center items-center h-screen' : ''}`}>
     <ul className= {`flex   text-[#CDD4CC] font-semibold ${isMenuOpen ? ' max-md:flex-col' : 'max-md:hidden'}`}>
        <li className='mx-8 hover:underline text-white'>Home</li>
        <li className='mx-8 hover:underline'> About Us</li>
        <li className='mx-8 hover:underline'> Services</li>
        <li className='mx-8 hover:underline'>Blog</li>
        <li className='mx-8 hover:underline'>Contact Us </li>
      </ul>
    </nav>

    <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white'>
          <FaBars size={24} />
        </button>
      </div>
  </div>
    </>
  )
}

export default Navbar

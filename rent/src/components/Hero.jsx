import React from 'react'
import House from "../assets/h1.png"

function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 bg-[#141E15] text-white">
  <div className=" md:text-left lg:ml-40 ">
    <h1 className="text-4xl md:text-5xl mb-4 leading-loose font-Messiri">Your <br /> Rental Journey <br /> Begins Here</h1>
    <p className="text-lg mb-8 capitalize">We make finding rentals easy, Effortless search, Endless Choice </p>
    <div className="flex space-x-4">
      <button className=" py-1 px-4 bg-[#FEA500] btn-outline font-normal rounded-2xl ">Rent Now</button>
      <button className="btn btn-sm btn-outline font-light text-white rounded-2xl ">Rent Your Place</button>
    </div>
  </div>

  <div className="mt-8 md:mt-0 ">
    <img className="w-full max-w-md mx-auto md:max-w-xl" src={House} alt="Herohouse" />
  </div>
</div>

    </>
  )
}

export default Hero

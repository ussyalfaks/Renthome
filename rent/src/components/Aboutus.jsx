import React from 'react'
import ABTHouse from "../assets/h4.png"

function Aboutus() {
  return (
    <>
  <div className="flex flex-col md:flex-row items-center gap-3 justify-center p-2 md:p-16 bg-[#9AB99A] text-white">
  <div className="flex-1 ">
    <img className="w-full max-w-md mx-auto md:max-w-xl" src={ABTHouse} alt="Herohouse" />
  </div>
  <div className="flex-1 md:text-left lg:ml-20 ">
    <h1 className="text-4xl md:text-5xl mb-4 leading-loose font-Messiri">Begin <br /> your awesome  <br /> journey</h1>
    <p className="text-lg mb-8 capitalize">
      Looking for the perfect home to rent? Our user-friendly
      house rental website makes your search a breeze.
      Browse through a diverse range of listings,
      From cozy apartments to spacious family houses.
    </p>
    <p className="text-lg mb-8 capitalize">
      With detailed descriptions, vivid photos, and handy
      filters, finding your ideal rental is just a click away.
    </p>
    <div className="flex space-x-4">
      <button className="py-1 px-4 bg-[#FEA500] btn-outline font-normal rounded-2xl">Continue</button>
      {/* <button className="btn btn-sm btn-outline font-bold text-[#141E15] rounded-2xl">Continue</button> */}
    </div>
  </div>
</div>

    </>
  )
}

export default Aboutus

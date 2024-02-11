import Vector1 from '../assets/v1.png'
import Vector2 from '../assets/v2.png'
import Vector3 from '../assets/v3.png'
import React from 'react';

function Services() {
 
  return (
    <> 
      <div id='Services' className="flex items-center justify-center py-20 bg-[#465C47]">
      <div className="text-center">
        <h1 className="text-6xl mb-4 text-white max-md:text-5xl font-Messiri">See Our Services</h1>
        <p className=" mb-8 text-white mx-5">We Make Finding Rentals Easy, Effortless Search, Endless Choice.</p>
        <div className="flex justify-center text-white max-md:flex-col mx-10">


            <div className="p-8 mx-4 rounded-xl bg-[#141E15] mb-2 shadow-md">
                 <img src={Vector3} width={120}  className=" text-4xl mb-4 block mx-auto"/>
                <h2 className="text-2xl font-bold mb-2">Responsive</h2>
                <p className=" ">Our commitment to being responsive means that your concerns and efficient.</p>
            </div>

            <div className="p-8 mx-4 rounded-xl bg-[#141E15] mb-2 shadow-md">
                <img src={Vector2} width={120} className=" text-4xl mb-4 block mx-auto"/>
                <h2 className="text-2xl  font-bold mb-2">Green</h2>
                <p className=" ">Experience the convenience of our responsive platform, ensuring swift communication.</p>
            </div>

            <div className="p-8 mx-4 rounded-xl bg-[#141E15] mb-2 shadow-md">
                <img src={Vector1} width={120}  className=" text-4xl mb-4 block mx-auto"/>
                <h2 className="text-2xl  font-bold mb-2">Security</h2>
                <p className="">Ensuring swift communication and quick solutions for all your rental needs.</p>
            </div>

        </div>
    </div>
      </div>
    </>
  )
}

export default Services

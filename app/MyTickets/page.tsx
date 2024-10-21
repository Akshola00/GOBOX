import Nav from '@/components/Nav'
import React from 'react'
import Explore from "../assets/explore.svg";
const page = () => {
  return (
    <div>
        <Nav />

    <div className="flex bg-[#765BFF0A] h-[200px] flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${Explore.src})`, // Use Explore.src to get the path to the SVG
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
    >
      MY TICKETS
      </div>
      <div className='w-[176px] h-[48px] rounded-[12px]'>

      </div>
    </div>
  )
}

export default page
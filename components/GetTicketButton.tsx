import React from 'react'
import { Button } from './ui/button'
import { Lato } from 'next/font/google';
// background: #765BFF;

const lato = Lato({ weight: ["400"], subsets: ["latin"] });
const GetTicketButton = () => {
  return (
    <div className='w-full flex items-center justify-center'>
    <Button className={` ${lato.className} text-center items-center bg-[#765BFF] h-[50px] w-[90%] rounded-[73px]  `} >
        Get Ticket
    </Button>
    </div>
  )
}

export default GetTicketButton
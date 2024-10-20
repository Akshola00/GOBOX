import EventcardHorizontal from '@/components/EventcardHorizontal'
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />
        <b className='text-center flex justify-center items-center'>ALL EVENTS</b>
        <EventcardHorizontal />
    </div>
  )
}

export default page
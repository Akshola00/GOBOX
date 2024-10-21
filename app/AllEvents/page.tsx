import EventcardHorizontal from '@/components/EventcardHorizontal'
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />
        <b className='text-center flex justify-center items-center text-bold'>ALL EVENTS</b>
        <div className='p-4 flex flex-col gap-4'>

        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        </div>
    </div>
  )
}

export default page
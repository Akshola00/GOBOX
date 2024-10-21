import React from 'react'
import EventcardHorizontal from './EventcardHorizontal'

const PopularEvents = () => {
  return (
    <div className='grid gap-6 p-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        <p className=''>Popular Events</p>
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
        <EventcardHorizontal />
    </div>
  )
}

export default PopularEvents
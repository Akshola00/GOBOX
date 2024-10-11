import React from 'react'
import EventcardHorizontal from './EventcardHorizontal'

const PopularEvents = () => {
  return (
    <div className='flex flex-col m-4 gap-2'>
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
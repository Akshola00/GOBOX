import React from 'react'
import MyCarouselEvents from './CarouselEvents'

const MyPastEvents = () => {
  return (
    <div className='flex flex-col m-4 gap-4'>
        <p>Past Events</p>
        <MyCarouselEvents />
    </div>
  )
}

export default MyPastEvents
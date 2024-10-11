import EploreEvent from '@/components/EploreEvent'
import EventDetails from '@/components/EventDetails'
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />
        <EploreEvent />
        <EventDetails />
    </div>
  )
}

export default page
import React from 'react'
import EploreEvent from '@/components/EploreEvent'
import EventDetails from '@/components/EventDetails'
import MyPastEvents from '@/components/MyPastEvents'
import Nav from '@/components/Nav'
import EventAbout from '@/components/EventAbout'
import EventDesc from '@/components/EventDesc'
import RegisterEvent from '@/components/RegisterEvent'
import RegisterDetails from '@/components/RegisterDetails'
const page = () => {
  return (
    <div>
        <Nav />
        <EploreEvent />

       <RegisterDetails />
        <MyPastEvents />
    </div>
  )
}

export default page
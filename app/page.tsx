import React from 'react'
import ExploreBtn from '@/components/ExploreBtn'
import EventCard from '@/components/EventCard'
import { events } from '@/lib/contants'

// const events = [
//   {image : '/images/event1.png', title: 'Hackathon 2024'},
//   {image : '/images/event2.png', title: 'Dev Conference'},
//   {image : '/images/event3.png', title: 'Tech Meetup'},
// ]

const page = () => {
  return (
    <section>
      <h1 className='text-center'>The Hub for Every Dev <br /> Event You Can't Miss</h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in One Place</p>
   
        <ExploreBtn />
        <div className="mt-20 space-y-7">
                <h3>Featured Events</h3>

        <ul className="events">
        {events.map((event) => (
          <li key={event.title} className="list-none">
            <EventCard {...event} />
          </li>
        ))}
        </ul>
      </div>
    </section>
  )
}

export default page

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Codesandbox } from 'lucide-react'

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href='/' className='logo'>
            <Codesandbox className="w-7 h-7 text-primary" />
            <p>DEV CULTURE</p>
        </Link>

        <ul>
            <Link href="/">Home</Link>
            <Link href="#events" className='scroll-smooth'>Events</Link>
            <Link href="/events/create">Create Event</Link>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

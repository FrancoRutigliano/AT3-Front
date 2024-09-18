import React from 'react'
import at3 from '../assets/at3.jpeg'
// import staking2 from '../assets/staking2.jpeg'
import { Link } from 'react-router-dom'
export const Staking = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            src={at3}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
  
        <div className="lg:py-24 lg:pl-12">
          <h2 className="text-3xl font-medium sm:text-7xl py-2 bg-custom-gradient bg-clip-text text-transparent">Staking</h2>
  
          <p className="mt-4 text-white py-2">
          Do you want to know what it is? How does it work? <br />
          Click the link below!
          </p>
  
          <Link
            to="/staking"
            target='_blanck'
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

import React from 'react'
import at3 from '../assets/at3.jpeg'
import { Link } from 'react-router-dom'
export const Staking = () => {
  return (
    <>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-dark-light">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Staking
            </h2>

            <p className="hidden text-white md:mt-4 md:block ">
              Do you want to know what it is?
              How does it work? <br />
              Click the link below to learn more!
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/staking"
                target='_blanck'
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
               Learn more
              </Link>
            </div>
          </div>
        </div>

        <img
          alt=""
          src={at3}
          className="h-32 w-full object-cover sm:h-2/3"
        />
      </section>

    </>
  )
}

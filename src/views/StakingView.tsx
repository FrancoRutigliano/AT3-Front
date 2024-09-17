import React from 'react'
import staking2 from '../assets/staking2.jpeg'

export const StakingView = () => {
  return (
    <section>
    {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section className="overflow-hidden bg-dark-light sm:grid sm:grid-cols-2 py-10">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="bg-custom-gradient bg-clip-text text-transparent  text-2xl font-bold md:text-6xl py-2">
        What is Staking?
      </h2>

      <p className="hidden text-white md:mt-4 md:block">
      It consists of depositing your Atómico3 in a smart contract (0xAAF3AC68Bf80d995d7793a401653713A05a67B08), keeping them there for the term you choose, benefiting from the interest according to the chosen term. They will be returned to your wallet once the term has expired (unless you choose to renew it for a new term).
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Staking
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={staking2}
    className="rounded-lg w-2/3 object-cover sm:h-96 my-auto "
  />
</section>
    </section>
  )
}

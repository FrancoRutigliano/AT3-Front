import React from 'react'
import atomico from '../assets/Atomico.png'
export const SpringPopUp = () => {
  return (
    <>
    <div className={ "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000 block"} >
    <div className="relative ">
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3">
  <img
    alt=""
    src={atomico}
    className="h-32 w-full object-cover md:h-full bg-purple"
  />

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 bg-dark-light">
    <p className="text-sm font-semibold uppercase tracking-widest">Run with the pack</p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Sping Week </span>

      <span className="mt-2 block text-sm">On your next order over $50</span>
    </h2>

    <a
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      href="#"
    >
      Get Discount
    </a>

    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
      Offer valid until 24th March, 2021 *
    </p>
  </div>
</section>
</div>
</div>
    </>
  )
}

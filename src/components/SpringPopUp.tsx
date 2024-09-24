import React from 'react'
import atomico from '../assets/Atomico.png'
export const SpringPopUp = ({handleClosePopUp}: any) => {
  return (
    <>
    <div className= "fixed inset-0 flex items-center justify-center  bg-opacity-50 z-10000 block" >
    <div className="relative ">
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 mb-20 lg:mb-0 mx-10 lg:mt-20 bg-red-">
  <img
    alt=""
    src={atomico}
    className="h-32 w-full object-cover md:h-full bg-custom-gradient"
  />

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 bg-dark-light">
    <p className="text-sm font-semibold uppercase tracking-widest"> </p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl"> Spring Week </span>

      <span className="mt-2 block text-sm">¡Obtén un 5% adicional!</span>
    </h2>
    <p className='mt-10'>Compra AT3 (nuevos) entre las 00:00hs del lunes 23 de setiembre de 2024 y hasta las 23:59 hs del día 30 de septiembre de 2024. Desde Atómico le vamos a regalar un 5% adicional.</p>
    <p></p>
    <button
      className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
      // href="#"
    onClick={handleClosePopUp}>
      Aceptar
    </button>
    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
      {/* Offer valid until 24th March, 2021 * */}
    </p>

  </div>
</section>
</div>
</div>
    </>
  )
}

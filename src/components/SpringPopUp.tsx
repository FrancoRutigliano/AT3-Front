import React from 'react'
import atomico from '../assets/Atomico.png'
import { useTranslation } from 'react-i18next'
export const SpringPopUp = ({handleClosePopUp}: any) => {

  const [t] = useTranslation("global")

  return (
    <>
    <div className= "fixed inset-0 flex items-center justify-center  bg-opacity-50 z-10000 block" >
    <div className="relative ">
    <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 mb-20 lg:mb-0 mx-10 lg:mt-20 bg-red-">
  <img
    alt=""
    src={atomico}
    className="h-32 w-full object-cover md:h-full bg-celeste"
  />

  <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8 bg-dark-light">
    <p className="text-sm font-semibold uppercase tracking-widest"> </p>

    <h2 className="mt-6 font-black uppercase">
      <span className="text-4xl font-black sm:text-5xl lg:text-6xl "> Spring Week </span>

      <span className="mt-2 block text-sm">{t("popup.obten un 5 adicional")}</span>
    </h2>
    <p className='mt-10'>{t("popup.p1")}</p>
    <p>{t("popup.p2")}</p>
    {/* <p></p> */}
    <button
      className="mt-8 inline-block w-full bg-celeste hover:bg-blue-800 rounded-lg py-4 text-sm font-bold uppercase tracking-widest text-white"
      // href="#"
    onClick={handleClosePopUp}>
         <p>{t("popup.aceptar")}</p>

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

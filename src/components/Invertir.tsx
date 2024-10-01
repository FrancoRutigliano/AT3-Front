// import React from 'react'
import { useTranslation } from 'react-i18next'
import at3 from '../assets/at3.jpeg'
// import staking2 from '../assets/staking2.jpeg'
import { Link } from 'react-router-dom'
export const Invertir = () => {
  const [t] = useTranslation("global")

  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt=""
            src={at3}
            className="absolute inset-0 h-full w-full mx-auto max-w-[500px]  object-contain "
          />
        </div>
  
        <div className="lg:py-24 lg:pl-12 text-center lg:text-left">
          <h2 className="text-3xl font-bold sm:text-5xl lg:text-7xl py-2 bg-custom-gradient bg-clip-text text-transparent">{t("invertir.como invertir")}</h2>
  
          <p className="mt-2 lg:mt-4 text-white ">{t("invertir.como invertir p1")}</p>
          <p className="mt-2 lg:mt-4 text-white ">{t("invertir.como invertir p2")}</p>


          {/* <p className=' text-white '>{t("staking.como funciona")}</p> */}
          {/* <p className=' text-white '>{t("staking.clickea el enlace")}</p> */}
  
          <Link
            to="/comoInvertir"
            target='_blanck'
            className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Ver tutoriales
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

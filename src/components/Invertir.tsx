// import React from 'react'
import { useTranslation } from 'react-i18next'
// import at3 from '../assets/at3.jpeg'
import at3 from '../assets/comoinvertirnuevo.jpeg'

// import staking2 from '../assets/staking2.jpeg'
import { Link } from 'react-router-dom'
export const Invertir = () => {
  const [t] = useTranslation("global")

  return (
    <section className='bg-white '>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="criptomoneda"
              src={at3}
              className="absolute inset-0 h-full w-full mx-auto max-w-[425px]  object-contain "
            />
          </div>

          <div className="lg:py-24 text-center  lg:text-left p-5 md:p-0">
            <h2 className="text-3xl font-bold sm:text-5xl  lg:text-6xl py-2 text-celeste">
              {t("invertir.inverti y ahorra")}
            </h2>

            <p className="mt-2 lg:mt-4 text-black text-xs lg:text-lg sm:text-center lg:text-left">
              <span className=''>
              {t("invertir.p1")}
                
                  <br /> 
                  {t("invertir.p2")}
                  <br /> <br />
                </span>
              <b className='lg:text-lg'>

              1. {t("invertir.modalidad 1")}
              <br />
              2. {t("invertir.modalidad 2")} <br />
              3. {t("invertir.modalidad 3")}
              </b>

              
            </p>


            {/* <p className=' text-black '>{t("staking.como funciona")}</p> */}
            {/* <p className=' text-black '>{t("staking.clickea el enlace")}</p> */}
      <div className='flex justify-center lg:justify-start w-full '>

            <Link
              to="/comoInvertir#tutoriales"
              target='_blanck'
              className="max-[640px]:w-1/3 w-full max-w-[225px] py-2 px-2 text-xs flex items-center justify-center  mt-8 inline-block rounded bg-celeste hover:bg-sky-500 sm:px-12 sm:py-3 md:text-sm font-medium text-white transition "
              >
              {t("invertir.ver tutoriales")}
            </Link>
            <Link
              to="/comoInvertir"
              target='_blanck'
              className="max-[640px]:w-1/3 w-full max-w-[225px] py-2 px-2 ml-4 text-xs flex items-center justify-center mt-8 inline-block rounded bg-celeste hover:bg-sky-500 sm:px-12 sm:py-3 md:text-sm  font-medium text-white transition "
              >
              {t("invertir.invertir")}
            </Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

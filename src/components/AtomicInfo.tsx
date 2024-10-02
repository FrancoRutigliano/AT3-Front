import { useTranslation } from 'react-i18next'
import energy from '../assets/energy.png'
import investors from '../assets/Investors.png'
import platform from '../assets/platform.png'
export const AtomicInfo = () => {

  const [t ] = useTranslation("global")

  return (

    
    <>
      <section className="relative  text-white mt-20  lg:pt-20 ">
      {/* <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-blue-500 to-transparent"></div> */}
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <div className="mx-auto w-full text-center  ">
            <h2 className=" text-4xl lg:text-7xl font-bold sm:text-5xl bg-custom-gradient bg-clip-text text-transparent ">{t("atomicInfo.que es atomico")}</h2>

            <p className="mt-10 text-gray-300 w-full mx-auto lg:text-lg">
              {t("atomicInfo.descripcion atomico p1")}
            </p>
              <p className='text-gray-300 w-full mx-auto lg:text-lg'>
              {t("atomicInfo.descripcion atomico p2")}

              </p>
           

          </div>

          <div className="mt-20  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
              href="#"
            >
              <img src={energy} alt="" className='w-12' />

              <h2 className="mt-4 text-xl font-bold text-white">{t("atomicInfo.criptoactivo responsable")}</h2>

              <p className="mt-1 text-sm text-gray-300">
               {t("atomicInfo.criptoactivo responsable descripcion")}
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
              href="#"
            >
              <img src={investors} alt="investors" className='w-12' />

              <h2 className="mt-4 text-xl font-bold text-white">{t("atomicInfo.mercado objetivo")}</h2>

              <p className="mt-1 text-sm text-gray-300">
              {t("atomicInfo.mercado objetivo descripcion")}
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
              href="#"
            >
              <img src={platform} alt="platforms" className='w-12' />

              <h2 className="mt-4 text-xl font-bold text-white">{t("atomicInfo.plataformas utilizadas")}</h2>

              <p className="mt-1 text-sm text-gray-300">
              {t("atomicInfo.plataformas utilizadas descripcion")}
              </p>
            </a>
          </div>

          
        </div>
      </section>

    </>


  )
}

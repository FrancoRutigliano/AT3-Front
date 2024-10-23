import { useTranslation } from 'react-i18next'
import energy from '../assets/energy.png'
import investors from '../assets/Investors.png'
import platform from '../assets/platform.png'
import at3 from '../assets/pruebas/p1.jpeg'

export const AtomicInfo = () => {

  const [t] = useTranslation("global")

  return (
    <>
      <section className="relative text-white mt-20">
        <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 overflow-hidden bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.1)), url(${at3})`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
          <div className="mx-auto w-full text-center max-w-screen-lg">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-custom-gradient bg-clip-text text-transparent">
              {t("atomicInfo.que es atomico")}
            </h2>

            <p className="mt-10 text-gray-300 w-full mx-auto text-sm lg:text-xl text-justify px-4  ">
              {t("atomicInfo.p1")}
          <br />
          {t("atomicInfo.p2")}

              <br />
          {t("atomicInfo.p3")}
             
              <br /><br />
            </p>
              <p className='px-4   leading-2 break-words text-sm  lg:text-xl text-left '>
          {t("atomicInfo.p4")}
                <span className=' text-sm md:text-2xl text-celeste font-bold'>0XAFF655C15C943121DEA79B67C47AC9BD2253FD65.</span> <br />
          {t("atomicInfo.p5")}
                 <span className='text-sm md:text-2xl text-celeste font-bold'>0X22A79A08DDB74A9F1A4EBE5DA75300AD9F1AED76</span>
              </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
          <a
            className="bg-dark-light block rounded-xl border border-black p-6 sm:p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
            href="#"
          >
            <img src={energy} alt="Energy" className='w-12' />
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-white">{t("atomicInfo.criptoactivo responsable")}</h2>
            <p className="mt-1 text-sm text-gray-300">
              {t("atomicInfo.criptoactivo responsable descripcion")}
            </p>
          </a>

          <a
            className="bg-dark-light block rounded-xl border border-black p-6 sm:p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
            href="#"
          >
            <img src={investors} alt="Investors" className='w-12' />
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-white">{t("atomicInfo.mercado objetivo")}</h2>
            <p className="mt-1 text-sm text-gray-300">
              {t("atomicInfo.mercado objetivo descripcion")}
            </p>
          </a>

          <a
            className="bg-dark-light block rounded-xl border border-black p-6 sm:p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
            href="#"
          >
            <img src={platform} alt="Platform" className='w-12' />
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-white">{t("atomicInfo.plataformas utilizadas")}</h2>
            <p className="mt-1 text-sm text-gray-300">
              {t("atomicInfo.plataformas utilizadas descripcion")}
            </p>
          </a>
        </div>
      </section>
    </>
  )
}

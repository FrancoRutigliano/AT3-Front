import { useTranslation } from 'react-i18next'
import energy from '../assets/energy.png'
import investors from '../assets/Investors.png'
import platform from '../assets/platform.png'
// import at3 from '../assets/news/at3-image.jpeg'
import at3 from '../assets/pruebas/p1.jpeg'

export const AtomicInfo = () => {

  const [t] = useTranslation("global")

  return (

    <>
      <section className="relative  text-white mt-20   ">
        {/* <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-blue-500 to-transparent"></div> */}
        <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 overflow-hidden  h-1/3 md:h-1/2 bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.1)), url(${at3})`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}>
          <div className="mx-auto w-full text-center  ">
            <h2 className=" text-4xl lg:text-7xl font-bold sm:text-5xl bg-custom-gradient bg-clip-text text-transparent ">{t("atomicInfo.que es atomico")}</h2>

            <p className="mt-10 text-gray-300 w-full mx-auto lg:text-xl  text-justify px-32">
              {/* {t("atomicInfo.descripcion atomico p1")} */}
              Es un token que representa la tokenización de los activos mineros, atados a un subyacente el Litio (respaldados por las reservas de litio certificadas bajo normas NI 43-101), que tiene cada Proyecto. <br /> 
             Este proceso de digitalizar las reservas de litio, permite su comercialización en plataformas blockchain. Democratizado el acceso a la inversión en recursos naturales, ofreciendo transparencia, seguridad y liquidez. <br />
              Con su enfoque innovador, hemos facilitado la inversión sostenible y el desarrollo económico en regiones ricas en litio, posicionándolo como un activo digital de alto valor en el mercado global.
          <br /> <br /> <br />
          <span className='leading-2'>

              Nuestra billetera oficial es la <span className='text-2xl text-celeste font-bold '>0XAFF655C15C943121DEA79B67C47AC9BD2253FD65. </span>  <br /> 
              Nuestro contrato POLYGON es <span className='text-2xl text-celeste font-bold'>0X22A79A08DDB74A9F1A4EBE5DA75300AD9F1AED76 </span>  
          </span>
            </p>
            {/* <p className='text-gray-300 w-full mx-auto lg:text-lg text-justify px-32'>
              {t("atomicInfo.descripcion atomico p2")}

              </p> */}


          </div>

          {/* <div className="mt-20  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
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
          </div> */}


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
      </section>

    </>


  )
}

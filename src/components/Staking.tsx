import { useEffect, useRef } from 'react';
import staking2 from '../assets/staking2.jpeg'
// import staking2 from '../assets/stakingEN.jpeg'

// import stakingES from '../assets/staking.png'
import stakingEN from '../assets/stakingEN.jpeg'
import stakingES from '../assets/stakingES.png'

// import stakginES from '../assets/'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom';



export const Staking = () => {
  const { t, i18n } = useTranslation("global")

  const location = useLocation();
  const stakingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#staking' && stakingRef.current) {
      // Obtener la posición del elemento
      const elementPosition = stakingRef.current.getBoundingClientRect().top + window.scrollY;

      // Ajustar el desplazamiento según el tamaño de la pantalla
      const offset = window.innerWidth < 768 ? 40 : 60; // Menos desplazamiento en pantallas pequeñas (<768px)

      window.scrollTo({
        top: elementPosition - offset, // Ajusta la posición sumando o restando píxeles según la pantalla
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }, [location]);
  return (
    <>
      <section className='mt-20 lg:mt-0' ref={stakingRef} id='tutoriales'>
       
        <section className=" lg:mt-20 flex  overflow-hidden  sm:grid sm:grid-cols-4 py-10 ">
          <div className='flex items-center'>

            <img
              alt="staking"
              src={i18n.language === 'es' ? stakingES : stakingEN}
              className='hidden md:block max-w-[200px] lg:max-w-[400px]  w-2/3 mx-auto object-contain lg:object-contain rounded-md'
            />
          </div>
          <div className="mx-auto sm:col-span-2   md:p-0 md:w-full px-10 md:px-5  text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="mb-5  w-full bg-custom-gradient bg-clip-text text-transparent text-xl font-bold lg:text-6xl py-2 ">
              {t("stakingView.¿Qué es el Staking?")}
            </h2>

            <p className=" text-xs text-white md:mt-4 md:block text-justify md:text-center  md:px-0 lg:text-base break-words">
              {/* {t("stakingView.¿Qué es el Staking? Descripcion")} */}
              {t("stakingView.staking p1")}
               <br />
              {t("stakingView.staking p1.1")}
               <br />
               {t("stakingView.staking p1.2")} <br /> <br />
               {t("stakingView.staking p1.3")}
            </p>
            {/* <p className=" text-sm text-white  md:block  lg:text-lg break-words" >{t("stakingView.¿Qué es el Staking? Descripcion 2")}</p> */}

            <div className="mt-4 md:mt-8 flex justify-between md:justify-center  lg:justify-start ">
              <Link to={'/ComoInvertir#tutoriales'} className='w-2/3 max-w-[150px]  lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient   py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-base text-center hover:cursor-pointer'  >
               {t("invertir.ver tutoriales")}
              </Link>
              <a className='ml-5 w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient hover:bg-custom-gradient2    py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-base text-center hover:cursor-pointer'
                href='https://dapp-at-3.vercel.app/' target='_blank'>
                Staking
              </a>
            </div>
          </div>
          <div className='flex items-center'>

            <img
              alt="staking"
              // src={i18n.language === 'es' ? stakingES : stakingEN}
              src={staking2}

              // className="rounded-lg w-2/3 object-cover sm:h-96 my-auto "
              className='hidden md:block max-w-[200px] lg:max-w-[400px]  w-2/3 mx-auto object-contain lg:object-contain rounded-md'
            />
          </div>
        </section>


      </section>
    </>
  )
}

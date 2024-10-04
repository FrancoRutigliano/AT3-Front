
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const Tutorials = () => {

  
  const [t] = useTranslation("global")

  const location = useLocation();
  const tutorialsRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (location.hash === '#tutoriales' && tutorialsRef.current) {
      // Obtener la posición del elemento
      const elementPosition = tutorialsRef.current.getBoundingClientRect().top + window.scrollY;
      
      // Ajustar el desplazamiento según el tamaño de la pantalla
      const offset = window.innerWidth < 768 ? 30 : 200; // Menos desplazamiento en pantallas pequeñas (<768px)
  
      window.scrollTo({
        top: elementPosition - offset, // Ajusta la posición sumando o restando píxeles según la pantalla
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }, [location]);
  
  return (
    <>
    <h1 ref={tutorialsRef} id='tutoriales' className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32  my-16'>{t("tutoriales.tutoriales")}</h1>
      <section className='flex  flex flex-col lg:flex-row justify-between items-center p-5' >
      <article className=" m-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg min-[400px]:min-w-[350px] min-[400px]:min-h-[350px] lg:w-[430px] lg:max-w-[400px]">
          <div className="relative overflow-hidden pb-[56.25%] h-full w-full mx-auto">
          <iframe className="absolute top-0 left-0 w-full h-full rounded-t-lg" width="560" height="315" src="https://www.youtube.com/embed/rDTr2LqAx9s?si=YNikBIbuH0gjpNwO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div className="bg-white p-4 sm:p-6 h- min-[400px]:min-h-[70px] rounded-b-lg text-center">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

              <h3 className="mt-0.5 text-md md:text-2xl text-gray-900">¿Cómo conectar tu Wallet?</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white  ">
              
            </p>
          </div>
        </article>
        <article className=" m-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg min-[400px]:min-w-[350px] min-[400px]:min-h-[350px] lg:w-[430px] lg:max-w-[400px]">
          <div className="relative overflow-hidden pb-[56.25%] h-full w-full mx-auto">
          <iframe className="absolute top-0 left-0 w-full h-full rounded-t-lg" width="560" height="315" src="https://www.youtube.com/embed/VUX8-tJ7ITU?si=pvvn0nCidTieEUPi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div className="bg-white p-4 p-6  min-[400px]:min-h-[70px] rounded-b-lg text-center rounded-b-lg">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

              <h3 className="mt-0.5 text-md md:text-2xl text-gray-900 text-center">¿Cómo realizar el Staking?       </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white  ">
              
            </p>
          </div>
        </article>
        <article className="  m-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg min-[400px]:min-w-[350px] min-[400px]:min-h-[350px]  lg:w-[430px] lg:max-w-[400px]">
          <div className="relative overflow-hidden pb-[56.25%] h-full w-full mx-auto">
            <iframe className="absolute top-0 left-0 w-full h-full rounded-t-lg" width="560" height="315" src="https://www.youtube.com/embed/nnGQIAwvpBs?si=RFUnBQZ1RBBmT1N6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div className="bg-white p-4 sm:p-6  h- min-[400px]:min-h-[70px] rounded-b-lg text-center">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

            <h3 className="mt-0.5 text-md md:text-2xl text-gray-900 text-center">¿Cómo hacer Peer to Peer?</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            </p>
          </div>
        </article>
       
      </section>
    </>
  )
}

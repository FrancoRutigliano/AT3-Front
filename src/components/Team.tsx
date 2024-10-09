import pablo from '../assets/team/Pablo.jpg'
import ezequiel from '../assets/team/Ezequiel.jpg'
import roma from '../assets/team/roma.jpg'
import ricardo from '../assets/team/ricardo.jpg'
import franco from '../assets/team/franco.jpg'
import pedro from '../assets/team/pedro.jpg'
import juan from '../assets/team/juan.jpg'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const  Team = () => {

  const [t] = useTranslation("global")
  const equipoRef = useRef<HTMLDivElement>(null); // Referencia al componente al que quieres desplazarte
  const location = useLocation();

  useEffect(() => {
    // Desplazarse si el hash en la URL coincide con "#equipo"
    if (location.hash === '#equipo' && equipoRef.current) {
      // Obtener la posición del elemento
      const elementPosition = equipoRef.current.getBoundingClientRect().top + window.scrollY;
      
      // Ajustar el scroll para que se desplace 100px más arriba
      window.scrollTo({
        top: elementPosition - 100, // Ajusta la posición sumando o restando píxeles
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }, [location]);

  
  return (
    <article className="p-5 mt-16 lg:mt-28" ref={equipoRef} id="equipo">
      
      <div className="text-center text-2xl">

        <h2 className='text-3xl lg:text-6xl font-bold sm:text-4xl lg:mt-10 mb-10 lg:mb-16 text-celeste'>{t("team.nuestro equipo")}</h2>
        <p className='text-sm lg:text-xl  lg:mb-16 lg:mx-[10%] '>{t("team.nuestro equipo descripcion")}</p>
      </div>

      <section className='flex flex-wrap justify-center p-5 '>
        <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64 ">
          <img
            alt=""
            src={pablo}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6 h-full">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">Pablo Rutigiano</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
           {t("team.ceo y fundador")}
            </p>
          </div>
        </div>
        <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt=""
            src={ezequiel}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6 h-full">
            {/* <time dateTime="2022-10-10" className="block text-xs text-celeste" > 10th Oct 2022 </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">Ezequiel Canclini</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
            {t("team.presidente")}


            </p>
          </div>
        </div>
        <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6  overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="ricardo de seta"
            src={ricardo}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6 h-full">
            {/* <time dateTime="2022-10-10" className="block text-xs text-celeste" > 10th Oct 2022 </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">Ricardo de Seta</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
            {t("team.director de finanzas")}

            </p>
          </div>
        </div>
        <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt=""
            src={roma}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6 h-full">
            {/* <time dateTime="2022-10-10" className="block text-xs text-celeste" > 10th Oct 2022 </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">Pablo Daniel Roma</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
            {t("team.Director de Prensa")}

            </p>
          </div>
        </div>
        <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="pablo"
            src={franco}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6 h-full">
            {/* <time dateTime="2022-10-10" className="block text-xs text-celeste" > 10th Oct 2022 </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">Franco Rutigliano</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
              Head of data
            </p>
          </div>
        </div>
        <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="pedro"
            src={pedro}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6 h-full">
            {/* <time dateTime="2022-10-10" className="block text-xs text-celeste" > 10th Oct 2022 </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">Pedro Tapia</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
            {t("team.Desarrollador Web3")}

            </p>
          </div>
        </div>
        <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="juan"
            src={juan}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">Juan Panizzi</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
            {t("team.Desarrollador Web2")}

            </p>
          </div>
        </div>
      </section>
    </article>


  )
}

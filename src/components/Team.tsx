import pablo from '../assets/team/Pablo.jpg'
import ezequiel from '../assets/team/Ezequiel.jpg'
import roma from '../assets/team/roma.jpg'
import ricardo from '../assets/team/ricardo.jpg'
import franco from '../assets/team/franco.jpg'
import pedro from '../assets/team/pedro.jpg'
import juan from '../assets/team/juan.jpg'

export const Team = () => {



  return (
    <article className="p-5">
      
      <div className="text-center text-2xl">

        <h1>NUESTRO EQUIPO</h1>
        <p>Somos un equipo de profesionales, jóvenes y disruptivos enfocados en desarrollar soluciones
        financieras que se encuentren al alcance de todos de forma fácil, simple y ágil. </p>
      </div>

      <section className='flex flex-wrap justify-center p-5 '>
        <div className="mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64 ">
          <img
            alt=""
            src={pablo}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Pablo Rutigiano</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-purple-black">
            Ceo & Fundador
            </p>
          </div>
        </div>
        <div className="mx-5 my-6 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt=""
            src={ezequiel}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-purple-black"> 10th Oct 2022 </time> */}

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Ezequiel Canclini</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-purple-black">
             Presidente
            </p>
          </div>
        </div>
        <div className="mx-5 my-6  overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="ricardo de seta"
            src={ricardo}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-purple-black"> 10th Oct 2022 </time> */}

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Ricardo de Seta</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-purple-black">
            Director de finanzas
            </p>
          </div>
        </div>
        <div className="mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt=""
            src={roma}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-purple-black"> 10th Oct 2022 </time> */}

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Pablo Daniel Roma</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-purple-black">
            Director de Prensa
            </p>
          </div>
        </div>
        <div className="mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="pablo"
            src={franco}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-purple-black"> 10th Oct 2022 </time> */}

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Franco Rutigliano</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-purple-black">
              Head of data
            </p>
          </div>
        </div>
        <div className="mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="pedro"
            src={pedro}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-purple-black"> 10th Oct 2022 </time> */}

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Pedro Tapia</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-purple-black">
            Desarrollador Web3
            </p>
          </div>
        </div>
        <div className="mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64">
          <img
            alt="juan"
            src={juan}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time> */}

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">Juan Panizzi</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-purple-black">
            Desarrollador Web2
            </p>
          </div>
        </div>
      </section>
    </article>


  )
}

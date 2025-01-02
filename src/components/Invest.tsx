import padlock from '../assets/padlock.png'
import technology from '../assets/technology.png'
import support from '../assets/support.png'
import { useTranslation } from 'react-i18next'

export const Invest = () => {
  const [t] = useTranslation("global")

  return (
    <>
    <section className=" bg-white ">
  <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto ">
    <div className="w-full">
      <h2 className="text-3xl font-bold sm:text-7xl text-celeste w-full text-center ">{t("InvestSection.¿Por qué invertir en Atómico3?")}</h2>

     
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
      <div className="flex flex-col items-start justify-start gap-4  rounded-xl border border-celeste p-6 sm:p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default">
        <span className="shrink-0 rounded-lg pt-1 text-center flex justify-center">
         <img src={padlock} alt="padlock" className='w-12 text-center'  />
        </span>

        <div >
          <h2 className="text-lg text-celeste font-bold">{t("InvestSection.Seguridad")}
          </h2>

          <p className="mt-1 text-sm text-black">
          {t("InvestSection.Seguridad descripcion")}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-4  rounded-xl border border-celeste p-6 sm:p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default">
        <span className="shrink-0 rounded-lg  pt-1">
         <img src={technology} alt="technology" className='w-12' />
        </span>

        <div>
          <h2 className="text-lg text-celeste font-bold">{t("InvestSection.tecnologia y beneficios")}</h2>

          <p className="mt-1 text-sm text-black">
          {t("InvestSection.tecnologia y beneficios descripcion")}            
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-4  rounded-xl border border-celeste p-6 sm:p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default">
        <span className="shrink-0 rounded-lg  pt-1">
          <img src={support} alt="support" className='w-12' />
        </span>


        <div>
          <h2 className="text-lg text-celeste font-bold"> {t("InvestSection.soporte")}  </h2>

          <p className="mt-1 text-sm text-black">
          {t("InvestSection.soporte descripcion")}
          </p>
        </div>
      </div>

      {/* <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
          </p>
        </div>
      </div> */}

      {/* <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
          </p>
        </div>
      </div> */}

      {/* <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?
          </p>
        </div>
      </div> */}
    </div>
  </div>
</section>
    </>
  )
}


import { useTranslation } from 'react-i18next'
export const Tutorials = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <section className='flex  flex flex-col lg:flex-row justify-between items-center p-5'>
      <article className=" m-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg lg:w-[430px] lg:max-w-[470px]">
          <div className="relative overflow-hidden pb-[56.25%] h-0  w-full mx-auto">
          <iframe className="absolute top-0 left-0 w-full h-full rounded-t-lg" width="560" height="315" src="https://www.youtube.com/embed/rDTr2LqAx9s?si=YNikBIbuH0gjpNwO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div className="bg-white p-4 sm:p-6 min-h-[150px]">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

              <h3 className="mt-0.5 text-2xl text-gray-900">¿Cómo conectar tu Wallet?</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white  ">
              
            </p>
          </div>
        </article>
        <article className=" m-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg lg:w-[430px] lg:max-w-[470px]">
          <div className="relative overflow-hidden pb-[56.25%] h-0  w-full mx-auto">
          <iframe className="absolute top-0 left-0 w-full h-full rounded-t-lg" width="560" height="315" src="https://www.youtube.com/embed/VUX8-tJ7ITU?si=pvvn0nCidTieEUPi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div className="bg-white p-4 sm:p-6 min-h-[150px]">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

              <h3 className="mt-0.5 text-2xl text-gray-900">¿Cómo hacer Staking?</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500  ">
              
            </p>
          </div>
        </article>
        <article className="  m-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg lg:w-[430px] lg:max-w-[470px]">
          <div className="relative overflow-hidden pb-[56.25%] h-0  w-full mx-auto">
            <iframe className="absolute top-0 left-0 w-full h-full rounded-t-lg" width="560" height="315" src="https://www.youtube.com/embed/nnGQIAwvpBs?si=RFUnBQZ1RBBmT1N6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>

          <div className="bg-white p-4 sm:p-6  min-h-[150px]">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

            <h3 className="mt-0.5 text-2xl text-gray-900">¿Cómo hacer Peer to Peer?</h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            </p>
          </div>
        </article>
       
      </section>
    </>
  )
}

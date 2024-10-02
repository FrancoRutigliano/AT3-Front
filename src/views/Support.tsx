import ws from '../assets/contact_icons/whatsapp.png'
import email from '../assets/contact_icons/correo.png'
import location from '../assets/contact_icons/location.png'
import { useTranslation } from 'react-i18next'

export const Support = () => {
  const [t] = useTranslation("global")

  return (
    <>
        <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
          <div className="mx-auto w-full text-center  ">
            <h2 className=" text-4xl lg:text-7xl font-bold sm:text-5xl bg-custom-gradient bg-clip-text text-transparent ">{t("soporte.soporte")}</h2>

           
            <p className="mt-10 text-gray-300 w-full mx-auto lg:text-lg">
            {t("soporte.soporte p1")}
            </p>
           
            {/* Atómico3 es un token que representa la tokenización de activos mineros, respaldados por reservas de litio certificadas bajo normas ni 43-101. Este proceso digitaliza las reservas de litio, permitiendo su comercialización en plataformas blockchain. <br />
                Atómico3 democratiza el acceso a la inversión en recursos naturales, ofreciendo transparencia, seguridad y liquidez. Con su enfoque innovador, Atómico3 facilita la inversión sostenible y el desarrollo económico en regiones ricas en litio, posicionándolo como un activo digital de alto valor en el mercado global. */}

          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
            >
              <img src={ws} alt="" className='w-12' />

              <h2 className="mt-4 text-xl font-bold text-white">+595 992 544500</h2>

              <p className="mt-1 text-sm text-gray-300">
                
               {t("soporte.whatssap descripcion")}
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
            >
              <img src={email} alt="investors" className='w-12' />

              <h2 className="mt-4 text-xl font-bold text-white">support@atomico3.io</h2>

              <p className="mt-1 text-sm text-gray-300">
               {t("soporte.email descripcion")}

              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
            >
              <img src={location} alt="location" className='w-12' />

              <h2 className="mt-4 text-xl font-bold text-white">
              Av. Santa Teresa y Coronel Escurra - Ycua Sati. Asunción Paraguay
                </h2>

              <p className="mt-1 text-sm text-gray-300">
              {t("soporte.nuestra direccion")}

              </p>
            </a>

            {/* <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a> */}




          </div>

          {/* <div className="mt-12 text-center">
      <a
        href="#"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div> */}
        </div>
      </section>
    </>
  )
}

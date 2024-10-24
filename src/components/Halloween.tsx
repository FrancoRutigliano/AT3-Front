import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import hallowen from '../assets/hallowen2.jpeg'
export const Halloween = () => {

  const { t } = useTranslation("global")
  const location = useLocation();
  const hallowenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#halloween' && hallowenRef.current) {
      // Obtener la posición del elemento
      const elementPosition = hallowenRef.current.getBoundingClientRect().top + window.scrollY;

      // Ajustar el desplazamiento según el tamaño de la pantalla
      const offset = window.innerWidth < 768 ? 40 : 20; // Menos desplazamiento en pantallas pequeñas (<768px)

      window.scrollTo({
        top: elementPosition - offset, // Ajusta la posición sumando o restando píxeles según la pantalla
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }, [location]);

  return (
    <>

      <section className=' ' ref={hallowenRef} id='halloween' >
        {/* <h1 className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32  pt-5' >Peer to Peer</h1> */}
        <section className=" lg:mt-0 flex flex-col-reverse overflow-hidden  sm:grid sm:grid-cols-3 pt-10">
          <div className=" sm:col-span-2 py-5  md:p-12 lg:pl-7 lg:pr-2  lg:py-24 ">
            <div className=" mx-auto px-10  md:p-0 md:w-full  text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
              <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words">
                {/* {t("como invertir.peer to peer")} */}
                Halloween Week!

              </h2>

              <p className=' md:pr-12 text-justify  text-xs ms:text-sm text-white md:mt-4 md:block lg:text-base break-words'>
               {t("halloween.p1")}
                <br /> <br />
                {t("halloween.p2")}

              </p>

              <div className="flex justify-start">
                <p className="mt-10 lg:text-2xl font-medium border-b-2 border-blue-500">
                {t("halloween.p3")}

                </p>
              </div>

            </div>

          </div>
          <div className='flex justify-center items-center px-5 md:px-0' >

            <img
              alt="Peer to peer"
              src={hallowen}
              className='rounded-lg max-w-[150px] lg:object-contain   lg:max-w-[350px]'
            />

          </div>
        </section>
        <section className="mt-14 sm:mt-0 text-white">
          <div className="max-w-screen-xl px-4 pb-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold sm:text-4xl "> 
              {t("halloween.p4")}

              </h2>

              <p className="mt-4 text-gray-200">
                  <Link to={'/'} className="text-blue-500 underline hover:text-blue-700">
                  {t("halloween.p5")}
                </Link> 
                {t("halloween.p6")}

              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-celeste text-white p-5">
                  1
                </span>

                <div>
                  <h2 className="text-lg font-bold">Completar Formulario:</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Completar el formulario que les aparecerá en la app de atómico3, con todos sus datos de contacto




                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-celeste text-white p-5">
                  2
                </span>

                <div>
                  <h2 className="text-lg font-bold">Confirmación de datos</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    Luego de presionar el botón de enviar el formulario, recibirás un correo desde
                    support@atomico3.io confirmando que todo quedo registrado debidamente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 rounded-lg bg-celeste text-white p-5">
                  2
                </span>

                <div>
                  <h2 className="text-lg font-bold">Recepción del beneficio</h2>

                  <p className="mt-1 text-sm text-gray-300">
                    El 5% de regalo de ATOMICO3, será enviado a la billetera declarada (misma que se indico al cargar la compra, como de su amigo referente), el día 04 de Noviembre de 2024.
                  </p>
                </div>
              </div>






            </div>
          </div>
        </section>
      </section>
    </>
  )
}

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import litio from '../../assets/litio/montanas-litio.webp'
import salar from '../../assets/litio/salar-litio.jpg'
export const LitioInfo = () => {

  const [t] = useTranslation("global")
  const litioRef = useRef<HTMLDivElement>(null); // Referencia al componente al que quieres desplazarte
  const location = useLocation();

  useEffect(() => {
    // Desplazarse si el hash en la URL coincide con "#equipo"
    if (location.hash === '#litio' && litioRef.current) {
      // Obtener la posición del elemento
      const elementPosition = litioRef.current.getBoundingClientRect().top + window.scrollY;

      // Ajustar el scroll para que se desplace 100px más arriba
      window.scrollTo({
        top: elementPosition - 100, // Ajusta la posición sumando o restando píxeles
        behavior: 'smooth',
      });
    }
  }, [location]);
  return (
    <>

      <section ref={litioRef} className="py-10 flex flex-col-reverse overflow-hidden bg-gray-50 lg:grid lg:grid-cols-2 lg:items-center ">
        <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="hidden lg:block text-2xl font-bold text-blue-500 md:text-4xl text-center md:text-left">
              {t("proyectosTokenizacion.que es el litio")}
            </h2>

            <p className=" text-dark-light md:mt-4 md:block text-justify">
              {t("proyectosTokenizacion.p4")}

            </p>
            <p className=" text-dark-light md:mt-4 md:block text-justify">
              {t("proyectosTokenizacion.p4.1")}

              <br />
              {t("proyectosTokenizacion.p4.2")}

            </p>
            {/* <p className="text-gray-500 text-lg text-start my-4 underline deco">Leer más</p> */}
          </div>
        </div>
        <div className="flex flex-col">

          <h2 className="lg:hidden py-5 text-2xl font-bold text-blue-500 md:text-4xl text-center lg:text-left">
            {t("proyectosTokenizacion.que es el litio")}
          </h2>
          <img
            alt="litio"
            src={litio}
            className=" w-4/5 md:px-0 rounded-xl md:h-full md:w-3/4 object-cover sm:h-[calc(100%_-_2rem)] sm:self-end  md:h-[calc(100%_-_4rem)]  
          max-[1023px]:max-w-[600px] mx-auto md:max-w-[500px]"
          />
        </div>
      </section>

      <div>

            <h2 className="   hidden lg:block text-2xl font-bold text-blue-500 bg-gray-50 md:text-4xl text-center md:text-left lg:pl-16  ">
              {t("proyectosTokenizacion.por que es tan importante el litio")}
            </h2>
      </div>
      <section ref={litioRef} className=" flex flex-col-reverse overflow-hidden bg-gray-50 lg:grid lg:grid-cols-2 lg:items-center ">

        <div className=" p-8 lg:px-16 ">

          <div className=" mx-auto max-w-2xl  text-center ltr:sm:text-left rtl:sm:text-right">

            <p className=" text-dark-light md:mt-4 md:block text-justify">
              {t("proyectosTokenizacion.p5")}

            </p>
            <p className=" text-dark-light md:mt-4 md:block text-justify">
              {t("proyectosTokenizacion.p6")}

              <br /> <br />
              {t("proyectosTokenizacion.p7")}

            </p>
            {/* <p className="text-gray-500 text-lg text-start my-4 underline deco">Leer más</p> */}
          </div>
        </div>
        <div className="flex flex-col">

          <h2 className="lg:hidden py-5 text-2xl font-bold text-blue-500 md:text-4xl text-center lg:text-left">
            {t("proyectosTokenizacion.por que es tan importante el litio")}
          </h2>
          <img
            alt="litio salar"
            src={salar}
            className=" w-4/5 md:px-0 rounded-xl  md:w-3/4 object-cover 
            sm:h-[calc(100%_-_2rem)]
            md:h-[calc(100%_-_4rem)]
            max-[1023px]:max-w-[600px] 
            
            mx-auto 
            md:max-w-[600px]
            h-full
              sm:self-end 
              lg:h-full lg:w-full
              "
          />
        </div>
      </section>



      {/* <section className="bg-gray-50 text-black px-10">
          <div className="mx-auto  px-1 py-16 sm:px-1 sm:py-10 lg:px-1   ">
            <div className="max-w-3xl ">
              <h2 className="text-2xl font-bold sm:text-4xl text-center md:text-left text-blue-500 ">
                {t("proyectosTokenizacion.por que es tan importante el litio")}

              </h2>
            </div>

            <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  ">
              <div className="relative overflow-hidden  w-4/5 h-3/5 mt-20 ml-10">
                <img
                  alt=""
                  src={salar}
                  className="absolute w-full h-full  object-cover rounded-xl  "
                />
              </div>

              <div className="lg:py-16 ">
                <article className="space-y-4 text-gray-600 mb-20 ">
                  <p className="text-justify text-dark-light" >
                    {t("proyectosTokenizacion.p5")}

                    <br /> <br />               {t("proyectosTokenizacion.p6")}

                  </p>

                  <p className="text-justify text-dark-light">
                    {t("proyectosTokenizacion.p7")}

                  </p>
                </article>
              </div>
            </div>
          </div>
        </section> */}






      {/* <section className="lg:py-32 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Estadístiscas sobre el litio</h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Conoce las cifras clave que impulsan la demanda de litio y su papel fundamental en la transición hacia un futuro sostenible.
            </p>
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">($USD/ kg.)</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">10.78E
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Crecimiento de la demanda anual de litio</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">+20
                %
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500"></dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86%</dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">Reservas de litio en Argentina, Chile y Bolivia</dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">65%</dd>
            </div>
          </dl>
        </div>
      </section> */}

    </>
  );
};


import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

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
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }, [location]);
  return (
    <>

      <section ref={litioRef} className="h-screen overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-left">
              ¿Qué es el litio?
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block text-justify">
              El litio es un elemento clave en la tecnología moderna y la transición hacia energías sostenibles, impulsando la demanda de baterías para dispositivos electrónicos y vehículos eléctricos. Conocer su potencial es esencial para entender las tendencias del mercado y las oportunidades de inversión.
            </p>
            <p className="hidden text-gray-500 md:mt-4 md:block text-justify">
              Se trata de un metal blando y de color plateado, extraído de minerales y salares, con propiedades únicas que lo convierten en un recurso insustituible en una gran variedad de aplicaciones industriales. <br />
              Con el crecimiento exponencial de la demanda de baterías para dispositivos electrónicos y vehículos eléctricos, entender el papel del litio es esencial para quienes desean mantenerse informados sobre las tendencias del mercado y las oportunidades de inversión.
            </p>
            <p className="text-gray-500 text-lg text-start my-4 underline deco">Leer más</p>
          </div>
        </div>

        <img
          alt=""
          src="https://bynder.aggreko.com/transform/ce8c8b8e-7b00-44b3-9112-af9532b721bc/minas-de-litio-argentina-bolivia-aggreko-007-jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
      <section>
        <section className="bg-gray-50 text-black">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 ">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                ¿Por qué es tan importante el litio?
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="https://litio.com.ar/wp-content/uploads/2022/02/lithium.jpg"
                  className="absolute inset-0 h-full w-full object-cover rounded-xl"
                />
              </div>

              <div className="lg:py-16">
                <article className="space-y-4 text-gray-600">
                  <p>
                    Además de su papel en el almacenamiento de energía, el litio tiene aplicaciones importantes en el almacenamiento de energías renovables. Esto es crucial para el desarrollo de tecnologías verdes, ya que permite almacenar energía producida por fuentes como la solar y la eólica, ayudando a que el suministro sea constante, incluso cuando no haya luz solar o viento.
                  </p>

                  <p>
                    La demanda global de litio ha crecido exponencialmente en los últimos años, impulsada por la transición hacia fuentes de energía limpia y el auge de la tecnología de consumo. Países como Australia, Chile y Argentina concentran grandes reservas de este mineral, lo que genera una fuerte competencia en el mercado y destaca el litio como un recurso estratégico de alto valor económico y geopolítico. En definitiva, el litio no solo es una pieza clave en el presente de la tecnología, sino un elemento fundamental para un futuro más sustentable.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

      </section>
      <section className="lg:py-32 bg-white">
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
      </section>

    </>
  );
};


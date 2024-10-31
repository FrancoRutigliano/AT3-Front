import { useState } from 'react';

export const ProyectoTokenizado2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
      <section
        className="mt-32 overflow-hidden bg-[url(https://mejorenergia-s3.cdn.net.ar/s3i233/2023/07/mejorenergia/images/09/88/98880_f54eda539779976e7bc3b20bca1032a4bd4ae608e0fa23513461cdf70c787ab6/md.webp)] bg-cover bg-center bg-no-repeat"
      >
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left ">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Salar de Olaroz
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
              doloribus iure architecto quae voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Descargar ficha técnica
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center bg-gray-200 p-4 cursor-pointer" onClick={toggleInfo}>
        <span className="text-gray-600 font-semibold">Más Información</span>
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>

      {isOpen && (
        <section className="project-info bg-gray-100 p-8">
          <div className="intro mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Introducción</h2>
            <p className="text-gray-600 mt-2">
              La tokenización del proyecto Salar del Hombre Muerto permite que inversionistas de todo el mundo accedan al potencial de uno de los mayores depósitos de litio en Sudamérica. Cada token representa una participación fraccionada en los derechos de extracción de este recurso.
            </p>
          </div>

          <div className="objectives mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Objetivos de la Tokenización</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Permitir la participación de inversionistas globales en un activo real.</li>
              <li>Facilitar liquidez en un activo históricamente ilíquido.</li>
              <li>Ofrecer transparencia y seguridad mediante tecnología blockchain.</li>
            </ul>
          </div>

          <div className="details mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Detalles del Activo Minero</h3>
            <p className="text-gray-600 mt-2">
              Ubicada en el corazón de la región montañosa de Catamarca, Argentina, la Mina Salar del Hombre Muerto alberga una reserva de litio de alta calidad. Se estima que el sitio cuenta con alrededor de 500,000 toneladas de litio, posicionando al proyecto como uno de los más prometedores de la región.
            </p>
          </div>

          <div className="tokenization-details mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Cómo Funciona la Tokenización</h3>
            <p className="text-gray-600 mt-2">
              Los tokens del proyecto serán emitidos en la blockchain de Ethereum, donde cada token representará un 0.01% de participación en los derechos de extracción del litio. Los titulares de tokens tendrán acceso a una fracción de los beneficios generados por la venta del mineral.
            </p>
          </div>

          <div className="investment-potential mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Potencial de Inversión</h3>
            <p className="text-gray-600 mt-2">
              Se estima que, con un aumento proyectado en la demanda de litio del 30% en los próximos años, el valor de los tokens podría apreciarse significativamente. Los inversionistas recibirán dividendos anuales basados en los ingresos de la extracción.
            </p>
          </div>

          <div className="environmental-impact mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Impacto Medioambiental y Sostenibilidad</h3>
            <p className="text-gray-600 mt-2">
              El proyecto Salar del Hombre Muerto sigue prácticas de minería responsable y se compromete a reducir su impacto ambiental mediante el uso de tecnologías de extracción de bajo consumo hídrico y el monitoreo constante de la calidad del suelo y agua.
            </p>
          </div>

          <div className="benefits mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Ventajas para los Inversionistas</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Diversificación del portafolio mediante un activo tangible.</li>
              <li>Inversión fraccionada con menores barreras de entrada.</li>
              <li>Transparencia y seguridad garantizadas a través de la blockchain.</li>
            </ul>
          </div>

          <div className="roadmap mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Hoja de Ruta del Proyecto</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li><strong>Q1 2024:</strong> Estudios preliminares de viabilidad y exploración.</li>
              <li><strong>Q2 2024:</strong> Obtención de permisos y licencias necesarias.</li>
              <li><strong>Q4 2024:</strong> Emisión de tokens y lanzamiento oficial del proyecto.</li>
              <li><strong>Q1 2025:</strong> Inicio de la extracción y generación de ingresos.</li>
            </ul>
          </div>

          <div className="faq mb-8">
            <h3 className="text-2xl font-semibold text-gray-700">Preguntas Frecuentes</h3>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li><strong>¿Qué obtengo al comprar un token?</strong> Cada token representa una participación del 0.01% en los derechos de extracción del litio.</li>
              <li><strong>¿Cómo se distribuyen las ganancias?</strong> Los dividendos se distribuyen anualmente según los ingresos generados.</li>
              <li><strong>¿Qué derechos de propiedad me da un token?</strong> Los tokens ofrecen derechos sobre los beneficios pero no sobre la propiedad de la mina.</li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

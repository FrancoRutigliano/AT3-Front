import { useTranslation } from 'react-i18next';
import h1 from '../assets/halloween.jpeg';
import { Link } from 'react-router-dom';

export const SpringPopUp = ({ handleClosePopUp }: any) => {
  const [t] = useTranslation("global");

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        style={{ zIndex: 100 }}>
        <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-2xl ">
          <section className="overflow-hidden rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-3">
            {/* Imagen */}
            <div className="relative">
              <img
                alt="Spring Week"
                src={h1}
                className="h-32 w-full object-cover md:h-full bg-celeste md:col-span-1"
              />
              {/* Icono de Cierre - Posición en pantallas pequeñas sobre la imagen */}
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl font-bold md:hidden"
                onClick={handleClosePopUp}
              >
                &#10005; {/* X */}
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-6 bg-dark-light relative">
              {/* Icono de Cierre - Posición en pantallas grandes dentro del contenido */}
              <button
                className="hidden md:block absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold"
                onClick={handleClosePopUp}
              >
                &#10005; {/* X */}
              </button>

              <div className="mt-12 flex flex-col">
                <p className="text-[0.9rem] text-justify">
                  Pedile a dos de tus amigos que se sumen al Proyecto, comprando ATOMICO3 (nuevos) en compras
                  PEER TO PEER (P2P), a un valor de U$S 0,85.
                  <br /> <br />
                  Desde ATOMICO3, te vamos a regalar un 5% del total de las compras de tus dos amigos de ATOMICOS (AT3 nuevos), directo a tu billetera.
                  <br /> <br />
                  Dichas compras deben de ser realizadas entre las 0.00 hs del lunes 21 de Octubre de 2024, y hasta las 23.59 hs del día 31 de Octubre de 2024.
                </p>

                <Link
                  to={'/halloween'}
                  className="px-20 mt-5 bg-celeste hover:bg-sky-500 rounded-lg py-3 text-sm font-bold uppercase tracking-widest text-white text-center"
                >
                  Saber más
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

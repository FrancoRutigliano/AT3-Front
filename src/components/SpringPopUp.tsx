import { useTranslation } from 'react-i18next';
import h1 from '../assets/halloween.jpeg';
import { Link } from 'react-router-dom';

export const SpringPopUp = ({ handleClosePopUp }: any) => {
  const [t] = useTranslation("global");

  return (
    <>
      <div className="px-10 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        style={{ zIndex: 1 }}>
        <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-2xl ">
          <section className="overflow-hidden rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-3">
            <div className="relative">
              <img
                alt="Spring Week"
                src={h1}
                className="h-32 w-full object-cover md:h-full bg-celeste md:col-span-1"
              />
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

              <div className="md:mt-12 flex flex-col">
                <div className=' md:hidden  pt-5 pb-6'>
    <h1 className=' text-2xl font-bold text-[#F4AC1E]'>Halloween Week!</h1>
    <h2 className='mt-4 underline underline-offset-4  decoration-[#F4AC1E]'>¡Ganate un 5% adicional!</h2>
                </div>
                <p className="text-[0.9rem] text-justify">
              {t("popup.p1")}
                  <br /> <br />
                  {t("popup.p2")}

                  <br /> <br />
                  {t("popup.p3")}

                </p>

                <Link
                  to={'/comoInvertir#halloween'}
                  className="px-20 mt-5 bg-[#f4780a] hover:bg-[#f4ac1e] hover:bg-sky-500 rounded-lg py-3 text-sm font-medium uppercase tracking-widest text-white border border-black text-center"
                >
                                    {t("popup.saber mas")}

                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

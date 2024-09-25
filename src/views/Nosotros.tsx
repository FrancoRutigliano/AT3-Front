import at3 from '../assets/lineas.png'
// import at3 from '../assets/Atomico.png'
import atomico3 from '../assets/atomicLogo.png'
export const Nosotros = () => {
  return (
    <>

      <section
        className="overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${at3})`,
          backgroundPosition: 'center 50%' // Ajusta el porcentaje para que la imagen se vea más abajo
        }}
      >
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right flex flex-col justify-center items-center mb-10">
            {/* <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl text-left">Atómico3</h2> */}
            <img src={atomico3} alt="atomico" className='w-1/3 max-w-[550px] ' />
            <p className="hidden w-2/3 text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed text-center">
              Somos una compañía legalmente constituida en Paraguay, dedicada al desarrollo y optimización de actividades mineras con un enfoque
              integral en la cadena de valor de la electromovilidad en Latinoamérica.

            </p>

            <div className="mt-4 sm:mt-8 flex justify-start">
              {/* <a
          href="#"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
       Conócenos
        </a> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

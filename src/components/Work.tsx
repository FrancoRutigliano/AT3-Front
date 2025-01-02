import manos from '../assets/nosotros/manos.avif'
import at3 from '../assets/Atomico.png'

export const Work = () => {
  return (
    <>
     
      <section className="bg-dark-light ">
        <div className="lg:grid lg:m lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-dark-light lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt="atomico3"
              src={manos}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">


              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Trabaja con nosotros
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                ¡Envíanos tus datos y postulate para formar parte de nuestro equipo!
              </p>
            </div>
          </section>

          <main
            className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div className="w-full lg:px-5">
              <div className="relative -mt-16 block lg:hidden">
          
              <a
            className="inline-flex size-16 items-center justify-center rounded-full  text-blue-600 sm:size-20"
            href="#"
          >
           <img src={at3} alt="atomico3" />
          </a>
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
                  Trabaja con nosotros
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  ¡Envíanos tus datos y postulate para formar parte de nuestro equipo!

                </p>
              </div>

              <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium  text-gray-200"
                  >
                    Nombre
                  </label>

                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    className="mt-1 w-full rounded-md border-gray-200  text-sm  shadow-sm dark:border-gray-700 bg-gray-300 text-black  p-2  focus:outline-none focus:ring focus:ring-celeste"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium  text-gray-200"
                  >
                    Apellido
                  </label>

                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    className="mt-1 w-full rounded-md border-gray-200  text-sm  shadow-sm dark:border-gray-700 bg-gray-300 text-black p-2  focus:outline-none focus:ring focus:ring-celeste"
                  />
                </div>

            



                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  text-gray-200"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200  text-sm  shadow-sm dark:border-gray-700 bg-gray-300 text-black p-2 
                     focus:outline-none focus:ring focus:ring-celeste"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium  text-gray-200"
                  >
                    Puesto al que aplica
                  </label>

                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="mt-1 w-full rounded-md border-gray-200  text-sm  shadow-sm dark:border-gray-700 bg-gray-300 text-black p-2 focus:outline-none focus:ring focus:ring-celeste"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6">
                  <label
                    htmlFor="linkedin"
                    className="block text-sm font-medium  text-gray-200"
                  >
                    Dirección de perfil de Linkedin
                  </label>

                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    className="mt-1 w-full rounded-md border-gray-200  text-sm  shadow-sm dark:border-gray-700 bg-gray-300 text-black p-2 focus:outline-none focus:ring focus:ring-celeste"
                  />
                </div>

                <div className='col-span-6 h-[100px]'>
                  <label className="sr-only" htmlFor="message">Mensaje</label>

                  <textarea
                    className="mt-1 w-full h-full    rounded-md border-gray-200  text-sm  shadow-sm dark:border-gray-700 bg-gray-300 text-black p-2  focus:outline-none focus:ring focus:ring-celeste"
                    placeholder="Mensaje"
                    // rows={8}
                    // cols={10}
                    id="message"
                  ></textarea>
                </div>



                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                  >
                   Enviar
                  </button>

                  
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>

    </>
  )
}

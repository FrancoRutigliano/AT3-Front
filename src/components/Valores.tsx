
import manos from '../assets/valores/manos.png'
import mision from '../assets/valores/mision.png'
import objetivo from '../assets/valores/objetivo.png'

export const Valores = () => {
  return (
    <>
      <section className=" text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto  text-center">
            <h2 className="text-3xl font-bold sm:text-6xl mt-10 lg:mb-24">Nuestros Valores</h2>

            {/* <p className="mt-4 text-gray-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
        nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
      </p> */}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-black hover:shadow-purple-black"
            >
              <img src={manos} alt="valores" />

              <h2 className="mt-4 text-xl font-bold text-white">Propósito</h2>

              <p className="mt-1 text-sm text-gray-300">
                Compromiso con el crecimiento sostenible y el desarrollo económico global. Trabajar para crear un futuro donde los recursos se gestionen de manera responsable y con visión de largo plazo, en beneficio tanto de los inversores como de las comunidades.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-black hover:shadow-purple-black"
              href="#"
            >
              <img src={mision} alt="valores" />

              <h2 className="mt-4 text-xl font-bold text-white">Visión</h2>

              <p className="mt-1 text-sm text-gray-300">
                Queremos revolucionar la manera en que se gestionan y se invierte
                en recursos naturales mediante la aplicación de tecnologías avanzadas de
                tokenización y blockchain.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-purple-black hover:shadow-purple-black"
              href="#"
            >
              <img src={objetivo} alt="" />

              <h2 className="mt-4 text-xl font-bold text-white">Misión</h2>

              <p className="mt-1 text-sm text-gray-300">
                Mejorar la eficiencia y la transparencia del mercado de
                litio, abrir nuevas oportunidades para inversores y
                contribuir al desarrollo económico global.
              </p>
            </a>




          </div>

        </div>
      </section>
    </>
  )
}

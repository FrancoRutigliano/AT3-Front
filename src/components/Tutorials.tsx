import litio from '../assets/news/Litio.jpeg'
import at3 from '../assets/news/at3-image.jpeg'
import at3img from '../assets/news/at3-image2.jpeg'
import { useTranslation } from 'react-i18next'
export const Tutorials = () => {
  const [t] = useTranslation("global")

  return (
    <section className=" text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center w-full">
          <h2 className="lg:mb-20 font-bold bg-custom-gradient bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">{t("tutoriales.tutoriales")}</h2>

          {/* <p className="mt-4 text-gray-300 ">
            Descubre las últimas noticias vinculadas al mundo del litio
          </p> */}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-celeste text-center"
          
          >
           
           <iframe className="w-full" width="560" height="315" src="https://www.youtube.com/embed/nnGQIAwvpBs?si=RFUnBQZ1RBBmT1N6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <h2 className="mt-4 text-2xl font-bold text-white text-left ml-2">
              ¿Cómo hacer Peer to Peer?
            </h2>
{/* 
            <p className="mt-1 text-sm text-gray-300 ml-2 text-left ml-2">
              Nación Web
        </p> */}

          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-celeste"
          
          >
             <iframe className="w-full" width="560" height="315" src="https://www.youtube.com/embed/VUX8-tJ7ITU?si=XMHAqvvnKlXuyxlQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>



            <h2 className="mt-4 text-2xl font-bold text-white ml-2">
             ¿Cómo hacer Staking?
              </h2>
            
        {/* <p className="mt-1 text-sm text-gray-300 ml-2">
              Agencia Política
        </p> */}
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-celeste"
            href="https://noticiasargentinas.com/economia/atomico-3--la-criptomoneda-argentina-ligada-al-litio-reduce-su-emision-para-que-sea-sostenible-en-el-tiempo_a669c39acd066f26ecefe0568?fbclid=IwZXh0bgNhZW0CMTAAAR2t5kt4DbjXVmaGOKH-lOZuFmAcLYq2iKPRhkVG9j5xc9LjCc5X0gpPaIg_aem_b1TPAFvZgRThufzAXn8i3Q"
            target='_blank'
          >
            <img src={at3img} alt="atomico" className='max-w-[500px] mx-auto text-left w-full  max-h-[200px] object-cover rounded-lg' />

            <h2 className="mt-4 text-xl font-bold text-white ml-2">
            {t("noticias.n3")}

            </h2>

            <p className="mt-1 text-sm text-gray-300 ml-2">
              Noticias Argentinas
            </p>
          </a>

        
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
  )
}

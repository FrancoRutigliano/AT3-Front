import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import p2p from '../assets/Investors.png'
import c1 from '../assets/ComprarAt3/c1.avif'
export const Comprar = () => {

    const { t } = useTranslation("global")

    return (


        <>
      <section
  className='overflow-hidden mt-16  flex items-center'
  id='comprarAt3'
  style={{
    background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.2)), url(${c1})`,
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }}
>
  <section className="lg:mt-0 flex flex-col-reverse overflow-hidden sm:grid sm:grid-cols-3 py-10 backdrop-brightness-75">
    <div className='flex justify-center items-center px-5 md:px-0'>
      {/* <img
        alt="Peer to peer"
        src={p2p}
        className='rounded-lg max-w-[150px] lg:object-contain lg:max-w-[350px]'
      /> */}
    </div>
    <div className="sm:col-span-2 pr-24 pt-2 pb-10">
      <div className="mx-auto px-10 md:p-0 md:w-full text-right lg:text-left ltr:sm:text-left rtl:sm:text-right">
        <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words text-right">
          Comprar Atómico3
        </h2>
        <p className='text-right text-xs ms:text-sm text-white md:mt-4 md:block lg:text-base break-words'>
        Atómico3 es una criptomoneda respaldada por las reservas de litio. <br /> Comprar Atómicos no solo representa una oportunidad de inversión segura respaldada por un recurso estratégico como el litio, sino también una forma de participar en el crecimiento de una economía digital robusta. <br /> <br /> Puedes adquirir Atómicos de manera conveniente a través de nuestra DApp utilizando USDT o USDC mediante transferencia bancaria. <br /> <br /> Además, próximamente estaremos disponibles en diversas plataformas Dex como Paraswap y Uniswap, donde podrás ver y aprovechar el valor de mercado en tiempo real. <br /> Prepárate para explorar nuevas posibilidades con Atómicos.
        </p>
        <div className="mt-4 md:mt-8 flex justify-between md:justify-end">
          <Link
            to={'/ComoInvertir#tutoriales'}
            className='w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'
          >
            <button>{t("invertir.ver tutoriales")}</button>
          </Link>
          <a
            className='flex items-center justify-center ml-5 w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient hover:bg-custom-gradient2 py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'
            href='https://dapp-at-3.vercel.app/' target='_blank'
          >
            <button>Comprar AT3</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</section>



        </>
    )
}

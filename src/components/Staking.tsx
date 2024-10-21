import { useEffect, useRef } from 'react';
import staking2 from '../assets/staking2.jpeg'
// import staking2 from '../assets/stakingEN.jpeg'

// import stakingES from '../assets/staking.png'
import stakingEN from '../assets/stakingEN.jpeg'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom';



export const Staking = () => {
  const { t } = useTranslation("global")

  const location = useLocation();
  const stakingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash === '#staking' && stakingRef.current) {
      // Obtener la posición del elemento
      const elementPosition = stakingRef.current.getBoundingClientRect().top + window.scrollY;

      // Ajustar el desplazamiento según el tamaño de la pantalla
      const offset = window.innerWidth < 768 ? 40 : 60; // Menos desplazamiento en pantallas pequeñas (<768px)

      window.scrollTo({
        top: elementPosition - offset, // Ajusta la posición sumando o restando píxeles según la pantalla
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }, [location]);
  return (
    <>
      <section className='mt-20 lg:mt-0' ref={stakingRef} id='tutoriales'>
        {/* <h1 className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32  py-5' >Staking</h1> */}
        <section className=" lg:mt-20 flex  overflow-hidden  sm:grid sm:grid-cols-4 py-10 ">
          <div className=''>

            <img
              alt="staking"
              // src={i18n.language === 'es' ? stakingES : stakingEN}
              src={stakingEN}

              // className="rounded-lg w-2/3 object-cover sm:h-96 my-auto "
              className='max-w-[200px] lg:max-w-[400px] rounded w-2/3 mx-auto object-contain lg:object-contain sm:h-full'
            />
          </div>
          <div className="mx-auto col-span-2  md:p-0 md:w-full px-5  text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="mb-5  w-full bg-custom-gradient bg-clip-text text-transparent text-xl font-bold lg:text-6xl py-2 ">
              {t("stakingView.¿Qué es el Staking?")}
            </h2>

            <p className=" text-sm text-white md:mt-4 md:block   lg:text-base break-words">
              {/* {t("stakingView.¿Qué es el Staking? Descripcion")} */}
              Esto consiste en adquirir criptomonedas y mantenerlas bloqueadas en un monedero virtual , smartcontract o wallet con la finalidad de recibir ganancias o recompensas.
              Es algo muy similar a tener una cuenta de ahorros y recibir intereses por el capital depositado. <br />
              En este caso, es depositar tus Atómico3 en un contrato inteligente (contrato de staking 0xAAF3AC68Bf80d995d7793a401653713A05a67B08), manteniéndolos allí durante el plazo que vos elijas, (60 días , 180 y 240 ), beneficiándote de los intereses que podemos darte según el plazo elegido. <br />
              Al finalizar el plazo elegido todos los atómicos te serán devueltos a tu monedero con mas el interés acordado (salvo que elijas renovarlo por un nuevo plazo). <br /> <br />
              Recuerda que para esto necesitas conectar tu wallet. Si no sabes como hacerlo, puedes ver los tutoriales debajo.
            </p>
            {/* <p className=" text-sm text-white  md:block  lg:text-lg break-words" >{t("stakingView.¿Qué es el Staking? Descripcion 2")}</p> */}

            <div className="mt-4 md:mt-8 flex justify-center lg:justify-start ">
              <Link to={'/ComoInvertir#tutoriales'} className='w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient   py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'  >

                <button className=''>{t("invertir.ver tutoriales")}</button>
              </Link>
              <a className='ml-5 w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient hover:bg-custom-gradient2    py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'
                href='https://dapp-at-3.vercel.app/' target='_blank'>
                <button className='' >Staking</button>
              </a>
            </div>
          </div>
          <div>

            <img
              alt="staking"
              // src={i18n.language === 'es' ? stakingES : stakingEN}
              src={staking2}

              // className="rounded-lg w-2/3 object-cover sm:h-96 my-auto "
              className='max-w-[200px] lg:max-w-[400px] w-2/3 mx-auto object-contain lg:object-contain sm:h-full'
            />
          </div>
        </section>


      </section>
    </>
  )
}
